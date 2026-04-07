import { typedQuestionData } from "@/app/model/question/question-factory";

const grammarTrivia = [
    typedQuestionData({
        id: "fa401a4c3c455791d8f08c0781d24646",
        type: "grammarTrivia",
        data: {
            prompt: "Which form of the verb 'to be' is used with the first person singular (I) in the present tense?",
            choices: ["is", "are", "am", "be"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "c04b66635472e368ca5668b58afd78cd",
        type: "grammarTrivia",
        data: {
            prompt: "How do you form a negative statement with the verb 'to be' in the present tense?",
            choices: [
                "Add 'do not' before the verb",
                "Add 'not' after the verb",
                "Change the verb to its past form",
                "Invert the subject and the verb",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "5e4c200b43641bcbd791ed51946ff799",
        type: "grammarTrivia",
        data: {
            prompt: "What is the correct form of 'to be' for 'She' in the present tense?",
            choices: ["am", "are", "is", "were"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "e84cd1ac5417a1f7ae1432f7811117ce",
        type: "grammarTrivia",
        data: {
            prompt: "Which form of 'to be' is used for plural subjects like 'we' and 'they' in the past tense?",
            choices: ["was", "were", "is", "are"],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "9ab01609ae553d068e633ba6ebb801aa",
        type: "grammarTrivia",
        data: {
            prompt: "In the future tense, what usually follows the modal auxiliary verb 'will'?",
            choices: ["being", "been", "be", "is"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "40f3b22f57bd6bf0938d8a90f657ca3c",
        type: "grammarTrivia",
        data: {
            prompt: "What is the third-person singular ending for most verbs in the simple present tense?",
            choices: ["-ing", "-ed", "-s or -es", "-en"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "886ac60b683fc728ea195c198cae4595",
        type: "grammarTrivia",
        data: {
            prompt: "Which auxiliary verb is used to form questions in the simple present tense for 'I', 'you', 'we', and 'they'?",
            choices: ["does", "do", "is", "are"],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "37a75ec6871e12c554751f52c63c9425",
        type: "grammarTrivia",
        data: {
            prompt: "How is the simple past tense of regular verbs formed?",
            choices: [
                "Adding -ing",
                "Adding -ed",
                "Using 'will'",
                "Using 'have'",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "8915306131ee4d734de6eb3048160736",
        type: "grammarTrivia",
        data: {
            prompt: "What happens to the main verb in a negative simple past statement using 'did not'?",
            choices: [
                "It stays in the base form",
                "It changes to the past form",
                "It adds -ing",
                "It adds -s",
            ],
            correctChoiceIndex: 0,
        },
    }),
    typedQuestionData({
        id: "6cb55694870dc07eb48707a9c6a8a1c3",
        type: "grammarTrivia",
        data: {
            prompt: "Which auxiliary verb is commonly used to make predictions in the simple future tense?",
            choices: ["have", "do", "will", "did"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "e182051ac7e8918374a791ee9af210af",
        type: "grammarTrivia",
        data: {
            prompt: "What is the structure of the present continuous tense?",
            choices: [
                "have + past participle",
                "am/is/are + verb(-ing)",
                "will + base verb",
                "do/does + base verb",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "5d9ce4f6f5f3757439c362b9b9e8fe54",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense is used for an action in progress at a specific moment in the past?",
            choices: [
                "Simple Past",
                "Past Perfect",
                "Past Continuous",
                "Present Perfect",
            ],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "128227ce5b5d373a5d9577321003396f",
        type: "grammarTrivia",
        data: {
            prompt: "How is the future continuous tense formed?",
            choices: [
                "will have + past participle",
                "will be + verb(-ing)",
                "am/is/are going to + verb",
                "will + verb",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "166ea9dd464dfa72f5e6943aa52f494c",
        type: "grammarTrivia",
        data: {
            prompt: "What auxiliary verbs are used in the present perfect tense?",
            choices: ["do / does", "was / were", "have / has", "will / shall"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "d6c0cef2fbd63bad30e5ceb378eef0d9",
        type: "grammarTrivia",
        data: {
            prompt: "When is the past perfect tense used?",
            choices: [
                "For habits in the past",
                "For an action completed before another past action",
                "For actions happening now",
                "For future plans",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "f84e04fd0276a1be7888c3c77569ee7f",
        type: "grammarTrivia",
        data: {
            prompt: "What is the structure of the future perfect tense?",
            choices: [
                "will be + verb(-ing)",
                "will have + past participle",
                "will + base verb",
                "have been + verb(-ing)",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "2daee43dcae8eff83aa3d9aac61332df",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense emphasizes the duration of an action that started in the past and continues now?",
            choices: [
                "Present Perfect",
                "Present Continuous",
                "Present Perfect Continuous",
                "Simple Present",
            ],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "269ba95196ff1635703ef5d6bee27332",
        type: "grammarTrivia",
        data: {
            prompt: "What is the form for the past perfect continuous tense?",
            choices: [
                "have been + verb(-ing)",
                "had been + verb(-ing)",
                "was + verb(-ing)",
                "has been + verb(-ing)",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "ded39cc37d1658e4c00833c3de898db7",
        type: "grammarTrivia",
        data: {
            prompt: "How do you form a question in the future perfect continuous tense?",
            choices: [
                "Have + subject + been + verb-ing?",
                "Will + subject + have been + verb-ing?",
                "Subject + will + have been + verb-ing?",
                "Did + subject + been + verb-ing?",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "d8e3f863ab6e3df975c43753080eafb4",
        type: "grammarTrivia",
        data: {
            prompt: "What is the negative form of 'She will be'?",
            choices: [
                "She not will be",
                "She will be not",
                "She will not be",
                "She doesn't be",
            ],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "1587c9618c8e145b69f7213fa9aacb42",
        type: "grammarTrivia",
        data: {
            prompt: "Which form of 'to be' is used with 'You' in the past tense?",
            choices: ["was", "were", "are", "be"],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "8edbb8c11a4be4829110a054a3d651ff",
        type: "grammarTrivia",
        data: {
            prompt: "To form a question with 'to be', what is the correct word order?",
            choices: [
                "Subject + Verb + ?",
                "Verb + Subject + ?",
                "Do + Subject + Verb + ?",
                "Will + Subject + Verb + ?",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "0bc08c7e95874e14d2ca4a5e174cfd7e",
        type: "grammarTrivia",
        data: {
            prompt: "What tense describes facts or general truths like 'Water boils at 100 degrees'?",
            choices: [
                "Simple Present",
                "Present Continuous",
                "Present Perfect",
                "Simple Future",
            ],
            correctChoiceIndex: 0,
        },
    }),
    typedQuestionData({
        id: "8a6ba4bec10946da4abcf14ebe232dde",
        type: "grammarTrivia",
        data: {
            prompt: "What is the negative contraction for 'does not'?",
            choices: ["don't", "doen't", "doesn't", "did't"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "004ce29cf0e4dc6efea4f724e0d788c6",
        type: "grammarTrivia",
        data: {
            prompt: "In the sentence 'I have lived here for five years', what tense is being used?",
            choices: [
                "Simple Past",
                "Present Perfect",
                "Past Perfect",
                "Present Continuous",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "f9cbcc6402ee71384ac65357865bb811",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense is used to talk about life experiences at an unspecified time?",
            choices: [
                "Simple Past",
                "Present Perfect",
                "Past Perfect",
                "Future Perfect",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "74302895aa99a9a99be7a516ab6b39ab",
        type: "grammarTrivia",
        data: {
            prompt: "What is the past participle of 'go'?",
            choices: ["went", "goed", "gone", "going"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "2dd526390f8b4b6f1039976183eebaac",
        type: "grammarTrivia",
        data: {
            prompt: "How do you make the present continuous negative?",
            choices: [
                "Add 'not' before 'am/is/are'",
                "Add 'not' after 'am/is/are'",
                "Change the verb to base form",
                "Use 'don't'",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "9a7880413f2459f36eacfb6e52be9889",
        type: "grammarTrivia",
        data: {
            prompt: "What tense is 'I was doing my homework when you called'?",
            choices: [
                "Simple Past",
                "Past Continuous",
                "Past Perfect",
                "Present Continuous",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "1feeb043c8c4974efb6811c3e8f1cd2f",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense is formed with 'will have been + verb(-ing)'?",
            choices: [
                "Future Perfect",
                "Future Continuous",
                "Future Perfect Continuous",
                "Present Perfect Continuous",
            ],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "5e7854278578207c6ef7e40ca66cf29d",
        type: "grammarTrivia",
        data: {
            prompt: "What does the verb 'to be' mainly mean depending on context?",
            choices: [
                "To do or act",
                "To exist, happen, or have characteristics",
                "To possess or own",
                "To move or go",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "f136b1e5ad6c1d3771dccdd7471dcf9d",
        type: "grammarTrivia",
        data: {
            prompt: "Which of these is the correct question form for 'She is a baker'?",
            choices: [
                "She is a baker?",
                "Is she a baker?",
                "Does she be a baker?",
                "Is a baker she?",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "f4922e729dea353ab21ae0db9503041c",
        type: "grammarTrivia",
        data: {
            prompt: "For the subject 'It', what is the correct simple present form of 'walk'?",
            choices: ["walk", "walks", "walking", "walked"],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "9d85763afedfae2956aca2b0c93410e6",
        type: "grammarTrivia",
        data: {
            prompt: "What is the negative form of 'They live in a small apartment'?",
            choices: [
                "They live not in a small apartment",
                "They don't live in a small apartment",
                "They doesn't live in a small apartment",
                "They not live in a small apartment",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "c459a58926fb81be89abf0033cc42565",
        type: "grammarTrivia",
        data: {
            prompt: "What auxiliary verb do you use to form a question in the simple past?",
            choices: ["Do", "Does", "Did", "Have"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "f732359851e38b504aebb4f5b8cef0ea",
        type: "grammarTrivia",
        data: {
            prompt: "Identify the tense: 'By next week, I will have finished the project.'",
            choices: [
                "Future Simple",
                "Future Continuous",
                "Future Perfect",
                "Future Perfect Continuous",
            ],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "274f04763248ae990d667befe2c5d20e",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense is used for two actions happening at the same time in the past?",
            choices: [
                "Simple Past",
                "Past Continuous",
                "Past Perfect",
                "Present Continuous",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "104877839e10120166b04348b3e890f0",
        type: "grammarTrivia",
        data: {
            prompt: "How do you form a negative in the future perfect tense?",
            choices: [
                "will + have not + past participle",
                "will not + have + past participle",
                "not will have + past participle",
                "will have + past participle + not",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "91a1fd19a0d7aeea59e5ef3f3cbd9781",
        type: "grammarTrivia",
        data: {
            prompt: "What is the present participle of the verb 'study'?",
            choices: ["studied", "studies", "studying", "study"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "0f5edfa175044f7ded9a995b55dda721",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense can describe planned future arrangements?",
            choices: [
                "Simple Present",
                "Present Continuous",
                "Present Perfect",
                "Past Continuous",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "3950ef914f08f22512310d7f7cacb735",
        type: "grammarTrivia",
        data: {
            prompt: "What is the past form of the irregular verb 'eat'?",
            choices: ["eated", "ate", "aten", "eating"],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "e35260ce51a806b58ad821b579e4575f",
        type: "grammarTrivia",
        data: {
            prompt: "Complete the sentence: 'She ___ been studying for three hours.' (Present Perfect Continuous)",
            choices: ["have", "has", "had", "is"],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "cc590808b0a29cbd1b3542499950b78a",
        type: "grammarTrivia",
        data: {
            prompt: "Which of these expresses a spontaneous decision?",
            choices: [
                "I am going to eat",
                "I will answer the phone",
                "I have eaten",
                "I was eating",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "e7b1dc3330685b4ed81151e4e1df8b6e",
        type: "grammarTrivia",
        data: {
            prompt: "In the past perfect continuous, what is the sequence of auxiliary verbs?",
            choices: ["have + been", "has + been", "had + been", "was + being"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "0c0309200b77543ab43ad55a2ed93059",
        type: "grammarTrivia",
        data: {
            prompt: "What is the future form of 'to be' for 'I'?",
            choices: ["I am be", "I will be", "I will being", "I am going be"],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "59afb033be8d5b465fef6a2e26bc4c67",
        type: "grammarTrivia",
        data: {
            prompt: "Choose the correct negative for 'I was':",
            choices: ["I were not", "I was not", "I am not", "I did not was"],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "6a25131e5ec2549c3e3029785dfffbfb",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense is used for actions that started and finished at a specific time in the past?",
            choices: [
                "Simple Past",
                "Past Continuous",
                "Past Perfect",
                "Present Perfect",
            ],
            correctChoiceIndex: 0,
        },
    }),
    typedQuestionData({
        id: "5e37466ead20ebc52c8bc5a177177499",
        type: "grammarTrivia",
        data: {
            prompt: "To form a question in the future continuous, where does 'will' go?",
            choices: [
                "After the subject",
                "Before the subject",
                "After 'be'",
                "At the end of the sentence",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "ff7a4092a436ed12fb551796dbf06f3c",
        type: "grammarTrivia",
        data: {
            prompt: "What auxiliary is used with 'She' in the simple present to make a question?",
            choices: ["Do", "Does", "Has", "Is"],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "df03485f5e60c91857482b34a1316047",
        type: "grammarTrivia",
        data: {
            prompt: "What does the present perfect continuous tense focus on?",
            choices: [
                "Completion",
                "The fact it happened",
                "Duration of the action",
                "Future prediction",
            ],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "8c45f8a5f33f63d320dba4c43d46068b",
        type: "grammarTrivia",
        data: {
            prompt: "What is the correct negative for 'They were'?",
            choices: [
                "They was not",
                "They were not",
                "They are not",
                "They did not were",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "0886151ad1ebae18f385e8c779cad7f8",
        type: "grammarTrivia",
        data: {
            prompt: "What is the structure of a present perfect question?",
            choices: [
                "Do + subject + have + past participle?",
                "Has/Have + subject + past participle?",
                "Subject + has/have + past participle?",
                "Is + subject + past participle?",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "ff7c1480b0964099b3fa9ec08bdcb9ae",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense uses 'had + past participle'?",
            choices: [
                "Present Perfect",
                "Past Perfect",
                "Past Simple",
                "Future Perfect",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "3741ef75d44412cd4cd11dd54b062cad",
        type: "grammarTrivia",
        data: {
            prompt: "How do you form the negative of 'will be working'?",
            choices: [
                "will be not working",
                "will not be working",
                "not will be working",
                "won't being working",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "20ef85e1feffa608bdddf9070c6f7dc3",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense would you use to describe a state of being in the current moment?",
            choices: [
                "Simple Present",
                "Simple Past",
                "Future Continuous",
                "Past Perfect",
            ],
            correctChoiceIndex: 0,
        },
    }),
    typedQuestionData({
        id: "aec4abb6cc1ba45ee8340886c8aaea94",
        type: "grammarTrivia",
        data: {
            prompt: "What is the question form of 'I am meeting my teacher'?",
            choices: [
                "I am meeting my teacher?",
                "Am I meeting my teacher?",
                "Do I meeting my teacher?",
                "Will I meet my teacher?",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "712b5c6d76e0b6159ecf92ecb5208145",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense shows an action will be completed before a future time?",
            choices: [
                "Future Continuous",
                "Future Simple",
                "Future Perfect",
                "Future Perfect Continuous",
            ],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "051d5dc05c1b708e937f01ce66f54e2a",
        type: "grammarTrivia",
        data: {
            prompt: "What is the auxiliary for 'they' in the present perfect?",
            choices: ["has", "have", "are", "do"],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "8136f51e62277ca19eff64ce22a55e74",
        type: "grammarTrivia",
        data: {
            prompt: "Identify the tense: 'I had been waiting for an hour.'",
            choices: [
                "Past Perfect",
                "Past Continuous",
                "Past Perfect Continuous",
                "Present Perfect Continuous",
            ],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "9247b7d5a9343ffde52438348fd4f770",
        type: "grammarTrivia",
        data: {
            prompt: "What is the future continuous question for 'You will be using the computer'?",
            choices: [
                "Will you be using the computer?",
                "Are you going to use the computer?",
                "Will be you using the computer?",
                "Have you been using the computer?",
            ],
            correctChoiceIndex: 0,
        },
    }),
    typedQuestionData({
        id: "0d765e27713423c3fe14d0e11f81143a",
        type: "grammarTrivia",
        data: {
            prompt: "Which form of 'to be' is used with 'Luis and I' in the present?",
            choices: ["am", "is", "are", "be"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "a8f935c960d0b130ea672649436ef60a",
        type: "grammarTrivia",
        data: {
            prompt: "How do you make the past perfect negative?",
            choices: [
                "Add 'not' after 'had'",
                "Add 'not' before 'had'",
                "Use 'didn't'",
                "Use 'haven't'",
            ],
            correctChoiceIndex: 0,
        },
    }),
    typedQuestionData({
        id: "e89479e3879363f2b2249eaf6e227333",
        type: "grammarTrivia",
        data: {
            prompt: "What is the base form of the verb 'wrote'?",
            choices: ["written", "write", "writing", "writes"],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "6781f2e8ba4a7d2e3cf6711d8fb89abb",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense uses 'am/is/are going to' for plans?",
            choices: [
                "Simple Present",
                "Simple Future",
                "Present Continuous",
                "Future Perfect",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "f8403f9beb6dc92fe6754c7ed97bd8de",
        type: "grammarTrivia",
        data: {
            prompt: "In the sentence 'She has finished her homework', 'finished' is the:",
            choices: [
                "Base form",
                "Present participle",
                "Past participle",
                "Infinitive",
            ],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "d3b644dacbeb90b101b70ce97a3fb238",
        type: "grammarTrivia",
        data: {
            prompt: "What is the correct form for 'We' in the past perfect continuous?",
            choices: [
                "We had being",
                "We had been",
                "We have been",
                "We was being",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "014948e769e209b14782afd84b2e85a5",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense is used for past habits that are no longer true?",
            choices: [
                "Simple Past",
                "Simple Present",
                "Past Continuous",
                "Past Perfect",
            ],
            correctChoiceIndex: 0,
        },
    }),
    typedQuestionData({
        id: "133fb219610c4d4f9660bb956c316ef5",
        type: "grammarTrivia",
        data: {
            prompt: "What is the contraction for 'will not'?",
            choices: ["willn't", "won't", "win't", "wont"],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "03da2e9103a141704fc000fd2b43e027",
        type: "grammarTrivia",
        data: {
            prompt: "How do you form a question in the past perfect?",
            choices: [
                "Had + subject + past participle?",
                "Have + subject + past participle?",
                "Did + subject + past participle?",
                "Was + subject + past participle?",
            ],
            correctChoiceIndex: 0,
        },
    }),
    typedQuestionData({
        id: "18678e2edb49e7fb9710265648d419eb",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense describes actions happening right now?",
            choices: [
                "Simple Present",
                "Present Continuous",
                "Present Perfect",
                "Present Perfect Continuous",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "40c6b086ca00e5ba0504a5859c4829cc",
        type: "grammarTrivia",
        data: {
            prompt: "What is the form of 'to be' for 'He/She/It' in the past tense?",
            choices: ["were", "was", "be", "been"],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "6fa2b70c1af5578a4573bca981814007",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense emphasizes how long an action will have been happening until a future point?",
            choices: [
                "Future Perfect",
                "Future Continuous",
                "Future Perfect Continuous",
                "Future Simple",
            ],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "f8a312209cee33ba294a694c6cb2dcc2",
        type: "grammarTrivia",
        data: {
            prompt: "What is the negative of 'She has been studying'?",
            choices: [
                "She hasn't been studying",
                "She has been not studying",
                "She not has been studying",
                "She doesn't has been studying",
            ],
            correctChoiceIndex: 0,
        },
    }),
    typedQuestionData({
        id: "b1aa5503caf421936a0e37aa0bc45373",
        type: "grammarTrivia",
        data: {
            prompt: "What auxiliary verb is used for questions in the simple future?",
            choices: ["Do", "Will", "Are", "Have"],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "e268cd43d44e1b25d46599c0ec74db4d",
        type: "grammarTrivia",
        data: {
            prompt: "Identify the tense: 'They have visited Japan three times.'",
            choices: [
                "Simple Past",
                "Past Perfect",
                "Present Perfect",
                "Present Continuous",
            ],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "3292b352f01d0be355049fb8917e394b",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense uses 'was/were + verb(-ing)'?",
            choices: [
                "Past Continuous",
                "Present Continuous",
                "Future Continuous",
                "Past Perfect",
            ],
            correctChoiceIndex: 0,
        },
    }),
    typedQuestionData({
        id: "defff365fe5834e96b839b40c3ad75b1",
        type: "grammarTrivia",
        data: {
            prompt: "What is the correct form of 'to be' for 'You' in the present?",
            choices: ["am", "is", "are", "be"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "ebc38198ef09d9053ae471893d53a5ed",
        type: "grammarTrivia",
        data: {
            prompt: "To make a question in the present continuous, what comes first?",
            choices: [
                "The subject",
                "The main verb",
                "The form of 'to be'",
                "The word 'Do'",
            ],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "925417dd4285ffd818992ed7df9fc275",
        type: "grammarTrivia",
        data: {
            prompt: "What is the past participle of 'eat'?",
            choices: ["ate", "eating", "eaten", "eats"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "db56eec88cb92c82f8a13b963795d46e",
        type: "grammarTrivia",
        data: {
            prompt: "How do you form the negative of 'I will have finished'?",
            choices: [
                "I will not have finished",
                "I will have not finished",
                "I not will have finished",
                "I won't finished",
            ],
            correctChoiceIndex: 0,
        },
    }),
    typedQuestionData({
        id: "f064766998fb395e21f3ffccaa28ad69",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense is used to clarify which of two past events happened first?",
            choices: [
                "Simple Past",
                "Past Perfect",
                "Past Continuous",
                "Present Perfect",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "aeeac818e9738210048228af8ceb87d7",
        type: "grammarTrivia",
        data: {
            prompt: "What is the question for 'She will have graduated'?",
            choices: [
                "Will she have graduated?",
                "Has she graduated?",
                "Will have she graduated?",
                "Does she will graduate?",
            ],
            correctChoiceIndex: 0,
        },
    }),
    typedQuestionData({
        id: "027fdbfc3d6a5f86280d0bfc5e87972e",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense describes a temporary situation happening around now?",
            choices: [
                "Simple Present",
                "Present Continuous",
                "Present Perfect",
                "Present Perfect Continuous",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "24f2ff93be99d860759c9cae37079e2b",
        type: "grammarTrivia",
        data: {
            prompt: "What auxiliary is used in the past perfect continuous?",
            choices: ["have", "has", "had", "was"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "2439b369e966da1d5d725678676e8ce3",
        type: "grammarTrivia",
        data: {
            prompt: "How do you form the question: 'You were a basketball player'?",
            choices: [
                "Were you a basketball player?",
                "You were a basketball player?",
                "Did you were a basketball player?",
                "Was you a basketball player?",
            ],
            correctChoiceIndex: 0,
        },
    }),
    typedQuestionData({
        id: "5a7f35abab32d6146d3de6d522d03654",
        type: "grammarTrivia",
        data: {
            prompt: "What tense is 'She is staying with her family this week'?",
            choices: [
                "Simple Present",
                "Present Continuous",
                "Present Perfect",
                "Future Continuous",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "41970ead62cc0dbb468202fefe464cd2",
        type: "grammarTrivia",
        data: {
            prompt: "In the future perfect continuous, the verb ends in:",
            choices: ["-ed", "-en", "-ing", "base form"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "f66005bb1cf1d9a46b0b44a6f9491f88",
        type: "grammarTrivia",
        data: {
            prompt: "What is the negative form of 'Luis is in the park'?",
            choices: [
                "Luis not is in the park",
                "Luis is not in the park",
                "Luis isn't in the park",
                "Both B and C are correct",
            ],
            correctChoiceIndex: 3,
        },
    }),
    typedQuestionData({
        id: "de52169358cd4b2bce36397c90692a2b",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense is used for actions that recently stopped but have visible results?",
            choices: [
                "Present Continuous",
                "Present Perfect Continuous",
                "Simple Past",
                "Past Perfect",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "0e744c42a87fcd91cd717d051a66fb06",
        type: "grammarTrivia",
        data: {
            prompt: "In 'I will be flying to New York', 'flying' is a:",
            choices: [
                "Past participle",
                "Present participle",
                "Gerund",
                "Infinitive",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "0a5e91511164c0b82710cffd027398bf",
        type: "grammarTrivia",
        data: {
            prompt: "What is the auxiliary for 'He' in the present perfect continuous?",
            choices: ["have", "has", "had", "is"],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "09f9584c7d9c1aeb8d1fa389f97cec60",
        type: "grammarTrivia",
        data: {
            prompt: "Complete the question: '___ they been traveling for months?' (Past Perfect Continuous)",
            choices: ["Have", "Has", "Had", "Were"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "0e74e8f78f542571ba65515b87eddfb7",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense is used for spontaneous decisions?",
            choices: [
                "Simple Future (will)",
                "Simple Future (going to)",
                "Simple Present",
                "Present Continuous",
            ],
            correctChoiceIndex: 0,
        },
    }),
    typedQuestionData({
        id: "d2e52cc8936f26723ba84e257931986a",
        type: "grammarTrivia",
        data: {
            prompt: "What is the question form of 'She walks to work'?",
            choices: [
                "Walks she to work?",
                "Does she walk to work?",
                "Does she walks to work?",
                "Is she walking to work?",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "78e416509367def31aa754d3465160ce",
        type: "grammarTrivia",
        data: {
            prompt: "How is the future perfect continuous question structured?",
            choices: [
                "Will + subject + have been + verb-ing?",
                "Subject + will + have been + verb-ing?",
                "Have + subject + been + verb-ing?",
                "Will + subject + been + verb-ing?",
            ],
            correctChoiceIndex: 0,
        },
    }),
    typedQuestionData({
        id: "1e2640c989d281590c6832652bfd30eb",
        type: "grammarTrivia",
        data: {
            prompt: "Which tense describes an action in progress interrupted by another action?",
            choices: [
                "Simple Past",
                "Past Continuous",
                "Past Perfect",
                "Present Continuous",
            ],
            correctChoiceIndex: 1,
        },
    }),
    typedQuestionData({
        id: "b966e5baa7994a730b4f5f7da4c08933",
        type: "grammarTrivia",
        data: {
            prompt: "What is the negative of 'I have been feeling tired'?",
            choices: [
                "I have not been feeling tired",
                "I haven't been feeling tired",
                "I have been not feeling tired",
                "Both A and B are correct",
            ],
            correctChoiceIndex: 3,
        },
    }),
    typedQuestionData({
        id: "a14894d5d91231094e3ae176d0300a0d",
        type: "grammarTrivia",
        data: {
            prompt: "Identify the tense: 'By 2030, they will have been living there for a decade.'",
            choices: [
                "Future Perfect",
                "Future Continuous",
                "Future Perfect Continuous",
                "Present Perfect Continuous",
            ],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "b67dfc6061a0eb133692f466757312c6",
        type: "grammarTrivia",
        data: {
            prompt: "What is the form of 'to be' used with 'Maria' in the present tense?",
            choices: ["am", "are", "is", "were"],
            correctChoiceIndex: 2,
        },
    }),
    typedQuestionData({
        id: "3502a75b164db7586bced46a01127dd0",
        type: "grammarTrivia",
        data: {
            prompt: "In 'She hadn't already eaten', what is the tense?",
            choices: [
                "Present Perfect",
                "Past Perfect",
                "Simple Past",
                "Past Continuous",
            ],
            correctChoiceIndex: 1,
        },
    }),
];

export default grammarTrivia;
