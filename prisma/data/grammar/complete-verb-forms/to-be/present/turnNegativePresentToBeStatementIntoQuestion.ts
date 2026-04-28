import { typedQuestionData } from "../../../../../../app/model/question/question-factory";

const turnNegativePresentToBeStatementIntoQuestion = [
    typedQuestionData({
        id: "6e2e247dcf7f7343309a1aed58b581fd",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The soup is not hot." },
            answer: ["is", "the", "soup", "not", "hot"],
            answerWithoutPredicate: ["is", "the", "soup", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "6850d35f252756fadd0e22a741f8fcbd",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "Luis is not in the park." },
            answer: ["is", "luis", "not", "in", "the", "park"],
            answerWithoutPredicate: ["is", "luis", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "7da6ce34cc46a9e8805e396fe652fb3f",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "I am not ready." },
            answer: ["am", "i", "not", "ready"],
            answerWithoutPredicate: ["am", "i", "not"],
            minWordCount: 4,
        },
    }),
    typedQuestionData({
        id: "759e59da6f1953e5f22d2aa0ef616cef",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The keys are not in the car." },
            answer: ["are", "the", "keys", "not", "in", "the", "car"],
            answerWithoutPredicate: ["are", "the", "keys", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "a91930bce8eb8ed8a5146d3646d749c6",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "She is not a doctor." },
            answer: ["is", "she", "not", "a", "doctor"],
            answerWithoutPredicate: ["is", "she", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "ff9951e0508def4210b13cd722d6d838",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The coffee is not sweet." },
            answer: ["is", "the", "coffee", "not", "sweet"],
            answerWithoutPredicate: ["is", "the", "coffee", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "f5c56ef2c6dbc94d572dbee9a8ea917f",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: {
                twoSided: false,
                text: "We are not late for the meeting.",
            },
            answer: ["are", "we", "not", "late", "for", "the", "meeting"],
            answerWithoutPredicate: ["are", "we", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "aeeb1c550d8994f9fcc0b984467799a7",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The windows are not open." },
            answer: ["are", "the", "windows", "not", "open"],
            answerWithoutPredicate: ["are", "the", "windows", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "d4ebc97b5f3b0f5e1334f75119277682",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "He is not from Canada." },
            answer: ["is", "he", "not", "from", "canada"],
            answerWithoutPredicate: ["is", "he", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "a8cef8d04dd763574523473f693d2075",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The book is not on the table." },
            answer: ["is", "the", "book", "not", "on", "the", "table"],
            answerWithoutPredicate: ["is", "the", "book", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "197c28224f78229f30c3958bd32d27d0",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "They are not very happy." },
            answer: ["are", "they", "not", "very", "happy"],
            answerWithoutPredicate: ["are", "they", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "d7485b15fcf55db39328069142a6bcc4",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The water is not safe." },
            answer: ["is", "the", "water", "not", "safe"],
            answerWithoutPredicate: ["is", "the", "water", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "161200502fa1f3dc953920378c6f7817",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "I am not a student here." },
            answer: ["am", "i", "not", "a", "student", "here"],
            answerWithoutPredicate: ["am", "i", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "2f3fcdb642042da6d13f55d108435f0e",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The cat is not under the bed." },
            answer: ["is", "the", "cat", "not", "under", "the", "bed"],
            answerWithoutPredicate: ["is", "the", "cat", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "e8882108b76fd88e1306d8704bc18b50",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The room is not clean." },
            answer: ["is", "the", "room", "not", "clean"],
            answerWithoutPredicate: ["is", "the", "room", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "9e9f95ece2c24d24b795acd3cbeb7ff4",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "You are not a fast driver." },
            answer: ["are", "you", "not", "a", "fast", "driver"],
            answerWithoutPredicate: ["are", "you", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "539e2d7a3a7669a7447af0d78897a572",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The sky is not blue today." },
            answer: ["is", "the", "sky", "not", "blue", "today"],
            answerWithoutPredicate: ["is", "the", "sky", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "cb4dfae328f99811e3143df494be9dae",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "We are not at the library." },
            answer: ["are", "we", "not", "at", "the", "library"],
            answerWithoutPredicate: ["are", "we", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "3a7fb74433a15026be932927b7ed964a",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The test is not very hard." },
            answer: ["is", "the", "test", "not", "very", "hard"],
            answerWithoutPredicate: ["is", "the", "test", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "cf91c4ad2f659e954ce810281bba5a7c",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The apples are not fresh." },
            answer: ["are", "the", "apples", "not", "fresh"],
            answerWithoutPredicate: ["are", "the", "apples", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "6a1e33214680fa4d27984cda105a519c",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "Maria is not a quiet person." },
            answer: ["is", "maria", "not", "a", "quiet", "person"],
            answerWithoutPredicate: ["is", "maria", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "d39633e5594de3e9a973afcbcc155224",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The car is not in the garage." },
            answer: ["is", "the", "car", "not", "in", "the", "garage"],
            answerWithoutPredicate: ["is", "the", "car", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "6d2d8c686bdc0fd75ceac2acf4a0ff1b",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "They are not at the party." },
            answer: ["are", "they", "not", "at", "the", "party"],
            answerWithoutPredicate: ["are", "they", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "3716ad8637020c8265568bff3ca375dc",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: {
                twoSided: false,
                text: "The light is not bright enough.",
            },
            answer: ["is", "the", "light", "not", "bright", "enough"],
            answerWithoutPredicate: ["is", "the", "light", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "8e9465bd6654b691813a35e4523841f0",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: {
                twoSided: false,
                text: "The chairs are not comfortable.",
            },
            answer: ["are", "the", "chairs", "not", "comfortable"],
            answerWithoutPredicate: ["are", "the", "chairs", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "5463bc29aec65d77490884532687ecdf",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "I am not thirsty anymore." },
            answer: ["am", "i", "not", "thirsty", "anymore"],
            answerWithoutPredicate: ["am", "i", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "770335a16f6157bbc2e221e19943b1bb",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: {
                twoSided: false,
                text: "The museum is not open on Mondays.",
            },
            answer: ["is", "the", "museum", "not", "open", "on", "mondays"],
            answerWithoutPredicate: ["is", "the", "museum", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "420957647359f9b2bd6e5d1af9ef935f",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "We are not in the kitchen." },
            answer: ["are", "we", "not", "in", "the", "kitchen"],
            answerWithoutPredicate: ["are", "we", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "e08087a4379009bb653adb01e9aa0884",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: {
                twoSided: false,
                text: "The movie is not very interesting.",
            },
            answer: ["is", "the", "movie", "not", "very", "interesting"],
            answerWithoutPredicate: ["is", "the", "movie", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "0bb9a5018b1aa2d437e26e98b1ea60df",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "She is not at home." },
            answer: ["is", "she", "not", "at", "home"],
            answerWithoutPredicate: ["is", "she", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "99c2fdfbfb6674fd177e268dc723cd41",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The flowers are not real." },
            answer: ["are", "the", "flowers", "not", "real"],
            answerWithoutPredicate: ["are", "the", "flowers", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "b9ee91267d1799027d3137a67143add5",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The bread is not fresh today." },
            answer: ["is", "the", "bread", "not", "fresh", "today"],
            answerWithoutPredicate: ["is", "the", "bread", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "9c6e10c812b002d6d47aee69a12670bd",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "He is not a famous actor." },
            answer: ["is", "he", "not", "a", "famous", "actor"],
            answerWithoutPredicate: ["is", "he", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "bdcef5cafc39a111c9487dc196e41d28",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The dog is not in the house." },
            answer: ["is", "the", "dog", "not", "in", "the", "house"],
            answerWithoutPredicate: ["is", "the", "dog", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "3f7728956627f2b22b75b771fb5ca51b",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: {
                twoSided: false,
                text: "The shoes are not under the table.",
            },
            answer: ["are", "the", "shoes", "not", "under", "the", "table"],
            answerWithoutPredicate: ["are", "the", "shoes", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "9e0e9522e70838b9d3e408a1b0833bdd",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "I am not a fan of that music." },
            answer: ["am", "i", "not", "a", "fan", "of", "that", "music"],
            answerWithoutPredicate: ["am", "i", "not"],
            minWordCount: 8,
        },
    }),
    typedQuestionData({
        id: "4161b905c5af3edc45ca6d03fda96f7e",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The bus is not at the stop." },
            answer: ["is", "the", "bus", "not", "at", "the", "stop"],
            answerWithoutPredicate: ["is", "the", "bus", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "d24ab609b27489be61db30959f4a5134",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The box is not very heavy." },
            answer: ["is", "the", "box", "not", "very", "heavy"],
            answerWithoutPredicate: ["is", "the", "box", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "b9dc5faee168eed88e7240d6044e04c2",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "We are not tired of the game." },
            answer: ["are", "we", "not", "tired", "of", "the", "game"],
            answerWithoutPredicate: ["are", "we", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "72e3aad3be3eadf0da6fd343c64a1d2a",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The house is not on the hill." },
            answer: ["is", "the", "house", "not", "on", "the", "hill"],
            answerWithoutPredicate: ["is", "the", "house", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "25ae77b94b9f4998d848d5ccf8e39ae4",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "They are not my friends." },
            answer: ["are", "they", "not", "my", "friends"],
            answerWithoutPredicate: ["are", "they", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "30ba6d9a4add06de313d8ff3fcb6f8d9",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The tea is not cold yet." },
            answer: ["is", "the", "tea", "not", "cold", "yet"],
            answerWithoutPredicate: ["is", "the", "tea", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "605c189578f458f933d927dbf4d3fb7e",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "I am not a morning person." },
            answer: ["am", "i", "not", "a", "morning", "person"],
            answerWithoutPredicate: ["am", "i", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "f59176c0a1dcd2ca8fc906c255f5c428",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The grass is not very green." },
            answer: ["is", "the", "grass", "not", "very", "green"],
            answerWithoutPredicate: ["is", "the", "grass", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "2e6e34d4f96b6c44b93f0c01b4497932",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The baby is not very old." },
            answer: ["is", "the", "baby", "not", "very", "old"],
            answerWithoutPredicate: ["is", "the", "baby", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "8c3507668d79cb0bff5172f914fe4bf8",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "She is not a nurse." },
            answer: ["is", "she", "not", "a", "nurse"],
            answerWithoutPredicate: ["is", "she", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "11174656caf4ed3be4c2663816bb99df",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The computer is not fast." },
            answer: ["is", "the", "computer", "not", "fast"],
            answerWithoutPredicate: ["is", "the", "computer", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "6070c10df7f57099f09c1eef939e6ed8",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The keys are not on the hook." },
            answer: ["are", "the", "keys", "not", "on", "the", "hook"],
            answerWithoutPredicate: ["are", "the", "keys", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "8894c182d4b09b1dcee4bb569ce99034",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "They are not at the station." },
            answer: ["are", "they", "not", "at", "the", "station"],
            answerWithoutPredicate: ["are", "they", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "c45609cf0bd0710f9593ac91dde91da6",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The fruit is not ripe." },
            answer: ["is", "the", "fruit", "not", "ripe"],
            answerWithoutPredicate: ["is", "the", "fruit", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "5d5b5aa7bded4a8e58bbd54f34947c94",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "I am not afraid of dogs." },
            answer: ["am", "i", "not", "afraid", "of", "dogs"],
            answerWithoutPredicate: ["am", "i", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "2c2161cb72aeeb1ef88d7805215326e1",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The road is not very smooth." },
            answer: ["is", "the", "road", "not", "very", "smooth"],
            answerWithoutPredicate: ["is", "the", "road", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "0b526c374ca682a4c4282f3c9f7ad220",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: {
                twoSided: false,
                text: "The plates are not clean enough.",
            },
            answer: ["are", "the", "plates", "not", "clean", "enough"],
            answerWithoutPredicate: ["are", "the", "plates", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "383736cc13e1d5913b743c8f06efa3b9",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "We are not ready to go." },
            answer: ["are", "we", "not", "ready", "to", "go"],
            answerWithoutPredicate: ["are", "we", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "5fc8f08dfb13c41070142bc0def01726",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The city is not very large." },
            answer: ["is", "the", "city", "not", "very", "large"],
            answerWithoutPredicate: ["is", "the", "city", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "d043ea6f94c4f6e5fb9a4e8c47d4d62b",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "She is not a professional." },
            answer: ["is", "she", "not", "a", "professional"],
            answerWithoutPredicate: ["is", "she", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "6e8a2d898982098a7305928897cdd5a5",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The water is not boiling yet." },
            answer: ["is", "the", "water", "not", "boiling", "yet"],
            answerWithoutPredicate: ["is", "the", "water", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "3d30046a23510940ed5d6e89bce9a451",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "They are not in their seats." },
            answer: ["are", "they", "not", "in", "their", "seats"],
            answerWithoutPredicate: ["are", "they", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "c70612e84392c6c6dfea8b8bdaa428bd",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The lesson is not too long." },
            answer: ["is", "the", "lesson", "not", "too", "long"],
            answerWithoutPredicate: ["is", "the", "lesson", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "7b57815e5fc02acc10bb575568dd8687",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "I am not a fan of sports." },
            answer: ["am", "i", "not", "a", "fan", "of", "sports"],
            answerWithoutPredicate: ["am", "i", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "cf59b7d9d38e816e4d3b0c628d7c167b",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The milk is not in the bottle." },
            answer: ["is", "the", "milk", "not", "in", "the", "bottle"],
            answerWithoutPredicate: ["is", "the", "milk", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "d2f39ba4b9d9debf829bab24399bc132",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: {
                twoSided: false,
                text: "The sun is not very strong today.",
            },
            answer: ["is", "the", "sun", "not", "very", "strong", "today"],
            answerWithoutPredicate: ["is", "the", "sun", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "a11023c3fe6d1e1307f018e290cb0880",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "She is not my teacher." },
            answer: ["is", "she", "not", "my", "teacher"],
            answerWithoutPredicate: ["is", "she", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "4c4a407d19a4a12bb218bdebf1bf4847",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The cat is not black." },
            answer: ["is", "the", "cat", "not", "black"],
            answerWithoutPredicate: ["is", "the", "cat", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "418bf464109edf7fdb4ceae1bc3f7234",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "We are not alone in the room." },
            answer: ["are", "we", "not", "alone", "in", "the", "room"],
            answerWithoutPredicate: ["are", "we", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "ea284818863575c3b161670706ee94fa",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The mountain is not very high." },
            answer: ["is", "the", "mountain", "not", "very", "high"],
            answerWithoutPredicate: ["is", "the", "mountain", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "4d541681c64786c79619058c8ebc1498",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "He is not a pilot." },
            answer: ["is", "he", "not", "a", "pilot"],
            answerWithoutPredicate: ["is", "he", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "3f17f3f62ed6c6e368858956ec16f626",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The room is not very bright." },
            answer: ["is", "the", "room", "not", "very", "bright"],
            answerWithoutPredicate: ["is", "the", "room", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "350a35408287ea8e0ba0588dcfb26caa",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "They are not at school now." },
            answer: ["are", "they", "not", "at", "school", "now"],
            answerWithoutPredicate: ["are", "they", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "5b5495b8fbf7469f80e1a4700225c191",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "I am not very hungry." },
            answer: ["am", "i", "not", "very", "hungry"],
            answerWithoutPredicate: ["am", "i", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "2b76e7ece6f571e50d1d77c67bf5615f",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The garden is not very big." },
            answer: ["is", "the", "garden", "not", "very", "big"],
            answerWithoutPredicate: ["is", "the", "garden", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "f6f7bebc944e9bba891dbb5f29cd773c",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "She is not from Japan." },
            answer: ["is", "she", "not", "from", "japan"],
            answerWithoutPredicate: ["is", "she", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "e849bd22819ba540278382a042ae46cf",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The bread is not on the shelf." },
            answer: ["is", "the", "bread", "not", "on", "the", "shelf"],
            answerWithoutPredicate: ["is", "the", "bread", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "d446d4b4d5126e37372f380f5b51b702",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "They are not ready for school." },
            answer: ["are", "they", "not", "ready", "for", "school"],
            answerWithoutPredicate: ["are", "they", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "2aebac680d834534d870cdd2a8032d1c",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The river is not clean enough." },
            answer: ["is", "the", "river", "not", "clean", "enough"],
            answerWithoutPredicate: ["is", "the", "river", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "0f3f76b12a8d7b026afc906a21d8feee",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "He is not my brother." },
            answer: ["is", "he", "not", "my", "brother"],
            answerWithoutPredicate: ["is", "he", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "c2024dacf679ac481289a8a4533b47fc",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: {
                twoSided: false,
                text: "I am not a fan of cold weather.",
            },
            answer: ["am", "i", "not", "a", "fan", "of", "cold", "weather"],
            answerWithoutPredicate: ["am", "i", "not"],
            minWordCount: 8,
        },
    }),
    typedQuestionData({
        id: "71a7c5cebf40409901d4d97d97615c03",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The juice is not very sweet." },
            answer: ["is", "the", "juice", "not", "very", "sweet"],
            answerWithoutPredicate: ["is", "the", "juice", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "f1750390d767ca85e3972b981db716a5",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "She is not at the university." },
            answer: ["is", "she", "not", "at", "the", "university"],
            answerWithoutPredicate: ["is", "she", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "52bedb6a407cb4e60fa46a5e7757a2c3",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The night is not very quiet." },
            answer: ["is", "the", "night", "not", "very", "quiet"],
            answerWithoutPredicate: ["is", "the", "night", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "939bcab5a878fb4a4cb7ce39cf3e4200",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "They are not at the cinema." },
            answer: ["are", "they", "not", "at", "the", "cinema"],
            answerWithoutPredicate: ["are", "they", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "7af3515213172fa79ff02185b52c2aec",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The dog is not big enough." },
            answer: ["is", "the", "dog", "not", "big", "enough"],
            answerWithoutPredicate: ["is", "the", "dog", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "b938d4b6d848feccbb39acdd3605ea68",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "He is not a very good chef." },
            answer: ["is", "he", "not", "a", "very", "good", "chef"],
            answerWithoutPredicate: ["is", "he", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "8f159d146d16a875c3f7209027f8e0e1",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "I am not tired of this." },
            answer: ["am", "i", "not", "tired", "of", "this"],
            answerWithoutPredicate: ["am", "i", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "ae00a21bec2cb30eb19c7425264cfa66",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The water is not very warm." },
            answer: ["is", "the", "water", "not", "very", "warm"],
            answerWithoutPredicate: ["is", "the", "water", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "6b8aed42be6df8f576a87ebcd06ac64d",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The box is not light." },
            answer: ["is", "the", "box", "not", "light"],
            answerWithoutPredicate: ["is", "the", "box", "not"],
            minWordCount: 5,
        },
    }),
    typedQuestionData({
        id: "0677eb393c78006b905ce6bb24c86d7a",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "She is not a very fast runner." },
            answer: ["is", "she", "not", "a", "very", "fast", "runner"],
            answerWithoutPredicate: ["is", "she", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "54b1b288b4ba2e890900ce3753374a2d",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "They are not at the gym." },
            answer: ["are", "they", "not", "at", "the", "gym"],
            answerWithoutPredicate: ["are", "they", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "cb852276dfb6862fbcc44825d1e25534",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The road is not very safe." },
            answer: ["is", "the", "road", "not", "very", "safe"],
            answerWithoutPredicate: ["is", "the", "road", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "3a1ed8ade42078fb3e2d6a0a693004a1",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "I am not a fan of that film." },
            answer: ["am", "i", "not", "a", "fan", "of", "that", "film"],
            answerWithoutPredicate: ["am", "i", "not"],
            minWordCount: 8,
        },
    }),
    typedQuestionData({
        id: "c6b4cafb6ea27a2809a98b59382a5abd",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The lesson is not very easy." },
            answer: ["is", "the", "lesson", "not", "very", "easy"],
            answerWithoutPredicate: ["is", "the", "lesson", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "70251271bbf0ba64ac7eae65a5716ff1",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "She is not at the party yet." },
            answer: ["is", "she", "not", "at", "the", "party", "yet"],
            answerWithoutPredicate: ["is", "she", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "13103a1016cc1e4250b76a3d94f42e17",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The night is not dark enough." },
            answer: ["is", "the", "night", "not", "dark", "enough"],
            answerWithoutPredicate: ["is", "the", "night", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "70d1582fe0b1c98f060161ab78c7a3a2",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "They are not in the office." },
            answer: ["are", "they", "not", "in", "the", "office"],
            answerWithoutPredicate: ["are", "they", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "64467690542cf6f41b52723c3463cab9",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The dog is not in the garden." },
            answer: ["is", "the", "dog", "not", "in", "the", "garden"],
            answerWithoutPredicate: ["is", "the", "dog", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "281f9a486331889d7fcc22c5b4823aa8",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "He is not a very happy man." },
            answer: ["is", "he", "not", "a", "very", "happy", "man"],
            answerWithoutPredicate: ["is", "he", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "872ffc8796a0bd3795fcc9f317126f69",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "I am not afraid of the dark." },
            answer: ["am", "i", "not", "afraid", "of", "the", "dark"],
            answerWithoutPredicate: ["am", "i", "not"],
            minWordCount: 7,
        },
    }),
    typedQuestionData({
        id: "e5c7eb72f3f955515817a8fce4d88d38",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The water is not very deep." },
            answer: ["is", "the", "water", "not", "very", "deep"],
            answerWithoutPredicate: ["is", "the", "water", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "7d4eb0ecfa00c0df2b1528f182427a87",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: { twoSided: false, text: "The museum is not very far." },
            answer: ["is", "the", "museum", "not", "very", "far"],
            answerWithoutPredicate: ["is", "the", "museum", "not"],
            minWordCount: 6,
        },
    }),
    typedQuestionData({
        id: "f308a8b688a3219e240b795d2d29e97e",
        type: "turnNegativePresentToBeStatementIntoQuestion",
        data: {
            prompt: {
                twoSided: false,
                text: "The store is not open on Sundays.",
            },
            answer: ["is", "the", "store", "not", "open", "on", "sundays"],
            answerWithoutPredicate: ["is", "the", "store", "not"],
            minWordCount: 7,
        },
    }),
];

export default turnNegativePresentToBeStatementIntoQuestion;
