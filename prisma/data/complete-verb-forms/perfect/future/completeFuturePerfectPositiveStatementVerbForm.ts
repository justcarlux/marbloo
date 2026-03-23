import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completeFuturePerfectPositiveStatementVerbForm = [
    typedQuestionData({
        type: "completeFuturePerfectPositiveStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(finish)",
            rightSide: "the report by Friday.",
            minWordCount: 3,
            maxWordCount: 3,
            correctAuxiliars: [["will", "have"]],
            correctForm: "finished",
            incorrectForms: ["finish", "finishes", "finishing", "finishes"],
        },
    }),
];

export default completeFuturePerfectPositiveStatementVerbForm;
