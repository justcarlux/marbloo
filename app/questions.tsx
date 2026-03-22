import { QuestionData } from "./model/question/Question";
import { typedQuestionData } from "./model/question/question-factory";
import { shuffleArray } from "./utils/shuffle-array";

const presentSimplePositiveStatements = [
    typedQuestionData({
        type: "completePresentSimplePositiveStatementVerbForm",
        data: {
            leftSide: "He",
            middle: "(like)",
            rightSide: "to cook.",
            correctForm: "likes",
            incorrectForms: ["like", "liked", "liking"],
        },
    }),
];

const presentSimpleNegativeStatements = [
    typedQuestionData({
        type: "completePresentSimpleNegativeStatementVerbForm",
        data: {
            leftSide: "She",
            middle: "(like)",
            rightSide: "him.",
            minWordCount: 2,
            maxWordCount: 3,
            correctAuxiliars: [["does", "not"], ["doesn't"]],
            correctForm: "like",
            incorrectForms: ["likes", "liked", "liking"],
        },
    }),
];

const pastSimplePositiveStatements = [
    typedQuestionData({
        type: "completePastSimplePositiveStatementVerbForm",
        data: {
            leftSide: "She",
            middle: "(visit)",
            rightSide: "her grandmother yesterday.",
            correctForm: "visited",
            incorrectForms: ["visits", "visit", "visiting"],
        },
    }),
];

const pastSimpleNegativeStatements = [
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

const futureSimplePositiveStatements = [
    typedQuestionData({
        type: "completeFutureSimplePositiveStatementVerbForm",
        data: {
            leftSide: "She",
            middle: "(go)",
            rightSide: "to school tomorrow.",
            minWordCount: 2,
            maxWordCount: 2,
            correctAuxiliars: [["will"]],
            correctForm: "go",
            incorrectForms: ["went", "going", "gone", "goes"],
        },
    }),
];

const futureSimpleNegativeStatements = [
    typedQuestionData({
        type: "completeFutureSimpleNegativeStatementVerbForm",
        data: {
            leftSide: "He",
            middle: "(have)",
            rightSide: "an exam tomorrow.",
            minWordCount: 2,
            maxWordCount: 2,
            correctAuxiliars: [["will", "not"], ["won't"]],
            correctForm: "have",
            incorrectForms: ["had", "having"],
        },
    }),
];

const presentContinuousPositiveStatements = [
    typedQuestionData({
        type: "completePresentContinuousPositiveStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(write)",
            rightSide: "a letter to my friend.",
            minWordCount: 2,
            maxWordCount: 2,
            correctAuxiliars: [["am"]],
            correctForm: "writing",
            incorrectForms: ["write", "writes", "wrote", "written"],
        },
    }),
];

const presentContinuousNegativeStatements = [
    typedQuestionData({
        type: "completePresentContinuousNegativeStatementVerbForm",
        data: {
            leftSide: "He",
            middle: "(wear)",
            rightSide: "a jacket.",
            minWordCount: 2,
            maxWordCount: 3,
            correctAuxiliars: [["is", "not"], ["isn't"]],
            correctForm: "wearing",
            incorrectForms: ["wear", "wears", "wore", "worn"],
        },
    }),
];

const pastContinuousPositiveStatements = [
    typedQuestionData({
        type: "completePastContinuousPositiveStatementVerbForm",
        data: {
            leftSide: "She",
            middle: "(sing)",
            rightSide: "when I arrived home.",
            minWordCount: 2,
            maxWordCount: 2,
            correctAuxiliars: [["was"]],
            correctForm: "singing",
            incorrectForms: ["sing", "sings", "sang", "sung"],
        },
    }),
];

const pastContinuousNegativeStatements = [
    typedQuestionData({
        type: "completePastContinuousNegativeStatementVerbForm",
        data: {
            leftSide: "They",
            middle: "(play)",
            rightSide: "soccer in the rain.",
            minWordCount: 2,
            maxWordCount: 3,
            correctAuxiliars: [["were", "not"], ["weren't"]],
            correctForm: "playing",
            incorrectForms: ["play", "plays", "played", "plays"],
        },
    }),
];

