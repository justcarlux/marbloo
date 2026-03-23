import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completePresentContinuousPositiveStatementVerbForm = [
    typedQuestionData({
        type: "completePresentContinuousPositiveStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(write)",
            rightSide: "a letter to my friend.",
            minWordCount: 2,
            maxWordCount: 2,
            correctAuxiliars: [["am"]],
            correctForm: "writing",
            incorrectForms: ["write", "writes", "wrote", "written"],
        },
    }),
];

export default completePresentContinuousPositiveStatementVerbForm;
