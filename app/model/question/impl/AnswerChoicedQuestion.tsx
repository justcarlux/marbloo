import QuestionInstance from "../QuestionInstance";

export interface AnswerChoicedQuestionData {
    prompt: string;
    isPromptAudio?: boolean;
    source?: { name: string; url: string };
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
                    "That's the right answer.",
                ),
            };
        } else {
            return { success: false, message: "Incorrect. You can try again!" };
        }
    }
}
