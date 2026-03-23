import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completePresentPerfectPositiveStatementVerbForm = [
    typedQuestionData({
        type: "completePresentPerfectPositiveStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(write)",
            rightSide: "three letters today.",
            minWordCount: 2,
            maxWordCount: 2,
            correctAuxiliars: [["have"]],
            correctForm: "written",
            incorrectForms: ["write", "writes", "wrote", "writing"],
        },
    }),
];

export default completePresentPerfectPositiveStatementVerbForm;
