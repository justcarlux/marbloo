import { CompleteMissingPhraseQuestionData } from "@/app/model/question/impl/CompleteMissingPhraseQuestion";
import { QuestionData } from "@/app/model/question/QuestionInstance";
import { Question } from "@/generated/prisma/client";
import { QuestionType } from "@/generated/prisma/enums";
import CompleteMissingPhraseQuestionForm from "./impl/CompleteMissingPhraseQuestionForm";
import AnswerChoicedQuestionForm from "./impl/AnswerChoicedQuestionForm";
import { AnswerChoicedQuestionData } from "@/app/model/question/impl/AnswerChoicedQuestion";

const answerChoicedQuestionComponentProvider = (
    data: QuestionData<unknown>,
) => {
    return (
        <AnswerChoicedQuestionForm
            questionData={data as QuestionData<AnswerChoicedQuestionData>}
        />
    );
};

const completeMissingPhraseQuestionFormComponentProvider = (
    data: QuestionData<unknown>,
) => {
    return (
        <CompleteMissingPhraseQuestionForm
            questionData={
                data as QuestionData<CompleteMissingPhraseQuestionData>
            }
        />
    );
};

const componentProviders: {
    [key in QuestionType]: (data: QuestionData<unknown>) => React.ReactElement;
} = {
    // Grammar trivia
    grammarTrivia: answerChoicedQuestionComponentProvider,
    // "To be" verb
    completePresentToBePositiveStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completePresentToBeNegativeStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completePastToBePositiveStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completePastToBeNegativeStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completeFutureToBePositiveStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    completeFutureToBeNegativeStatementVerbForm:
        completeMissingPhraseQuestionFormComponentProvider,
    turnPositivePresentToBeStatementIntoQuestion:
        completeMissingPhraseQuestionFormComponentProvider,
    turnNegativePresentToBeStatementIntoQuestion:
        completeMissingPhraseQuestionFormComponentProvider,
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
) {
    return componentProviders[data.type](data);
}
