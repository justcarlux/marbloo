import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completePastPerfectNegativeStatementVerbForm = [
    typedQuestionData({
        type: "completePastPerfectNegativeStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(meet)",
            rightSide: "him before that day.",
            minWordCount: 2,
            maxWordCount: 3,
            correctAuxiliars: [["had", "not"], ["hadn't"]],
            correctForm: "met",
            incorrectForms: ["meet", "meets", "met", "meeting"],
        },
    }),
];

export default completePastPerfectNegativeStatementVerbForm;
