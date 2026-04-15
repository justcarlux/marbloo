import QuestionInstance from "../QuestionInstance";

export interface CompleteMissingPhraseQuestionData {
    prompt:
        | {
              twoSided: true;
              leftSide: string;
              middle: string;
              rightSide: string;
          }
        | { twoSided: false; text: string };
    minWordCount?: number;
    maxWordCount?: number;
}

export interface CompleteMissingPhraseQuestionResult {
    success: boolean;
    message?: React.ReactNode;
}

export default class CompleteMissingPhraseQuestion<
    T extends CompleteMissingPhraseQuestionData,
> extends QuestionInstance<T> {
    public check(
        input: string,
    ): [string[], CompleteMissingPhraseQuestionResult] {
        input = input.trim().toLowerCase();
        const words = input.split(/ +/g);
        if (
            this.data.minWordCount &&
            this.data.maxWordCount &&
            this.data.minWordCount === this.data.maxWordCount &&
            words.length !== this.data.minWordCount
        ) {
            return [
                words,
                {
                    success: false,
                    message:
                        this.data.minWordCount === 1
                            ? `You are meant to write 1 word!`
                            : `You are meant to write ${this.data.minWordCount} words!`,
                },
            ];
        } else {
            if (
                this.data.minWordCount &&
                words.length < this.data.minWordCount
            ) {
                return [
                    words,
                    {
                        success: false,
                        message:
                            this.data.minWordCount === 1
                                ? `You are meant to write at least 1 word!`
                                : `You are meant to write at least ${this.data.minWordCount} words!`,
                    },
                ];
            } else if (
                this.data.maxWordCount &&
                words.length > this.data.maxWordCount
            ) {
                return [
                    words,
                    {
                        success: false,
                        message:
                            this.data.maxWordCount === 1
                                ? `You cannot write more than 1 word!`
                                : `You cannot write more than ${this.data.maxWordCount} words!`,
                    },
                ];
            }
        }
        return [words, { success: true }];
    }
}
