import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completePresentPerfectNegativeStatementVerbForm = [
    typedQuestionData({
        type: "completePresentPerfectNegativeStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(see)",
            rightSide: "that movie yet.",
            minWordCount: 2,
            maxWordCount: 3,
            correctAuxiliars: [["have", "not"], ["haven't"]],
            correctForm: "seen",
            incorrectForms: ["see", "sees", "saw", "seeing"],
        },
    }),
];

export default completePresentPerfectNegativeStatementVerbForm;
