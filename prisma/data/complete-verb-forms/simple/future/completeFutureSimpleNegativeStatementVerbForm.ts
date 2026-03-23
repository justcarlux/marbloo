import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completeFutureSimpleNegativeStatementVerbForm = [
    typedQuestionData({
        type: "completeFutureSimpleNegativeStatementVerbForm",
        data: {
            leftSide: "He",
            middle: "(have)",
            rightSide: "an exam tomorrow.",
            minWordCount: 2,
            maxWordCount: 2,
            correctAuxiliars: [["will", "not"], ["won't"]],
            correctForm: "have",
            incorrectForms: ["had", "having"],
        },
    }),
];

export default completeFutureSimpleNegativeStatementVerbForm;
