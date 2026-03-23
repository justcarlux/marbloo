-- CreateTable
CREATE TABLE `Question` (
    `id` VARCHAR(191) NOT NULL,
    `type` ENUM('completePresentSimplePositiveStatementVerbForm', 'completePresentSimpleNegativeStatementVerbForm', 'completePastSimplePositiveStatementVerbForm', 'completePastSimpleNegativeStatementVerbForm', 'completeFutureSimplePositiveStatementVerbForm', 'completeFutureSimpleNegativeStatementVerbForm', 'completePresentContinuousPositiveStatementVerbForm', 'completePresentContinuousNegativeStatementVerbForm', 'completePastContinuousPositiveStatementVerbForm', 'completePastContinuousNegativeStatementVerbForm', 'completeFutureContinuousPositiveStatementVerbForm', 'completeFutureContinuousNegativeStatementVerbForm', 'completePresentPerfectPositiveStatementVerbForm', 'completePresentPerfectNegativeStatementVerbForm', 'completePastPerfectPositiveStatementVerbForm', 'completePastPerfectNegativeStatementVerbForm', 'completeFuturePerfectPositiveStatementVerbForm', 'completeFuturePerfectNegativeStatementVerbForm', 'completePresentPerfectContinuousPositiveStatementVerbForm', 'completePresentPerfectContinuousNegativeStatementVerbForm', 'completePastPerfectContinuousPositiveStatementVerbForm', 'completePastPerfectContinuousNegativeStatementVerbForm', 'completeFuturePerfectContinuousPositiveStatementVerbForm', 'completeFuturePerfectContinuousNegativeStatementVerbForm') NOT NULL,
    `data` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
