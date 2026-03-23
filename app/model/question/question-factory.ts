import CompleteCorrectVerbFormQuestion, {
    CompleteCorrectVerbFormQuestionData,
} from "./impl/CompleteCorrectVerbFormQuestion";
import CompleteCorrectVerbFormWithAuxiliarsQuestion, {
    CompleteCorrectVerbFormWithAuxiliarsQuestionData,
} from "./impl/CompleteCorrectVerbFormWithAuxiliarsQuestion";
import QuestionInstance, { QuestionData } from "./QuestionInstance";
import type { QuestionType } from "@/generated/prisma/enums";

interface QuestionDataTypes {
    // Simple tenses
    completePresentSimplePositiveStatementVerbForm: CompleteCorrectVerbFormQuestionData;
    completePresentSimpleNegativeStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completePastSimplePositiveStatementVerbForm: CompleteCorrectVerbFormQuestionData;
    completePastSimpleNegativeStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completeFutureSimplePositiveStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completeFutureSimpleNegativeStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    // Continuous tenses
    completePresentContinuousPositiveStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completePresentContinuousNegativeStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completePastContinuousPositiveStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completePastContinuousNegativeStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completeFutureContinuousPositiveStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completeFutureContinuousNegativeStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    // Perfect tenses
    completePresentPerfectPositiveStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completePresentPerfectNegativeStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completePastPerfectPositiveStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completePastPerfectNegativeStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completeFuturePerfectPositiveStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completeFuturePerfectNegativeStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    // Perfect continuous tenses
    completePresentPerfectContinuousPositiveStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completePresentPerfectContinuousNegativeStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completePastPerfectContinuousPositiveStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completePastPerfectContinuousNegativeStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completeFuturePerfectContinuousPositiveStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
    completeFuturePerfectContinuousNegativeStatementVerbForm: CompleteCorrectVerbFormWithAuxiliarsQuestionData;
}

const completeCorrectVerbFormProvider = (
    data: QuestionData<CompleteCorrectVerbFormQuestionData>,
) => {
    return new CompleteCorrectVerbFormQuestion(data);
};

const completeCorrectVerbFormWithAuxiliarsVerbForm = {
    nonContinuous: {
        nonFuture: {
            positiveProvider: ({
                id,
                type,
                data,
            }: QuestionData<CompleteCorrectVerbFormWithAuxiliarsQuestionData>) => {
                return new CompleteCorrectVerbFormWithAuxiliarsQuestion({
                    id,
                    type,
                    data,
                    continuousType: "none",
                    isFuture: false,
                    isNegative: false,
                });
            },
            negativeProvider: ({
                id,
                type,
                data,
            }: QuestionData<CompleteCorrectVerbFormWithAuxiliarsQuestionData>) => {
                return new CompleteCorrectVerbFormWithAuxiliarsQuestion({
                    id,
                    type,
                    data,
                    continuousType: "none",
                    isFuture: false,
                    isNegative: true,
                });
            },
        },
        future: {
            positiveProvider: ({
                id,
                type,
                data,
            }: QuestionData<CompleteCorrectVerbFormWithAuxiliarsQuestionData>) => {
                return new CompleteCorrectVerbFormWithAuxiliarsQuestion({
                    id,
                    type,
                    data,
                    continuousType: "none",
                    isFuture: true,
                    isNegative: false,
                });
            },
            negativeProvider: ({
                id,
                type,
                data,
            }: QuestionData<CompleteCorrectVerbFormWithAuxiliarsQuestionData>) => {
                return new CompleteCorrectVerbFormWithAuxiliarsQuestion({
                    id,
                    type,
                    data,
                    continuousType: "none",
                    isFuture: true,
                    isNegative: true,
                });
            },
        },
    },
    nonPerfectContinuous: {
        nonFuture: {
            positiveProvider: ({
                id,
                type,
                data,
            }: QuestionData<CompleteCorrectVerbFormWithAuxiliarsQuestionData>) => {
                return new CompleteCorrectVerbFormWithAuxiliarsQuestion({
                    id,
                    type,
                    data,
                    continuousType: "nonPerfect",
                    isFuture: false,
                    isNegative: false,
                });
            },
            negativeProvider: ({
                id,
                type,
                data,
            }: QuestionData<CompleteCorrectVerbFormWithAuxiliarsQuestionData>) => {
                return new CompleteCorrectVerbFormWithAuxiliarsQuestion({
                    id,
                    type,
                    data,
                    continuousType: "nonPerfect",
                    isFuture: false,
                    isNegative: true,
                });
            },
        },
        future: {
            positiveProvider: ({
                id,
                type,
                data,
            }: QuestionData<CompleteCorrectVerbFormWithAuxiliarsQuestionData>) => {
                return new CompleteCorrectVerbFormWithAuxiliarsQuestion({
                    id,
                    type,
                    data,
                    continuousType: "nonPerfect",
                    isFuture: true,
                    isNegative: false,
                });
            },
            negativeProvider: ({
                id,
                type,
                data,
            }: QuestionData<CompleteCorrectVerbFormWithAuxiliarsQuestionData>) => {
                return new CompleteCorrectVerbFormWithAuxiliarsQuestion({
                    id,
                    type,
                    data,
                    continuousType: "nonPerfect",
                    isFuture: true,
                    isNegative: true,
                });
            },
        },
    },
    perfectContinuous: {
        nonFuture: {
            positiveProvider: ({
                id,
                type,
                data,
            }: QuestionData<CompleteCorrectVerbFormWithAuxiliarsQuestionData>) => {
                return new CompleteCorrectVerbFormWithAuxiliarsQuestion({
                    id,
                    type,
                    data,
                    continuousType: "perfect",
                    isFuture: false,
                    isNegative: false,
                });
            },
            negativeProvider: ({
                id,
                type,
                data,
            }: QuestionData<CompleteCorrectVerbFormWithAuxiliarsQuestionData>) => {
                return new CompleteCorrectVerbFormWithAuxiliarsQuestion({
                    id,
                    type,
                    data,
                    continuousType: "perfect",
                    isFuture: false,
                    isNegative: true,
                });
            },
        },
        future: {
            positiveProvider: ({
                id,
                type,
                data,
            }: QuestionData<CompleteCorrectVerbFormWithAuxiliarsQuestionData>) => {
                return new CompleteCorrectVerbFormWithAuxiliarsQuestion({
                    id,
                    type,
                    data,
                    continuousType: "perfect",
                    isFuture: true,
                    isNegative: false,
                });
            },
            negativeProvider: ({
                id,
                type,
                data,
            }: QuestionData<CompleteCorrectVerbFormWithAuxiliarsQuestionData>) => {
                return new CompleteCorrectVerbFormWithAuxiliarsQuestion({
                    id,
                    type,
                    data,
                    continuousType: "perfect",
                    isFuture: true,
                    isNegative: true,
                });
            },
        },
    },
};

