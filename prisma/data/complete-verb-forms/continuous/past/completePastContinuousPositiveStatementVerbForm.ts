import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completePastContinuousPositiveStatementVerbForm = [
    typedQuestionData({
        type: "completePastContinuousPositiveStatementVerbForm",
        data: {
            leftSide: "She",
            middle: "(sing)",
            rightSide: "when I arrived home.",
            minWordCount: 2,
            maxWordCount: 2,
            correctAuxiliars: [["was"]],
            correctForm: "singing",
            incorrectForms: ["sing", "sings", "sang", "sung"],
        },
    }),
];

export default completePastContinuousPositiveStatementVerbForm;
