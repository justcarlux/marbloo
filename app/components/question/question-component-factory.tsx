import { CompleteCorrectVerbFormQuestionData } from "@/app/model/question/impl/CompleteCorrectVerbFormQuestion";
import { CompleteCorrectVerbFormWithAuxiliarsQuestionData } from "@/app/model/question/impl/CompleteCorrectVerbFormWithAuxiliarsQuestion";
import { QuestionData } from "@/app/model/question/QuestionInstance";
import CompleteMissingPhraseQuestionForm from "./impl/CompleteMissingPhraseQuestionForm";
import { QuestionType } from "@/generated/prisma/enums";
import { Question } from "@/generated/prisma/client";

const completeMissingPhraseQuestionFormComponentProvider = (
    data: QuestionData<unknown>,
    handleNextQuestion: () => void,
) => {
    return (
        <CompleteMissingPhraseQuestionForm
            questionData={
                data as QuestionData<
                    | CompleteCorrectVerbFormQuestionData
                    | CompleteCorrectVerbFormWithAuxiliarsQuestionData
                >
            }
            handleNextQuestion={handleNextQuestion}
        />
    );
};

const componentProviders: {
    [key in QuestionType]: (
        data: QuestionData<unknown>,
        handleNextQuestion: () => void,
    ) => React.ReactElement;
} = {
    // Simple tenses
    completePresentSimplePositiveStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completePresentSimpleNegativeStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completePastSimplePositiveStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completePastSimpleNegativeStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completeFutureSimplePositiveStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completeFutureSimpleNegativeStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    // Continuous tenses
    completePresentContinuousPositiveStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completePresentContinuousNegativeStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completePastContinuousPositiveStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completePastContinuousNegativeStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completeFutureContinuousPositiveStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completeFutureContinuousNegativeStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    // Perfect tenses
    completePresentPerfectPositiveStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completePresentPerfectNegativeStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completePastPerfectPositiveStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completePastPerfectNegativeStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completeFuturePerfectPositiveStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completeFuturePerfectNegativeStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    // Perfect continuous tenses
    completePresentPerfectContinuousPositiveStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completePresentPerfectContinuousNegativeStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completePastPerfectContinuousPositiveStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completePastPerfectContinuousNegativeStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completeFuturePerfectContinuousPositiveStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completeFuturePerfectContinuousNegativeStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
};

export function createComponentForQuestionData(
    data: QuestionData<unknown> | Question,
    handleNextQuestion: () => void,
) {
    return componentProviders[data.type](data, handleNextQuestion);
}
