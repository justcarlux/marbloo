import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completePresentSimplePositiveStatementVerbForm = [
    typedQuestionData({
        type: "completePresentSimplePositiveStatementVerbForm",
        data: {
            leftSide: "He",
            middle: "(like)",
            rightSide: "to cook.",
            correctForm: "likes",
            incorrectForms: ["like", "liked", "liking"],
        },
    }),
];

export default completePresentSimplePositiveStatementVerbForm;
