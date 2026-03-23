import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completePresentSimpleNegativeStatementVerbForm = [
    typedQuestionData({
        type: "completePresentSimpleNegativeStatementVerbForm",
        data: {
            leftSide: "She",
            middle: "(like)",
            rightSide: "him.",
            minWordCount: 2,
            maxWordCount: 3,
            correctAuxiliars: [["does", "not"], ["doesn't"]],
            correctForm: "like",
            incorrectForms: ["likes", "liked", "liking"],
        },
    }),
];

export default completePresentSimpleNegativeStatementVerbForm;
