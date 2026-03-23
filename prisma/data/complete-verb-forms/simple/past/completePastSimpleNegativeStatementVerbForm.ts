import { typedQuestionData } from "../../../../../app/model/question/question-factory";

const completePastSimpleNegativeStatementVerbForm = [
    typedQuestionData({
        type: "completePastSimpleNegativeStatementVerbForm",
        data: {
            leftSide: "He",
            middle: "(do)",
            rightSide: "the chores.",
            minWordCount: 2,
            maxWordCount: 3,
            correctAuxiliars: [["did", "not"], ["didn't"]],
            correctForm: "do",
            incorrectForms: ["does", "did", "doing", "done"],
        },
    }),
];

export default completePastSimpleNegativeStatementVerbForm;
