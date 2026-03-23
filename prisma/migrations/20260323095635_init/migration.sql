-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('completePresentSimplePositiveStatementVerbForm', 'completePresentSimpleNegativeStatementVerbForm', 'completePastSimplePositiveStatementVerbForm', 'completePastSimpleNegativeStatementVerbForm', 'completeFutureSimplePositiveStatementVerbForm', 'completeFutureSimpleNegativeStatementVerbForm', 'completePresentContinuousPositiveStatementVerbForm', 'completePresentContinuousNegativeStatementVerbForm', 'completePastContinuousPositiveStatementVerbForm', 'completePastContinuousNegativeStatementVerbForm', 'completeFutureContinuousPositiveStatementVerbForm', 'completeFutureContinuousNegativeStatementVerbForm', 'completePresentPerfectPositiveStatementVerbForm', 'completePresentPerfectNegativeStatementVerbForm', 'completePastPerfectPositiveStatementVerbForm', 'completePastPerfectNegativeStatementVerbForm', 'completeFuturePerfectPositiveStatementVerbForm', 'completeFuturePerfectNegativeStatementVerbForm', 'completePresentPerfectContinuousPositiveStatementVerbForm', 'completePresentPerfectContinuousNegativeStatementVerbForm', 'completePastPerfectContinuousPositiveStatementVerbForm', 'completePastPerfectContinuousNegativeStatementVerbForm', 'completeFuturePerfectContinuousPositiveStatementVerbForm', 'completeFuturePerfectContinuousNegativeStatementVerbForm');

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "type" "QuestionType" NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);
