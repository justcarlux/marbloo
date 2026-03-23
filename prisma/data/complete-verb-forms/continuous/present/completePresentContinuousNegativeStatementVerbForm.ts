import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completePresentContinuousNegativeStatementVerbForm = [
    typedQuestionData({
        type: "completePresentContinuousNegativeStatementVerbForm",
        data: {
            leftSide: "He",
            middle: "(wear)",
            rightSide: "a jacket.",
            minWordCount: 2,
            maxWordCount: 3,
            correctAuxiliars: [["is", "not"], ["isn't"]],
            correctForm: "wearing",
            incorrectForms: ["wear", "wears", "wore", "worn"],
        },
    }),
];

export default completePresentContinuousNegativeStatementVerbForm;
