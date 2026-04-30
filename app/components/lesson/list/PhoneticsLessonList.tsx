"use client";

import {
    TbAlphabetGreek,
    TbAlphabetLatin,
    TbBooks,
    TbBrain,
    TbEar,
    TbPlaceholder,
} from "react-icons/tb";
import LessonList from "./LessonList";

export default function PhoneticsLessonList() {
    return (
        <LessonList
            category="phonetics"
            categories={[
                {
                    title: "Lectures",
                    description: "Read and learn!",
                    icon: TbBooks,
                    entries: [
                        {
                            title: ["Phonetics and Phonology"],
                            description:
                                "Explore how human speech sounds are produced and shaped.",
                            icon: TbEar,
                            action: {
                                type: "href",
                                href: "/learning/lectures/phonetics-and-phonology",
                            },
                        },
                        {
                            title: [
                                "The International Phonetic Alphabet (IPA)",
                            ],
                            description:
                                "Learn about the International Phonetic Alphabet (IPA).",
                            icon: TbAlphabetLatin,
                            action: {
                                type: "href",
                                href: "/learning/lectures/ipa",
                            },
                        },
                        {
                            title: ["Common IPA Symbols"],
                            description:
                                "Learn about the most common symbols and patterns found in IPA.",
                            icon: TbAlphabetGreek,
                            action: {
                                type: "href",
                                href: "/learning/lectures/common-ipa-symbols",
                            },
                        },
                        {
                            title: ["Trivia"],
                            description: "Practice your theory knowledge!",
                            icon: TbBrain,
                            action: {
                                type: "create-question-set",
                                questionTypes: ["phoneticsTrivia"],
                                amount: 10,
                            },
                        },
                    ],
                },
                {
                    title: "Listening Practice",
                    description:
                        "Identify the IPA symbol with the given sound!",
                    icon: TbPlaceholder,
                    entries: [
                        {
                            title: ["Identify:", "Easy"],
                            description: "Only includes vowels!",
                            icon: TbPlaceholder,
                            action: {
                                type: "create-question-set",
                                questionTypes: ["identifyIPASymbolBySoundEasy"],
                            },
                        },
                        {
                            title: ["Identify:", "Medium"],
                            description: "Includes vowels and dipthongs!",
                            icon: TbPlaceholder,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "identifyIPASymbolBySoundMedium",
                                ],
                            },
                        },
                        {
                            title: ["Identify:", "Hard"],
                            description:
                                "Includes vowels, dipthongs, plosives and fricatives!",
                            icon: TbPlaceholder,
                            action: {
                                type: "create-question-set",
                                questionTypes: ["identifyIPASymbolBySoundHard"],
                            },
                        },
                        {
                            title: ["Identify:", "Harder"],
                            description:
                                "Includes vowels, dipthongs, plosives, fricatives, nasals, and approximants!",
                            icon: TbPlaceholder,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "identifyIPASymbolBySoundHarder",
                                ],
                            },
                        },
                    ],
                },
            ]}
        />
    );
}
