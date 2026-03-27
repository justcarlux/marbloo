import { PrismaClient } from "@/generated/prisma/client";
import completeFutureContinuousNegativeStatementVerbForm from "@/prisma/data/complete-verb-forms/continuous/future/completeFutureContinuousNegativeStatementVerbForm";
import completeFutureContinuousPositiveStatementVerbForm from "@/prisma/data/complete-verb-forms/continuous/future/completeFutureContinuousPositiveStatementVerbForm";
import completePastContinuousNegativeStatementVerbForm from "@/prisma/data/complete-verb-forms/continuous/past/completePastContinuousNegativeStatementVerbForm";
import completePastContinuousPositiveStatementVerbForm from "@/prisma/data/complete-verb-forms/continuous/past/completePastContinuousPositiveStatementVerbForm";
import completePresentContinuousNegativeStatementVerbForm from "@/prisma/data/complete-verb-forms/continuous/present/completePresentContinuousNegativeStatementVerbForm";
import completePresentContinuousPositiveStatementVerbForm from "@/prisma/data/complete-verb-forms/continuous/present/completePresentContinuousPositiveStatementVerbForm";
import completeFuturePerfectContinuousNegativeStatementVerbForm from "@/prisma/data/complete-verb-forms/perfect-continuous/future/completeFuturePerfectContinuousNegativeStatementVerbForm";
import completeFuturePerfectContinuousPositiveStatementVerbForm from "@/prisma/data/complete-verb-forms/perfect-continuous/future/completeFuturePerfectContinuousPositiveStatementVerbForm";
import completePastPerfectContinuousNegativeStatementVerbForm from "@/prisma/data/complete-verb-forms/perfect-continuous/past/completePastPerfectContinuousNegativeStatementVerbForm";
import completePastPerfectContinuousPositiveStatementVerbForm from "@/prisma/data/complete-verb-forms/perfect-continuous/past/completePastPerfectContinuousPositiveStatementVerbForm";
import completePresentPerfectContinuousNegativeStatementVerbForm from "@/prisma/data/complete-verb-forms/perfect-continuous/present/completePresentPerfectContinuousNegativeStatementVerbForm";
import completePresentPerfectContinuousPositiveStatementVerbForm from "@/prisma/data/complete-verb-forms/perfect-continuous/present/completePresentPerfectContinuousPositiveStatementVerbForm";
import completeFuturePerfectNegativeStatementVerbForm from "@/prisma/data/complete-verb-forms/perfect/future/completeFuturePerfectNegativeStatementVerbForm";
import completeFuturePerfectPositiveStatementVerbForm from "@/prisma/data/complete-verb-forms/perfect/future/completeFuturePerfectPositiveStatementVerbForm";
import completePastPerfectNegativeStatementVerbForm from "@/prisma/data/complete-verb-forms/perfect/past/completePastPerfectNegativeStatementVerbForm";
import completePastPerfectPositiveStatementVerbForm from "@/prisma/data/complete-verb-forms/perfect/past/completePastPerfectPositiveStatementVerbForm";
import completePresentPerfectNegativeStatementVerbForm from "@/prisma/data/complete-verb-forms/perfect/present/completePresentPerfectNegativeStatementVerbForm";
import completePresentPerfectPositiveStatementVerbForm from "@/prisma/data/complete-verb-forms/perfect/present/completePresentPerfectPositiveStatementVerbForm";
import completeFutureSimpleNegativeStatementVerbForm from "@/prisma/data/complete-verb-forms/simple/future/completeFutureSimpleNegativeStatementVerbForm";
import completeFutureSimplePositiveStatementVerbForm from "@/prisma/data/complete-verb-forms/simple/future/completeFutureSimplePositiveStatementVerbForm";
import completePastSimpleNegativeStatementVerbForm from "@/prisma/data/complete-verb-forms/simple/past/completePastSimpleNegativeStatementVerbForm";
import completePastSimplePositiveStatementVerbForm from "@/prisma/data/complete-verb-forms/simple/past/completePastSimplePositiveStatementVerbForm";
import completePresentSimpleNegativeStatementVerbForm from "@/prisma/data/complete-verb-forms/simple/present/completePresentSimpleNegativeStatementVerbForm";
import completePresentSimplePositiveStatementVerbForm from "@/prisma/data/complete-verb-forms/simple/present/completePresentSimplePositiveStatementVerbForm";
import { PrismaPg } from "@prisma/adapter-pg";
import { JsonObject } from "@prisma/client/runtime/client";
import { QuestionData } from "../app/model/question/QuestionInstance";
import completePresentToBePositiveStatementVerbForm from "./data/complete-verb-forms/to-be/present/completePresentToBePositiveStatementVerbForm";
import completePresentToBeNegativeStatementVerbForm from "./data/complete-verb-forms/to-be/present/completePresentToBeNegativeStatementVerbForm";
import completePastToBePositiveStatementVerbForm from "./data/complete-verb-forms/to-be/past/completePastToBePositiveStatementVerbForm";
import completePastToBeNegativeStatementVerbForm from "./data/complete-verb-forms/to-be/past/completePastToBeNegativeStatementVerbForm";
import completeFutureToBePositiveStatementVerbForm from "./data/complete-verb-forms/to-be/future/completeFutureToBePositiveStatementVerbForm";
import completeFutureToBeNegativeStatementVerbForm from "./data/complete-verb-forms/to-be/future/completeFutureToBeNegativeStatementVerbForm";

