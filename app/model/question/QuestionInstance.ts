import type { QuestionType } from "@/generated/prisma/enums";
import { distance as levenshteinDistance } from "fastest-levenshtein";

export interface QuestionData<T> {
    id: string;
    type: QuestionType;
    data: T;
}

const acknowledgementPhrases = [
    "Correct!",
    "Exactly!",
    "Precisely!",
    "Perfect!",
    "Excellent!",
    "Brilliant!",
    "Splendid!",
    "Wonderful!",
    "Fantastic!",
    "Exceptional!",
    "Fabulous!",
    "Beautiful!",
    "Well done!",
    "Good job!",
    "Great work!",
    "Nice work!",
    "Perfect work!",
    "Excellent job!",
    "Outstanding work!",
    "Brilliant job!",
    "Wonderful work!",
    "Fantastic job!",
];

export default abstract class QuestionInstance<T> {
    protected readonly _id;
    protected readonly _type;
    private readonly _data;
    public constructor({ id, type, data }: QuestionData<T>) {
        this._id = id;
        this._type = type;
        this._data = data;
    }

    public get id() {
        return this._id;
    }

    public get data() {
        return this._data;
    }

    public get type() {
        return this._type;
    }

    public prefixWithAcknowledgementPhrase(input: string) {
        return `${
            acknowledgementPhrases[
                Math.floor(Math.random() * acknowledgementPhrases.length)
            ]
        } ${input}`;
    }

    public isCloseToCorrectWord(input: string, correctWord: string) {
        const distance = levenshteinDistance(input, correctWord);
        const maxLength = Math.max(input.length, correctWord.length);
        const similarity = maxLength === 0 ? 1 : 1 - distance / maxLength;
        return similarity >= 0.65;
    }
}
