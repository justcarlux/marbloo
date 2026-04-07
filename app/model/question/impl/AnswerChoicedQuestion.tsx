import QuestionInstance from "../QuestionInstance";

export interface AnswerChoicedQuestionData {
    prompt: string;
    choices: string[];
    correctChoiceIndex: number;
}

export interface AnswerChoicedQuestionResult {
    success: boolean;
    message?: React.ReactNode;
}

export default class AnswerChoicedQuestion extends QuestionInstance<AnswerChoicedQuestionData> {
    public check(index: number): AnswerChoicedQuestionResult {
        if (index === this.data.correctChoiceIndex) {
            return {
                success: true,
                message: this.prefixWithAcknowledgementPhrase(
                    "Your answer is correct.",
                ),
            };
        } else {
            return { success: false, message: "Incorrect. You can try again!" };
        }
    }
}
