import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completePastPerfectContinuousNegativeStatementVerbForm = [
    typedQuestionData({
        type: "completePastPerfectContinuousNegativeStatementVerbForm",
        data: {
            leftSide: "He",
            middle: "(sleep)",
            rightSide: "well before the exam.",
            minWordCount: 3,
            maxWordCount: 4,
            correctAuxiliars: [
                ["had", "not", "been"],
                ["hadn't", "been"],
            ],
            correctForm: "sleeping",
            incorrectForms: ["sleep", "sleeps", "slept", "slept"],
        },
    }),
];

export default completePastPerfectContinuousNegativeStatementVerbForm;
