import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completePresentPerfectContinuousNegativeStatementVerbForm = [
    typedQuestionData({
        type: "completePresentPerfectContinuousNegativeStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(sleep)",
            rightSide: "well lately.",
            minWordCount: 3,
            maxWordCount: 4,
            correctAuxiliars: [
                ["have", "not", "been"],
                ["haven't", "been"],
            ],
            correctForm: "sleeping",
            incorrectForms: ["sleep", "sleeps", "slept", "slept"],
        },
    }),
];

export default completePresentPerfectContinuousNegativeStatementVerbForm;
