import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completeFuturePerfectContinuousNegativeStatementVerbForm = [
    typedQuestionData({
        type: "completeFuturePerfectContinuousNegativeStatementVerbForm",
        data: {
            leftSide: "He",
            middle: "(live)",
            rightSide: "abroad long enough to apply for citizenship.",
            minWordCount: 4,
            maxWordCount: 5,
            correctAuxiliars: [
                ["will", "not", "have", "been"],
                ["won't", "have", "been"],
            ],
            correctForm: "living",
            incorrectForms: ["live", "lives", "lived", "lived"],
        },
    }),
];

export default completeFuturePerfectContinuousNegativeStatementVerbForm;