const questionData: QuestionData<unknown>[] = [
    // "To be" verb
    ...completePresentToBePositiveStatementVerbForm,
    ...completePresentToBeNegativeStatementVerbForm,
    ...completePastToBePositiveStatementVerbForm,
    ...completePastToBeNegativeStatementVerbForm,
    ...completeFutureToBePositiveStatementVerbForm,
    ...completeFutureToBeNegativeStatementVerbForm,
    // Simple tenses
    ...completePresentSimplePositiveStatementVerbForm,
    ...completePresentSimpleNegativeStatementVerbForm,
    ...completePastSimplePositiveStatementVerbForm,
    ...completePastSimpleNegativeStatementVerbForm,
    ...completeFutureSimplePositiveStatementVerbForm,
    ...completeFutureSimpleNegativeStatementVerbForm,
    // Continuous tenses
    ...completePresentContinuousPositiveStatementVerbForm,
    ...completePresentContinuousNegativeStatementVerbForm,
    ...completePastContinuousPositiveStatementVerbForm,
    ...completePastContinuousNegativeStatementVerbForm,
    ...completeFutureContinuousPositiveStatementVerbForm,
    ...completeFutureContinuousNegativeStatementVerbForm,
    // Perfect tenses
    ...completePresentPerfectPositiveStatementVerbForm,
    ...completePresentPerfectNegativeStatementVerbForm,
    ...completePastPerfectPositiveStatementVerbForm,
    ...completePastPerfectNegativeStatementVerbForm,
    ...completeFuturePerfectPositiveStatementVerbForm,
    ...completeFuturePerfectNegativeStatementVerbForm,
    // Perfect continuous tenses
    ...completePresentPerfectContinuousPositiveStatementVerbForm,
    ...completePresentPerfectContinuousNegativeStatementVerbForm,
    ...completePastPerfectContinuousPositiveStatementVerbForm,
    ...completePastPerfectContinuousNegativeStatementVerbForm,
    ...completeFuturePerfectContinuousPositiveStatementVerbForm,
    ...completeFuturePerfectContinuousNegativeStatementVerbForm,
];

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
    await prisma.question.deleteMany({});
    await prisma.question.createMany({
        data: questionData as (QuestionData<unknown> & {
            data: JsonObject;
        })[],
    });
    console.log(`Seeded ${questionData.length} questions to the database!`);
}

main().finally(() => prisma.$disconnect());
