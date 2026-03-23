import { QuestionData } from "../QuestionInstance";
import CompleteMissingPhraseQuestion, {
    CompleteMissingPhraseQuestionData,
    CompleteMissingPhraseQuestionResult,
} from "./CompleteMissingPhraseQuestion";

export interface CompleteCorrectVerbFormQuestionData extends Omit<
    CompleteMissingPhraseQuestionData,
    "minWordCount" | "maxWordCount"
> {
    correctForm: string;
    incorrectForms: string[];
}

export default class CompleteCorrectVerbFormQuestion extends CompleteMissingPhraseQuestion<
    CompleteCorrectVerbFormQuestionData & {
        minWordCount: 1;
        maxWordCount: 1;
    }
> {
    public constructor({
        type,
        data,
    }: QuestionData<CompleteCorrectVerbFormQuestionData>) {
        super({ type, data: { ...data, minWordCount: 1, maxWordCount: 1 } });
    }

    public check(
        rawInput: string,
    ): [string[], CompleteMissingPhraseQuestionResult] {
        const [input, baseResult] = super.check(rawInput);
        if (!baseResult.success) return [input, baseResult];

        const writtenWord = input[0];
        if (writtenWord === this.data.correctForm) {
            return [
                input,
                {
                    success: true,
                    message: this.prefixWithAcknowledgementPhrase(
                        `The correct verb form for this sentence is: **${this.data.correctForm}**`,
                    ),
                },
            ];
        }
        if (this.data.incorrectForms.includes(writtenWord)) {
            return [
                input,
                {
                    success: false,
                    message:
                        "That is not the correct expected form of the main verb!",
                },
            ];
        }
        if (this.isCloseToCorrectWord(writtenWord, this.data.correctForm)) {
            return [
                input,
                {
                    success: false,
                    message:
                        "You're a little bit close! But it is still far from the main verb you need to write!",
                },
            ];
        }
        return [
            input,
            {
                success: false,
                message:
                    "Please write the correct version of the main verb shown!",
            },
        ];
    }
}