const questionInstanceProviders: {
    [Type in QuestionType]: (
        data: QuestionData<QuestionDataTypes[Type]>,
    ) => QuestionInstance<QuestionDataTypes[Type]>;
} = {
    // Simple tenses
    completePresentSimplePositiveStatementVerbForm:
        completeCorrectVerbFormProvider,
    completePresentSimpleNegativeStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.nonContinuous.nonFuture
            .negativeProvider,
    completePastSimplePositiveStatementVerbForm:
        completeCorrectVerbFormProvider,
    completePastSimpleNegativeStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.nonContinuous.nonFuture
            .negativeProvider,
    completeFutureSimplePositiveStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.nonContinuous.future
            .positiveProvider,
    completeFutureSimpleNegativeStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.nonContinuous.future
            .negativeProvider,
    // Continuous tenses
    completePresentContinuousPositiveStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.nonPerfectContinuous
            .nonFuture.positiveProvider,
    completePresentContinuousNegativeStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.nonPerfectContinuous
            .nonFuture.negativeProvider,
    completePastContinuousPositiveStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.nonPerfectContinuous
            .nonFuture.positiveProvider,
    completePastContinuousNegativeStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.nonPerfectContinuous
            .nonFuture.negativeProvider,
    completeFutureContinuousPositiveStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.nonPerfectContinuous.future
            .positiveProvider,
    completeFutureContinuousNegativeStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.nonPerfectContinuous.future
            .negativeProvider,
    // Perfect tenses
    completePresentPerfectPositiveStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.nonContinuous.nonFuture
            .positiveProvider,
    completePresentPerfectNegativeStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.nonContinuous.nonFuture
            .negativeProvider,
    completePastPerfectPositiveStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.nonContinuous.nonFuture
            .positiveProvider,
    completePastPerfectNegativeStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.nonContinuous.nonFuture
            .negativeProvider,
    completeFuturePerfectPositiveStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.nonContinuous.future
            .positiveProvider,
    completeFuturePerfectNegativeStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.nonContinuous.future
            .negativeProvider,
    // Perfect continuous tenses
    completePresentPerfectContinuousPositiveStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.perfectContinuous.nonFuture
            .positiveProvider,
    completePresentPerfectContinuousNegativeStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.perfectContinuous.nonFuture
            .negativeProvider,
    completePastPerfectContinuousPositiveStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.perfectContinuous.nonFuture
            .positiveProvider,
    completePastPerfectContinuousNegativeStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.perfectContinuous.nonFuture
            .negativeProvider,
    completeFuturePerfectContinuousPositiveStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.perfectContinuous.future
            .positiveProvider,
    completeFuturePerfectContinuousNegativeStatementVerbForm:
        completeCorrectVerbFormWithAuxiliarsVerbForm.perfectContinuous.future
            .negativeProvider,
};

export function createQuestionInstance<T extends QuestionType>({
    id,
    type,
    data,
}: {
    id: string;
    type: T;
    data: QuestionDataTypes[T];
}) {
    return questionInstanceProviders[type]({ id, type, data });
}

export function typedQuestionData<T extends QuestionType>({
    id,
    type,
    data,
}: {
    id: string;
    type: T;
    data: QuestionDataTypes[T];
}): QuestionData<QuestionDataTypes[T]> & { id: string } {
    return {
        id,
        data,
        type,
    };
}
