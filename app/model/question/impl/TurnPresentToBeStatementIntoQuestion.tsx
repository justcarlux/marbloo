import { arraysAreEqual } from "@/app/utils/arrays-are-equal";
import { QuestionData } from "../QuestionInstance";
import CompleteMissingPhraseQuestion, {
    CompleteMissingPhraseQuestionData,
    CompleteMissingPhraseQuestionResult,
} from "./CompleteMissingPhraseQuestion";

export interface TurnPresentToBeStatementIntoQuestionFormQuestionData extends CompleteMissingPhraseQuestionData {
    answer: string[];
}

export default class TurnPresentToBeStatementIntoQuestionFormQuestion extends CompleteMissingPhraseQuestion<TurnPresentToBeStatementIntoQuestionFormQuestionData> {
    private readonly isNegative;

    public constructor({
        id,
        type,
        data,
        isNegative,
    }: QuestionData<TurnPresentToBeStatementIntoQuestionFormQuestionData> & {
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
        let [input, baseResult] = super.check(rawInput);
        if (!baseResult.success) return [input, baseResult];

        input = this.removeEndingQuestionMarks(input);

        if (arraysAreEqual(input, this.data.answer)) {
            return [
                input,
                {
                    success: true,
                    message: this.isNegative
                        ? this.prefixWithAcknowledgementPhrase(
                              <>
                                  Correct! The correct negated &quot;to be&quot;
                                  verb form for this sentence is:{" "}
                                  <b>{input.join(" ")}</b>
                              </>,
                          )
                        : this.prefixWithAcknowledgementPhrase(
                              <>
                                  The correct &quot;to be&quot; verb form for
                                  this sentence is: <b>{input.join(" ")}</b>
                              </>,
                          ),
                },
            ];
        }
        if (
            this.data.incorrectForms.some((incorrectForm) =>
                arraysAreEqual(input, incorrectForm),
            )
        ) {
            return [
                input,
                {
                    success: false,
                    message: this.isNegative
                        ? 'That is not the correct negated expected form of the "to be" verb!'
                        : 'That is not the correct expected form of the "to be" verb!',
                },
            ];
        }

        const writtenInput = input.join(" ");
        if (
            this.data.correctForms.some((correctForm) =>
                this.isCloseToCorrectWord(correctForm.join(" "), writtenInput),
            )
        ) {
            return [
                input,
                {
                    success: false,
                    message: this.isNegative
                        ? 'You\'re a little bit close! But it is still far from the "to be" verb form you need to write!'
                        : 'You\'re a little bit close! But it is still far from the negated "to be" verb form you need to write!',
                },
            ];
        }
        return [
            input,
            {
                success: false,
                message: this.isNegative
                    ? 'Please write the correct negated "to be" verb!'
                    : 'Please write the correct "to be" verb!',
            },
        ];
    }
}
