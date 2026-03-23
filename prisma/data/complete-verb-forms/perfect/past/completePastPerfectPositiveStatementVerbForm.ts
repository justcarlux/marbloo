import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completePastPerfectPositiveStatementVerbForm = [
    typedQuestionData({
        type: "completePastPerfectPositiveStatementVerbForm",
        data: {
            leftSide: "She",
            middle: "(leave)",
            rightSide: "before I arrived.",
            minWordCount: 2,
            maxWordCount: 2,
            correctAuxiliars: [["had"]],
            correctForm: "left",
            incorrectForms: ["leave", "leaves", "left", "leaving"],
        },
    }),
];

export default completePastPerfectPositiveStatementVerbForm;
