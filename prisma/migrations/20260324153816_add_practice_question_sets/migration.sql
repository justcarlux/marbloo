-- CreateTable
CREATE TABLE "PracticeQuestionSet" (
    "id" TEXT NOT NULL,
    "questions" TEXT[],

    CONSTRAINT "PracticeQuestionSet_pkey" PRIMARY KEY ("id")
);
