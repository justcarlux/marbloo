import { arraysAreEqual } from "@/app/utils/arrays-are-equal";
import { QuestionData } from "../QuestionInstance";
import CompleteMissingPhraseQuestion, {
    CompleteMissingPhraseQuestionData,
    CompleteMissingPhraseQuestionResult,
} from "./CompleteMissingPhraseQuestion";

export interface TurnStatementIntoQuestionFormQuestionData extends CompleteMissingPhraseQuestionData {
    answer: string[];
    answerWithoutPredicate: string[];
}

export default class TurnStatementIntoQuestionFormQuestion extends CompleteMissingPhraseQuestion<TurnStatementIntoQuestionFormQuestionData> {
    private readonly isNegative;

    public constructor({
        id,
        type,
        data,
        isNegative,
    }: QuestionData<TurnStatementIntoQuestionFormQuestionData> & {
        isNegative: boolean;
    }) {
        super({
            id,
            type,
            data,
        });
        this.isNegative = isNegative;
    }

    public check(
        rawInput: string,
    ): [string[], CompleteMissingPhraseQuestionResult] {
        // eslint-disable-next-line prefer-const
        let [input, baseResult] = super.check(rawInput);
        if (!baseResult.success) return [input, baseResult];

        input = this.removeQuestionMarks(input);

        if (arraysAreEqual(input, this.data.answer)) {
            return [
                input,
                {
                    success: true,
                    message: this.isNegative
                        ? this.prefixWithAcknowledgementPhrase(
                              <>
                                  The correct negated question form for this
                                  sentence is: <b>{input.join(" ")}</b>
                              </>,
                          )
                        : this.prefixWithAcknowledgementPhrase(
                              <>
                                  The correct question form for this sentence
                                  is: <b>{input.join(" ")}</b>
                              </>,
                          ),
                },
            ];
        }

        if (
            !this.data.answerWithoutPredicate.every(
                (val, i) => input[i] === val,
            )
        ) {
            return [
                input,
                {
                    success: false,
                    message: "You're missing the question predicate!",
                },
            ];
        }

        return [
            input,
            {
                success: false,
                message: this.isNegative
                    ? "Please write the correct negated question form!"
                    : "Please write the correct question form",
            },
        ];
    }

    private removeQuestionMarks(input: string[]) {
        const string = input.join(" ");

        let firstIndex = 0;
        for (let i = 0; i < string.length; i++) {
            const char = string.charAt(i);
            if (char !== "?" && char !== "¿" && char !== " ") {
                firstIndex = i;
                break;
            }
        }

        let lastIndex = string.length - 1;
        for (let i = string.length - 1; i >= 0; i--) {
            const char = string.charAt(i);
            if (char !== "?" && char !== "¿" && char !== " ") {
                lastIndex = i;
                break;
            }
        }
        return string.slice(firstIndex, lastIndex + 1).split(/ +/g);
    }
}
