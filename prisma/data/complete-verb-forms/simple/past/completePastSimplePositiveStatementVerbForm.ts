import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completePastSimplePositiveStatementVerbForm = [
    typedQuestionData({
        type: "completePastSimplePositiveStatementVerbForm",
        data: {
            leftSide: "She",
            middle: "(visit)",
            rightSide: "her grandmother yesterday.",
            correctForm: "visited",
            incorrectForms: ["visits", "visit", "visiting"],
        },
    }),
];

export default completePastSimplePositiveStatementVerbForm;
