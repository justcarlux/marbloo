"use server";

import { QuestionType } from "@/generated/prisma/enums";
import prisma from "@/lib/prisma";

export type CreateQuestionSetErrorReason = "limit_too_short";

export type CreateQuestionSetResponse =
    | {
          success: true;
          id: string;
      }
    | {
          success: false;
          reason: CreateQuestionSetErrorReason;
      };

export async function createQuestionSet(
    types: QuestionType[],
    limit: number,
): Promise<CreateQuestionSetResponse> {
    if (limit < 20) {
        return {
            success: false,
            reason: "limit_too_short",
        };
    }

    const questions = await prisma.$queryRaw<{ id: string }[]>`
        SELECT id FROM public."Question" 
        WHERE type = ANY(${types}::"QuestionType"[])
        ORDER BY RANDOM() 
        LIMIT ${limit}
    `;

    const practiceQuestionSet = await prisma.practiceQuestionSet.create({
        data: { questions: questions.map((e) => e.id) },
    });

    return {
        success: true,
        id: practiceQuestionSet.id,
    };
}
