-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('grammarTrivia', 'completePresentToBePositiveStatementVerbForm', 'completePresentToBeNegativeStatementVerbForm', 'completePastToBePositiveStatementVerbForm', 'completePastToBeNegativeStatementVerbForm', 'completeFutureToBePositiveStatementVerbForm', 'completeFutureToBeNegativeStatementVerbForm', 'turnPositivePresentToBeStatementIntoQuestion', 'turnNegativePresentToBeStatementIntoQuestion', 'completePresentSimplePositiveStatementVerbForm', 'completePresentSimpleNegativeStatementVerbForm', 'completePastSimplePositiveStatementVerbForm', 'completePastSimpleNegativeStatementVerbForm', 'completeFutureSimplePositiveStatementVerbForm', 'completeFutureSimpleNegativeStatementVerbForm', 'completePresentContinuousPositiveStatementVerbForm', 'completePresentContinuousNegativeStatementVerbForm', 'completePastContinuousPositiveStatementVerbForm', 'completePastContinuousNegativeStatementVerbForm', 'completeFutureContinuousPositiveStatementVerbForm', 'completeFutureContinuousNegativeStatementVerbForm', 'completePresentPerfectPositiveStatementVerbForm', 'completePresentPerfectNegativeStatementVerbForm', 'completePastPerfectPositiveStatementVerbForm', 'completePastPerfectNegativeStatementVerbForm', 'completeFuturePerfectPositiveStatementVerbForm', 'completeFuturePerfectNegativeStatementVerbForm', 'completePresentPerfectContinuousPositiveStatementVerbForm', 'completePresentPerfectContinuousNegativeStatementVerbForm', 'completePastPerfectContinuousPositiveStatementVerbForm', 'completePastPerfectContinuousNegativeStatementVerbForm', 'completeFuturePerfectContinuousPositiveStatementVerbForm', 'completeFuturePerfectContinuousNegativeStatementVerbForm', 'phoneticsTrivia', 'identifyIPASymbolBySoundEasy', 'identifyIPASymbolBySoundMedium', 'identifyIPASymbolBySoundHard', 'identifyIPASymbolBySoundHarder');

-- CreateEnum
CREATE TYPE "QuestionSetCategory" AS ENUM ('grammar', 'phonetics');

-- CreateEnum
CREATE TYPE "OAuthProvider" AS ENUM ('google', 'github', 'discord');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "passwordHash" TEXT,
    "displayName" TEXT,
    "avatarUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OAuthAccount" (
    "provider" "OAuthProvider" NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OAuthAccount_pkey" PRIMARY KEY ("provider","providerAccountId")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

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
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "OAuthAccount_userId_idx" ON "OAuthAccount"("userId");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionSetStatistic_questionSetUserId_questionId_key" ON "QuestionSetStatistic"("questionSetUserId", "questionId");

-- AddForeignKey
ALTER TABLE "OAuthAccount" ADD CONSTRAINT "OAuthAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionSet" ADD CONSTRAINT "QuestionSet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionSetStatistic" ADD CONSTRAINT "QuestionSetStatistic_questionSetUserId_fkey" FOREIGN KEY ("questionSetUserId") REFERENCES "QuestionSet"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

