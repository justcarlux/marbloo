import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completeFutureContinuousPositiveStatementVerbForm = [
    typedQuestionData({
        type: "completeFutureContinuousPositiveStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(wait)",
            rightSide: "for you outside.",
            minWordCount: 3,
            maxWordCount: 3,
            correctAuxiliars: [["will", "be"]],
            correctForm: "waiting",
            incorrectForms: ["wait", "waits", "waited", "waiting"],
        },
    }),
];

export default completeFutureContinuousPositiveStatementVerbForm;
