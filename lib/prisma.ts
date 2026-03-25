import {
    Prisma,
    PrismaClient,
    Question,
    QuestionType,
} from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "server-only";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

const _prisma = new PrismaClient({ adapter });
const prisma = _prisma.$extends({
    model: {
        question: {
            async findRandomlyByTypes(
                questionTypes: QuestionType[],
                limit: number,
            ): Promise<Question[]> {
                return await _prisma.$queryRaw<Question[]>`
                    SELECT * FROM public."Question" 
                    WHERE type = ANY(${questionTypes}::"QuestionType"[])
                    ORDER BY RANDOM() 
                    LIMIT ${limit}
                `;
            },

            async findIdsRandomlyByTypes(
                questionTypes: QuestionType[],
                limit: number,
            ): Promise<string[]> {
                return (
                    await _prisma.$queryRaw<{ id: string }[]>`
                        SELECT id FROM public."Question" 
                        WHERE type = ANY(${questionTypes}::"QuestionType"[])
                        ORDER BY RANDOM() 
                        LIMIT ${limit}
                    `
                ).map((e) => e.id);
            },

            async findQuestionsOrdered(ids: string[]): Promise<Question[]> {
                const joinedIds = Prisma.join(ids);
                return await prisma.$queryRaw`
                    SELECT * FROM public."Question" 
                    WHERE id IN (${joinedIds})
                    ORDER BY array_position(ARRAY[${joinedIds}]::text[], id)
                `;
            },
        },
    },
});

export default prisma;
