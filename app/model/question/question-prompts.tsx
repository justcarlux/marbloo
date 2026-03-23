import type { QuestionType } from "@/generated/prisma/enums";

const questionTitles: {
    [key in QuestionType]: React.ReactNode;
} = {
    // Simple tenses
    completePresentSimplePositiveStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>positive present simple</b> sentence
        </>
    ),
    completePresentSimpleNegativeStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>negative present simple</b> sentence
        </>
    ),
    completePastSimplePositiveStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>positive past simple</b> sentence
        </>
    ),
    completePastSimpleNegativeStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>negative past simple</b> sentence
        </>
    ),
    completeFutureSimplePositiveStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>positive future simple </b>
            sentence
        </>
    ),
    completeFutureSimpleNegativeStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>negative future simple </b>
            sentence
        </>
    ),
    // Continuous tenses
    completePresentContinuousPositiveStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>positive present continuous</b> sentence
        </>
    ),
    completePresentContinuousNegativeStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>negative present continuous</b> sentence
        </>
    ),
    completePastContinuousPositiveStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>positive past continuous</b> sentence
        </>
    ),
    completePastContinuousNegativeStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>negative past continuous</b> sentence
        </>
    ),
    completeFutureContinuousPositiveStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>positive future continuous</b> sentence
        </>
    ),
    completeFutureContinuousNegativeStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>negative future continuous</b> sentence
        </>
    ),
    // Perfect tenses
    completePresentPerfectPositiveStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>positive present perfect</b> sentence
        </>
    ),
    completePresentPerfectNegativeStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>negative present perfect</b> sentence
        </>
    ),
    completePastPerfectPositiveStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>positive past perfect</b> sentence
        </>
    ),
    completePastPerfectNegativeStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>negative past perfect</b> sentence
        </>
    ),
    completeFuturePerfectPositiveStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>positive future perfect</b> sentence
        </>
    ),
    completeFuturePerfectNegativeStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>negative future perfect</b> sentence
        </>
    ),
    // Perfect continuous tenses
    completePresentPerfectContinuousPositiveStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>positive present perfect continuous</b> sentence
        </>
    ),
    completePresentPerfectContinuousNegativeStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>negative present perfect continuous</b> sentence
        </>
    ),
    completePastPerfectContinuousPositiveStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>positive past perfect continuous</b> sentence
        </>
    ),
    completePastPerfectContinuousNegativeStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>negative past perfect continuous</b> sentence
        </>
    ),
    completeFuturePerfectContinuousPositiveStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>positive future perfect continuous</b> sentence
        </>
    ),
    completeFuturePerfectContinuousNegativeStatementVerbForm: (
        <>
            Complete with the correct verb form to make a{" "}
            <b>negative future perfect continuous</b> sentence
        </>
    ),
};

export function getQuestionPromptByTitle(type: QuestionType) {
    return questionTitles[type];
}
