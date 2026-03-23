import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completePastPerfectContinuousPositiveStatementVerbForm = [
    typedQuestionData({
        type: "completePastPerfectContinuousPositiveStatementVerbForm",
        data: {
            leftSide: "She",
            middle: "(work)",
            rightSide: "there for ten years before she quit.",
            minWordCount: 3,
            maxWordCount: 3,
            correctAuxiliars: [["had", "been"]],
            correctForm: "working",
            incorrectForms: ["work", "works", "worked", "worked"],
        },
    }),
];

export default completePastPerfectContinuousPositiveStatementVerbForm;
