"use server";

import { QuestionSetCategory, QuestionType } from "@/generated/prisma/enums";
import prisma from "@/lib/prisma";
import { distributeTotal } from "../utils/distribute-total";
import { shuffleArray } from "../utils/shuffle-array";

export type CreateQuestionSetErrorReason = "limit_too_short";

export type CreateQuestionSetResponse =
    | {
          success: true;
      }
    | {
          success: false;
          reason: CreateQuestionSetErrorReason;
      };

export async function createQuestionSet(
    types: QuestionType[],
    category: QuestionSetCategory,
    limit: number,
): Promise<CreateQuestionSetResponse> {
    if (limit < 20) {
        return {
            success: false,
            reason: "limit_too_short",
        };
    }

    const distribution = distributeTotal(limit, types.length);
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
        },
    });

    return {
        success: true,
    };
}

export async function updateQuestionSet({
    currentQuestionIndex,
    currentQuestionHasUsedHint,
    currentQuestionStartedAt,
}: {
    currentQuestionIndex?: number;
    currentQuestionHasUsedHint?: boolean;
    currentQuestionStartedAt?: Date;
}) {
    await prisma.questionSet.update({
        where: {
            userId: "1",
        },
        data: {
            currentQuestionIndex,
        },
    });
}

export async function deleteQuestionSet() {
    await prisma.questionSet.delete({ where: { userId: "1" } });
}
