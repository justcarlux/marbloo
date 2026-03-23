import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completeFutureContinuousNegativeStatementVerbForm = [
    typedQuestionData({
        type: "completeFutureContinuousNegativeStatementVerbForm",
        data: {
            leftSide: "He",
            middle: "(work)",
            rightSide: "on the weekend.",
            minWordCount: 3,
            maxWordCount: 4,
            correctAuxiliars: [
                ["will", "not", "be"],
                ["won't", "be"],
            ],
            correctForm: "working",
            incorrectForms: ["work", "works", "worked", "working"],
        },
    }),
];

export default completeFutureContinuousNegativeStatementVerbForm;
