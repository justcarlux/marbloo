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

const questionHints: {
    [key in QuestionType]: React.ReactNode;
} = {
    // Simple tenses
    completePresentSimplePositiveStatementVerbForm: "main verb (base form)",
    completePresentSimpleNegativeStatementVerbForm:
        "do/does + not + main verb (base form)",
    completePastSimplePositiveStatementVerbForm: "main verb (past form)",
    completePastSimpleNegativeStatementVerbForm:
        "did + not + main verb (base form)",
    completeFutureSimplePositiveStatementVerbForm:
        "will + main verb (base form)",
    completeFutureSimpleNegativeStatementVerbForm:
        "will + not + main verb (base form)",

    // Continuous tenses
    completePresentContinuousPositiveStatementVerbForm:
        "am/is/are + main verb (-ing)",
    completePresentContinuousNegativeStatementVerbForm:
        "am/is/are + not + main verb (-ing)",
    completePastContinuousPositiveStatementVerbForm:
        "was/were + main verb (-ing)",
    completePastContinuousNegativeStatementVerbForm:
        "was/were + not + main verb (-ing)",
    completeFutureContinuousPositiveStatementVerbForm:
        "will + be + main verb (-ing)",
    completeFutureContinuousNegativeStatementVerbForm:
        "will + not + be + main verb (-ing)",

    // Perfect tenses
    completePresentPerfectPositiveStatementVerbForm:
        "have/has + main verb (past participle)",
    completePresentPerfectNegativeStatementVerbForm:
        "have/has + not + main verb (past participle)",
    completePastPerfectPositiveStatementVerbForm:
        "had + main verb (past participle)",
    completePastPerfectNegativeStatementVerbForm:
        "had + not + main verb (past participle)",
    completeFuturePerfectPositiveStatementVerbForm:
        "will + have + main verb (past participle)",
    completeFuturePerfectNegativeStatementVerbForm:
        "will + not + have + main verb (past participle)",

    // Perfect continuous tenses
    completePresentPerfectContinuousPositiveStatementVerbForm:
        "have/has + been + main verb (-ing)",
    completePresentPerfectContinuousNegativeStatementVerbForm:
        "have/has + not + been + main verb (-ing)",
    completePastPerfectContinuousPositiveStatementVerbForm:
        "had + been + main verb (-ing)",
    completePastPerfectContinuousNegativeStatementVerbForm:
        "had + not + been + main verb (-ing)",
    completeFuturePerfectContinuousPositiveStatementVerbForm:
        "will + have + been + main verb (-ing)",
    completeFuturePerfectContinuousNegativeStatementVerbForm:
        "will + not + have + been + main verb (-ing)",
};

export function getQuestionPromptByType(type: QuestionType) {
    return questionTitles[type];
}

export function getQuestionHintByType(type: QuestionType) {
    return questionHints[type];
}