const futureContinuousPositiveStatements = [
    typedQuestionData({
        type: "completeFutureContinuousPositiveStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(wait)",
            rightSide: "for you outside.",
            minWordCount: 3,
            maxWordCount: 3,
            correctAuxiliars: [["will", "be"]],
            correctForm: "waiting",
            incorrectForms: ["wait", "waits", "waited", "waiting"],
        },
    }),
];

const futureContinuousNegativeStatements = [
    typedQuestionData({
        type: "completeFutureContinuousNegativeStatementVerbForm",
        data: {
            leftSide: "He",
            middle: "(work)",
            rightSide: "on the weekend.",
            minWordCount: 3,
            maxWordCount: 4,
            correctAuxiliars: [
                ["will", "not", "be"],
                ["won't", "be"],
            ],
            correctForm: "working",
            incorrectForms: ["work", "works", "worked", "working"],
        },
    }),
];

const presentPerfectPositiveStatements = [
    typedQuestionData({
        type: "completePresentPerfectPositiveStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(write)",
            rightSide: "three letters today.",
            minWordCount: 2,
            maxWordCount: 2,
            correctAuxiliars: [["have"]],
            correctForm: "written",
            incorrectForms: ["write", "writes", "wrote", "writing"],
        },
    }),
];

const presentPerfectNegativeStatements = [
    typedQuestionData({
        type: "completePresentPerfectNegativeStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(see)",
            rightSide: "that movie yet.",
            minWordCount: 2,
            maxWordCount: 3,
            correctAuxiliars: [["have", "not"], ["haven't"]],
            correctForm: "seen",
            incorrectForms: ["see", "sees", "saw", "seeing"],
        },
    }),
];

const pastPerfectPositiveStatements = [
    typedQuestionData({
        type: "completePastPerfectPositiveStatementVerbForm",
        data: {
            leftSide: "She",
            middle: "(leave)",
            rightSide: "before I arrived.",
            minWordCount: 2,
            maxWordCount: 2,
            correctAuxiliars: [["had"]],
            correctForm: "left",
            incorrectForms: ["leave", "leaves", "left", "leaving"],
        },
    }),
];

const pastPerfectNegativeStatements = [
    typedQuestionData({
        type: "completePastPerfectNegativeStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(meet)",
            rightSide: "him before that day.",
            minWordCount: 2,
            maxWordCount: 3,
            correctAuxiliars: [["had", "not"], ["hadn't"]],
            correctForm: "met",
            incorrectForms: ["meet", "meets", "met", "meeting"],
        },
    }),
];

const futurePerfectPositiveStatements = [
    typedQuestionData({
        type: "completeFuturePerfectPositiveStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(finish)",
            rightSide: "the report by Friday.",
            minWordCount: 3,
            maxWordCount: 3,
            correctAuxiliars: [["will", "have"]],
            correctForm: "finished",
            incorrectForms: ["finish", "finishes", "finishing", "finishes"],
        },
    }),
];

const futurePerfectNegativeStatements = [
    typedQuestionData({
        type: "completeFuturePerfectNegativeStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(save)",
            rightSide: "enough money by then.",
            minWordCount: 3,
            maxWordCount: 4,
            correctAuxiliars: [
                ["will", "not", "have"],
                ["won't", "have"],
            ],
            correctForm: "saved",
            incorrectForms: ["save", "saves", "saving", "saves"],
        },
    }),
];

const presentPerfectContinuousPositiveStatements = [
    typedQuestionData({
        type: "completePresentPerfectContinuousPositiveStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(wait)",
            rightSide: "for an hour.",
            minWordCount: 3,
            maxWordCount: 3,
            correctAuxiliars: [["have", "been"]],
            correctForm: "waiting",
            incorrectForms: ["wait", "waits", "waited", "waited"],
        },
    }),
];

