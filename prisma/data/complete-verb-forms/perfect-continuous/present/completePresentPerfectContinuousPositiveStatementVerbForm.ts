import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completePresentPerfectContinuousPositiveStatementVerbForm = [
    typedQuestionData({
        type: "completePresentPerfectContinuousPositiveStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(wait)",
            rightSide: "for an hour.",
            minWordCount: 3,
            maxWordCount: 3,
            correctAuxiliars: [["have", "been"]],
            correctForm: "waiting",
            incorrectForms: ["wait", "waits", "waited", "waited"],
        },
    }),
];

export default completePresentPerfectContinuousPositiveStatementVerbForm;
