-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('grammarTrivia', 'completePresentToBePositiveStatementVerbForm', 'completePresentToBeNegativeStatementVerbForm', 'completePastToBePositiveStatementVerbForm', 'completePastToBeNegativeStatementVerbForm', 'completeFutureToBePositiveStatementVerbForm', 'completeFutureToBeNegativeStatementVerbForm', 'turnPositivePresentToBeStatementIntoQuestion', 'turnNegativePresentToBeStatementIntoQuestion', 'completePresentSimplePositiveStatementVerbForm', 'completePresentSimpleNegativeStatementVerbForm', 'completePastSimplePositiveStatementVerbForm', 'completePastSimpleNegativeStatementVerbForm', 'completeFutureSimplePositiveStatementVerbForm', 'completeFutureSimpleNegativeStatementVerbForm', 'completePresentContinuousPositiveStatementVerbForm', 'completePresentContinuousNegativeStatementVerbForm', 'completePastContinuousPositiveStatementVerbForm', 'completePastContinuousNegativeStatementVerbForm', 'completeFutureContinuousPositiveStatementVerbForm', 'completeFutureContinuousNegativeStatementVerbForm', 'completePresentPerfectPositiveStatementVerbForm', 'completePresentPerfectNegativeStatementVerbForm', 'completePastPerfectPositiveStatementVerbForm', 'completePastPerfectNegativeStatementVerbForm', 'completeFuturePerfectPositiveStatementVerbForm', 'completeFuturePerfectNegativeStatementVerbForm', 'completePresentPerfectContinuousPositiveStatementVerbForm', 'completePresentPerfectContinuousNegativeStatementVerbForm', 'completePastPerfectContinuousPositiveStatementVerbForm', 'completePastPerfectContinuousNegativeStatementVerbForm', 'completeFuturePerfectContinuousPositiveStatementVerbForm', 'completeFuturePerfectContinuousNegativeStatementVerbForm', 'phoneticsTrivia', 'identifyIPASymbolBySoundEasy', 'identifyIPASymbolBySoundMedium', 'identifyIPASymbolBySoundHard', 'identifyIPASymbolBySoundHarder');

-- CreateEnum
CREATE TYPE "QuestionSetCategory" AS ENUM ('grammar', 'phonetics');

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "type" "QuestionType" NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionSet" (
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" "QuestionSetCategory" NOT NULL,
    "questions" TEXT[],
    "currentQuestionIndex" INTEGER NOT NULL,
    "currentQuestionHasUsedHint" BOOLEAN NOT NULL,
    "currentQuestionStartedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuestionSet_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "QuestionSetStatistic" (
    "id" SERIAL NOT NULL,
    "questionSetUserId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "hasUsedHint" BOOLEAN NOT NULL,
    "answer" TEXT NOT NULL,
    "attempts" INTEGER NOT NULL,

    CONSTRAINT "QuestionSetStatistic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QuestionSetStatistic_questionSetUserId_questionId_key" ON "QuestionSetStatistic"("questionSetUserId", "questionId");

-- AddForeignKey
ALTER TABLE "QuestionSetStatistic" ADD CONSTRAINT "QuestionSetStatistic_questionSetUserId_fkey" FOREIGN KEY ("questionSetUserId") REFERENCES "QuestionSet"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
