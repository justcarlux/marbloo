import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completeFutureSimplePositiveStatementVerbForm = [
    typedQuestionData({
        type: "completeFutureSimplePositiveStatementVerbForm",
        data: {
            leftSide: "She",
            middle: "(go)",
            rightSide: "to school tomorrow.",
            minWordCount: 2,
            maxWordCount: 2,
            correctAuxiliars: [["will"]],
            correctForm: "go",
            incorrectForms: ["went", "going", "gone", "goes"],
        },
    }),
];

export default completeFutureSimplePositiveStatementVerbForm;
