import { QuestionData } from "../Question";
import CompleteMissingPhraseQuestion, {
    CompleteMissingPhraseQuestionData,
    CompleteMissingPhraseQuestionResult,
} from "./CompleteMissingPhraseQuestion";

export interface CompleteCorrectVerbFormWithAuxiliarsQuestionData extends CompleteMissingPhraseQuestionData {
    correctAuxiliars: string[][];
    correctForm: string;
    incorrectForms: string[];
}

export type ContinuousType = "perfect" | "nonPerfect" | "none";

export default class CompleteCorrectVerbFormWithAuxiliarsQuestion extends CompleteMissingPhraseQuestion<CompleteCorrectVerbFormWithAuxiliarsQuestionData> {
    private readonly continuousType;
    private readonly isNegative;
    private readonly isFuture;

    public constructor({
        data,
        type,
        continuousType,
        isNegative,
        isFuture,
    }: QuestionData<CompleteCorrectVerbFormWithAuxiliarsQuestionData> & {
        continuousType: ContinuousType;
        isNegative: boolean;
        isFuture: boolean;
    }) {
        super({
            type,
            data,
        });
        this.continuousType = continuousType;
        this.isNegative = isNegative;
        this.isFuture = isFuture;
    }

    public check(
        rawInput: string,
    ): [string[], CompleteMissingPhraseQuestionResult] {
        const [input, baseResult] = super.check(rawInput);
        if (!baseResult.success) return [input, baseResult];

        const { auxiliary, verb, isAuxiliaryCorrect, isVerbCorrect } =
            this.grabAuxiliaryAndVerb(input);

        if (isAuxiliaryCorrect && isVerbCorrect) {
            return [
                input,
                {
                    success: true,
                    message: this.prefixWithAcknowledgementPhrase(
                        `The correct verb form for this sentence is: **${auxiliary.join(" ")} ${this.data.correctForm}**`,
                    ),
                },
            ];
        }

        if (!isAuxiliaryCorrect) {
            return [
                input,
                {
                    success: false,
                    message: this.computeWrongAuxiliaryMessage(),
                },
            ];
        }
        if (this.data.incorrectForms.includes(verb)) {
            return [
                input,
                {
                    success: false,
                    message:
                        "That is not the correct expected form of the main verb.",
                },
            ];
        }
        if (this.isCloseToCorrectWord(verb, this.data.correctForm)) {
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

    private computeWrongAuxiliaryMessage() {
        switch (this.continuousType) {
            case "perfect":
                return this.isFuture
                    ? this.isNegative
                        ? 'You\'re missing the negated modal auxiliary verb + "been" that goes before the main verb!'
                        : 'You\'re missing the modal auxiliary verb + "been" that goes before the main verb!'
                    : this.isNegative
                      ? 'You\'re missing the negated auxiliary + "been" verb that goes before the main verb!'
                      : 'You\'re missing the auxiliary + "been" verb that goes before the main verb!';
                break;

            case "nonPerfect":
                return this.isFuture
                    ? this.isNegative
                        ? 'You\'re missing the negated modal auxiliary verb + "be" that goes before the main verb!'
                        : 'You\'re missing the modal auxiliary verb + "be" that goes before the main verb!'
                    : this.isNegative
                      ? 'You\'re missing the negated auxiliary "to be" verb that goes before the main verb!'
                      : 'You\'re missing the auxiliary "to be" verb that goes before the main verb!';

            default:
                return this.isFuture
                    ? this.isNegative
                        ? "You're missing the negated modal auxiliary verb that goes before the main verb!"
                        : "You're missing the modal auxiliary verb that goes before the main verb!"
                    : this.isNegative
                      ? "You're missing the negated auxiliary verb that goes before the main verb!"
                      : "You're missing the auxiliary verb that goes before the main verb!";
        }
    }

    private grabAuxiliaryAndVerb(input: string[]) {
        if (input.length < 2) {
            throw new Error("Invalid input length");
        }
        let auxiliary = this.data.correctAuxiliars.find(
            (correctAuxiliarGroup) => {
                if (Array.isArray(correctAuxiliarGroup)) {
                    for (
                        let index = 0;
                        index < correctAuxiliarGroup.length;
                        index++
                    ) {
                        const auxiliarWord = correctAuxiliarGroup[index];
                        if (input[index] !== auxiliarWord) {
                            return false;
                        }
                    }
                    return true;
                } else {
                    return correctAuxiliarGroup === input[0];
                }
            },
        );
        const verb = input[input.length - 1];

        if (
            auxiliary &&
            (Array.isArray(auxiliary) ? auxiliary.length : 1) + 1 !=
                input.length
        ) {
            auxiliary = undefined;
        }

        return {
            auxiliary: auxiliary
                ? Array.isArray(auxiliary)
                    ? auxiliary
                    : [auxiliary]
                : [],
            verb,
            isAuxiliaryCorrect: !!auxiliary,
            isVerbCorrect: verb == this.data.correctForm,
        };
    }
}
