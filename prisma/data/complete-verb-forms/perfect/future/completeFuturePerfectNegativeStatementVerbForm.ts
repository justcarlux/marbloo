import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completeFuturePerfectNegativeStatementVerbForm = [
    typedQuestionData({
        type: "completeFuturePerfectNegativeStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(save)",
            rightSide: "enough money by then.",
            minWordCount: 3,
            maxWordCount: 4,
            correctAuxiliars: [
                ["will", "not", "have"],
                ["won't", "have"],
            ],
            correctForm: "saved",
            incorrectForms: ["save", "saves", "saving", "saves"],
        },
    }),
];

export default completeFuturePerfectNegativeStatementVerbForm;
