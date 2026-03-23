import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completePastContinuousNegativeStatementVerbForm = [
    typedQuestionData({
        type: "completePastContinuousNegativeStatementVerbForm",
        data: {
            leftSide: "They",
            middle: "(play)",
            rightSide: "soccer in the rain.",
            minWordCount: 2,
            maxWordCount: 3,
            correctAuxiliars: [["were", "not"], ["weren't"]],
            correctForm: "playing",
            incorrectForms: ["play", "plays", "played", "plays"],
        },
    }),
];

export default completePastContinuousNegativeStatementVerbForm;
