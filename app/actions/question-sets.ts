"use server";

import type { ZodError } from "zod";

import { QuestionSetCategory, QuestionType } from "@/generated/prisma/enums";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { distributeTotal } from "../utils/distribute-total";
import { shuffleArray } from "../utils/shuffle-array";

const questionTypeSchema = z.enum(QuestionType);
const questionSetCategorySchema = z.enum(QuestionSetCategory);

const createQuestionSetSchema = z.object({
    types: z.array(questionTypeSchema).nonempty(),
    category: questionSetCategorySchema,
    amount: z.number().int().min(20),
});

const updateQuestionSetSchema = z.object({
    currentQuestionIndex: z.number().int().nonnegative().optional(),
    currentQuestionHasUsedHint: z.boolean().optional(),
    currentQuestionStartedAt: z.date().nullable().optional(),
});

const createQuestionStatisticSchema = z.object({
    questionId: z.string().min(1),
    hasUsedHint: z.boolean(),
    time: z.number().int().nonnegative(),
});

export type CreateQuestionSetErrorReason = "validation_error";

export type CreateQuestionSetResponse =
    | {
          success: true;
      }
    | {
          success: false;
          reason: CreateQuestionSetErrorReason;
          error: ZodError;
      };

export async function createQuestionSet(
    input: z.input<typeof createQuestionSetSchema>,
): Promise<CreateQuestionSetResponse> {
    const result = createQuestionSetSchema.safeParse(input);

    if (!result.success) {
        return {
            success: false,
            reason: "validation_error",
            error: result.error,
        };
    }

    const { types, category, amount } = result.data;

    const distribution = distributeTotal(amount, types.length);
    const questions = shuffleArray(
        (
            await Promise.all(
                distribution.map((amount, index) => {
                    return prisma.question.findIdsRandomlyByTypes(
                        [types[index]],
                        amount,
                    );
                }),
            )
        ).flat(),
    );

    await prisma.questionSet.upsert({
        where: {
            userId: "1",
        },
        update: {
            type: category,
            questions,
            currentQuestionIndex: 0,
        },
        create: {
            userId: "1",
            type: category,
            questions,
            currentQuestionIndex: 0,
            currentQuestionHasUsedHint: false,
        },
    });

    await prisma.questionSetStatistic.deleteMany({
        where: { questionSetUserId: "1" },
    });

    return {
        success: true,
    };
}

export async function updateQuestionSet(
    input: z.input<typeof updateQuestionSetSchema>,
) {
    const {
        currentQuestionIndex,
        currentQuestionHasUsedHint,
        currentQuestionStartedAt,
    } = updateQuestionSetSchema.parse(input);

    await prisma.questionSet.update({
        where: {
            userId: "1",
        },
        data: {
            currentQuestionIndex,
            currentQuestionHasUsedHint,
            currentQuestionStartedAt,
        },
    });
}

export async function deleteQuestionSet() {
    await prisma.questionSetStatistic.deleteMany({
        where: { questionSetUserId: "1" },
    });
    await prisma.questionSet.delete({ where: { userId: "1" } });
}

export async function createQuestionStatistic(
    input: z.input<typeof createQuestionStatisticSchema>,
): Promise<boolean> {
    const { questionId, hasUsedHint, time } =
        createQuestionStatisticSchema.parse(input);

    const result = await prisma.questionSetStatistic.createMany({
        data: [{ questionSetUserId: "1", questionId, hasUsedHint, time }],
        skipDuplicates: true,
    });

    return result.count === 1;
}
