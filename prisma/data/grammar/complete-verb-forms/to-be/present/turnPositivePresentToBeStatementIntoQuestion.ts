import { typedQuestionData } from "../../../../../../app/model/question/question-factory";

const turnPositivePresentToBeStatementIntoQuestion = [
    typedQuestionData({
        id: "abc",
        type: "turnPositivePresentToBeStatementIntoQuestion",
        data: {
            prompt: {
                twoSided: false,
                text: "The girl is walking.",
            },
            answer: ["is", "the", "girl", "walking"],
        },
    }),
];

export default turnPositivePresentToBeStatementIntoQuestion;
