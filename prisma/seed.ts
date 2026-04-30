import { PrismaClient } from "@/generated/prisma/client";
import completeFutureContinuousNegativeStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/continuous/future/completeFutureContinuousNegativeStatementVerbForm";
import completeFutureContinuousPositiveStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/continuous/future/completeFutureContinuousPositiveStatementVerbForm";
import completePastContinuousNegativeStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/continuous/past/completePastContinuousNegativeStatementVerbForm";
import completePastContinuousPositiveStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/continuous/past/completePastContinuousPositiveStatementVerbForm";
import completePresentContinuousNegativeStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/continuous/present/completePresentContinuousNegativeStatementVerbForm";
import completePresentContinuousPositiveStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/continuous/present/completePresentContinuousPositiveStatementVerbForm";
import completeFuturePerfectContinuousNegativeStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/perfect-continuous/future/completeFuturePerfectContinuousNegativeStatementVerbForm";
import completeFuturePerfectContinuousPositiveStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/perfect-continuous/future/completeFuturePerfectContinuousPositiveStatementVerbForm";
import completePastPerfectContinuousNegativeStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/perfect-continuous/past/completePastPerfectContinuousNegativeStatementVerbForm";
import completePastPerfectContinuousPositiveStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/perfect-continuous/past/completePastPerfectContinuousPositiveStatementVerbForm";
import completePresentPerfectContinuousNegativeStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/perfect-continuous/present/completePresentPerfectContinuousNegativeStatementVerbForm";
import completePresentPerfectContinuousPositiveStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/perfect-continuous/present/completePresentPerfectContinuousPositiveStatementVerbForm";
import completeFuturePerfectNegativeStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/perfect/future/completeFuturePerfectNegativeStatementVerbForm";
import completeFuturePerfectPositiveStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/perfect/future/completeFuturePerfectPositiveStatementVerbForm";
import completePastPerfectNegativeStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/perfect/past/completePastPerfectNegativeStatementVerbForm";
import completePastPerfectPositiveStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/perfect/past/completePastPerfectPositiveStatementVerbForm";
import completePresentPerfectNegativeStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/perfect/present/completePresentPerfectNegativeStatementVerbForm";
import completePresentPerfectPositiveStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/perfect/present/completePresentPerfectPositiveStatementVerbForm";
import completeFutureSimpleNegativeStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/simple/future/completeFutureSimpleNegativeStatementVerbForm";
import completeFutureSimplePositiveStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/simple/future/completeFutureSimplePositiveStatementVerbForm";
import completePastSimpleNegativeStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/simple/past/completePastSimpleNegativeStatementVerbForm";
import completePastSimplePositiveStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/simple/past/completePastSimplePositiveStatementVerbForm";
import completePresentSimpleNegativeStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/simple/present/completePresentSimpleNegativeStatementVerbForm";
import completePresentSimplePositiveStatementVerbForm from "@/prisma/data/grammar/complete-verb-forms/simple/present/completePresentSimplePositiveStatementVerbForm";
import { PrismaPg } from "@prisma/adapter-pg";
import { JsonObject } from "@prisma/client/runtime/client";
import { QuestionData } from "../app/model/question/QuestionInstance";
import completePresentToBePositiveStatementVerbForm from "./data/grammar/complete-verb-forms/to-be/present/completePresentToBePositiveStatementVerbForm";
import completePresentToBeNegativeStatementVerbForm from "./data/grammar/complete-verb-forms/to-be/present/completePresentToBeNegativeStatementVerbForm";
import completePastToBePositiveStatementVerbForm from "./data/grammar/complete-verb-forms/to-be/past/completePastToBePositiveStatementVerbForm";
import completePastToBeNegativeStatementVerbForm from "./data/grammar/complete-verb-forms/to-be/past/completePastToBeNegativeStatementVerbForm";
import completeFutureToBePositiveStatementVerbForm from "./data/grammar/complete-verb-forms/to-be/future/completeFutureToBePositiveStatementVerbForm";
import completeFutureToBeNegativeStatementVerbForm from "./data/grammar/complete-verb-forms/to-be/future/completeFutureToBeNegativeStatementVerbForm";
import grammarTrivia from "./data/grammar/grammarTrivia";
import turnPositivePresentToBeStatementIntoQuestion from "./data/grammar/complete-verb-forms/to-be/present/turnPositivePresentToBeStatementIntoQuestion";
import turnNegativePresentToBeStatementIntoQuestion from "./data/grammar/complete-verb-forms/to-be/present/turnNegativePresentToBeStatementIntoQuestion";
import phoneticsTrivia from "./data/phonetics/phoneticsTrivia";
import identifyIPASymbolBySoundEasy from "./data/phonetics/identify-ipa-symbol-by-sound/identifyIPASymbolBySoundEasy";
import identifyIPASymbolBySoundMedium from "./data/phonetics/identify-ipa-symbol-by-sound/identifyIPASymbolBySoundMedium";
import identifyIPASymbolBySoundHard from "./data/phonetics/identify-ipa-symbol-by-sound/identifyIPASymbolBySoundHard";
import identifyIPASymbolBySoundHarder from "./data/phonetics/identify-ipa-symbol-by-sound/identifyIPASymbolBySoundHarder";

const questionData: QuestionData<unknown>[] = [
    // Grammar trivia
    ...grammarTrivia,
    // "To be" verb
    ...completePresentToBePositiveStatementVerbForm,
    ...completePresentToBeNegativeStatementVerbForm,
    ...completePastToBePositiveStatementVerbForm,
    ...completePastToBeNegativeStatementVerbForm,
    ...completeFutureToBePositiveStatementVerbForm,
    ...completeFutureToBeNegativeStatementVerbForm,
    ...turnPositivePresentToBeStatementIntoQuestion,
    ...turnNegativePresentToBeStatementIntoQuestion,
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
    // Phonetics trivia
    ...phoneticsTrivia,
    // Identify IPA symbol by sound
    ...identifyIPASymbolBySoundEasy,
    ...identifyIPASymbolBySoundMedium,
    ...identifyIPASymbolBySoundHard,
    ...identifyIPASymbolBySoundHarder,
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