const presentPerfectContinuousNegativeStatements = [
    typedQuestionData({
        type: "completePresentPerfectContinuousNegativeStatementVerbForm",
        data: {
            leftSide: "I",
            middle: "(sleep)",
            rightSide: "well lately.",
            minWordCount: 3,
            maxWordCount: 4,
            correctAuxiliars: [
                ["have", "not", "been"],
                ["haven't", "been"],
            ],
            correctForm: "sleeping",
            incorrectForms: ["sleep", "sleeps", "slept", "slept"],
        },
    }),
];

const pastPerfectContinuousPositiveStatements = [
    typedQuestionData({
        type: "completePastPerfectContinuousPositiveStatementVerbForm",
        data: {
            leftSide: "She",
            middle: "(work)",
            rightSide: "there for ten years before she quit.",
            minWordCount: 3,
            maxWordCount: 3,
            correctAuxiliars: [["had", "been"]],
            correctForm: "working",
            incorrectForms: ["work", "works", "worked", "worked"],
        },
    }),
];

const pastPerfectContinuousNegativeStatements = [
    typedQuestionData({
        type: "completePastPerfectContinuousNegativeStatementVerbForm",
        data: {
            leftSide: "He",
            middle: "(sleep)",
            rightSide: "well before the exam.",
            minWordCount: 3,
            maxWordCount: 4,
            correctAuxiliars: [
                ["had", "not", "been"],
                ["hadn't", "been"],
            ],
            correctForm: "sleeping",
            incorrectForms: ["sleep", "sleeps", "slept", "slept"],
        },
    }),
];

const futurePerfectContinuousPositiveStatements = [
    typedQuestionData({
        type: "completeFuturePerfectContinuousPositiveStatementVerbForm",
        data: {
            leftSide: "By next month, I",
            middle: "(learn)",
            rightSide: "English for two years.",
            minWordCount: 4,
            maxWordCount: 4,
            correctAuxiliars: [["will", "have", "been"]],
            correctForm: "learning",
            incorrectForms: ["learn", "learns", "learned", "learned"],
        },
    }),
];

const futurePerfectContinuousNegativeStatements = [
    typedQuestionData({
        type: "completeFuturePerfectContinuousNegativeStatementVerbForm",
        data: {
            leftSide: "He",
            middle: "(live)",
            rightSide: "abroad long enough to apply for citizenship.",
            minWordCount: 4,
            maxWordCount: 5,
            correctAuxiliars: [
                ["will", "not", "have", "been"],
                ["won't", "have", "been"],
            ],
            correctForm: "living",
            incorrectForms: ["live", "lives", "lived", "lived"],
        },
    }),
];

const rawQuestions: QuestionData<unknown>[] = [
    // Simple tenses
    ...presentSimplePositiveStatements,
    ...presentSimpleNegativeStatements,
    ...pastSimplePositiveStatements,
    ...pastSimpleNegativeStatements,
    ...futureSimplePositiveStatements,
    ...futureSimpleNegativeStatements,

    // Continuous tenses
    ...presentContinuousPositiveStatements,
    ...presentContinuousNegativeStatements,
    ...pastContinuousPositiveStatements,
    ...pastContinuousNegativeStatements,
    ...futureContinuousPositiveStatements,
    ...futureContinuousNegativeStatements,

    // Perfect tenses
    ...presentPerfectPositiveStatements,
    ...presentPerfectNegativeStatements,
    ...pastPerfectPositiveStatements,
    ...pastPerfectNegativeStatements,
    ...futurePerfectPositiveStatements,
    ...futurePerfectNegativeStatements,

    // Perfect continuous tenses
    ...presentPerfectContinuousPositiveStatements,
    ...presentPerfectContinuousNegativeStatements,
    ...pastPerfectContinuousPositiveStatements,
    ...pastPerfectContinuousNegativeStatements,
    ...futurePerfectContinuousPositiveStatements,
    ...futurePerfectContinuousNegativeStatements,
];

const questions: QuestionData<unknown>[] = shuffleArray(rawQuestions);
export default questions;
