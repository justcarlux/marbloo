import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completeFuturePerfectContinuousPositiveStatementVerbForm = [
    typedQuestionData({
        type: "completeFuturePerfectContinuousPositiveStatementVerbForm",
        data: {
            leftSide: "By next month, I",
            middle: "(learn)",
            rightSide: "English for two years.",
            minWordCount: 4,
            maxWordCount: 4,
            correctAuxiliars: [["will", "have", "been"]],
            correctForm: "learning",
            incorrectForms: ["learn", "learns", "learned", "learned"],
        },
    }),
];

export default completeFuturePerfectContinuousPositiveStatementVerbForm;
