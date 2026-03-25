"use client";

import { TbBook } from "react-icons/tb";
import LessonList from "./LessonList";

export default function GrammarLessonList() {
    return (
        <LessonList
            category="grammar"
            categories={[
                {
                    title: "Lectures",
                    icon: TbBook,
                    cardHeight: 66,
                    entries: [
                        {
                            id: "lecture-verb-to-be",
                            title: 'Verb "To Be"',
                            description:
                                "Build your foundation with the most essential verb.",
                            icon: TbBook,
                            action: {
                                type: "href",
                                href: "/learning/grammar/lectures/verb-to-be",
                            },
                        },
                        {
                            id: "lecture-simple-tenses",
                            title: "Simple Tenses",
                            description: "Express actions and states.",
                            icon: TbBook,
                            action: {
                                type: "href",
                                href: "/learning/grammar/lectures/simple-tenses",
                            },
                        },
                        {
                            id: "lecture-simple-tenses",
                            title: "Continuous Tenses",
                            description:
                                "Describe actions happening right now or over time.",
                            icon: TbBook,
                            action: {
                                type: "href",
                                href: "/learning/grammar/lectures/continuous-tenses",
                            },
                        },
                        {
                            id: "lecture-simple-tenses",
                            title: "Perfect Tenses",
                            description: "Connect the past to the present.",
                            icon: TbBook,
                            action: {
                                type: "href",
                                href: "/learning/grammar/lectures/perfect-tenses",
                            },
                        },
                        {
                            id: "lecture-simple-tenses",
                            title: "Perfect Continuous Tenses",
                            description:
                                "Focus on the duration of ongoing actions.",
                            icon: TbBook,
                            action: {
                                type: "href",
                                href: "/learning/grammar/lectures/perfect-continuous-tenses",
                            },
                        },
                    ],
                },
                {
                    title: "Practice - Complete the correct verb forms",
                    icon: TbBook,
                    cardHeight: 70,
                    entries: [
                        {
                            id: "practice-complete-verb-form-simple-tenses",
                            title: "Simple Tenses",
                            description:
                                "Complete the missing verb form in simple tense sentences!",
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completePresentSimplePositiveStatementVerbForm",
                                    "completePresentSimpleNegativeStatementVerbForm",
                                    "completePastSimplePositiveStatementVerbForm",
                                    "completePastSimpleNegativeStatementVerbForm",
                                    "completeFutureSimplePositiveStatementVerbForm",
                                    "completeFutureSimpleNegativeStatementVerbForm",
                                ],
                                limit: 20,
                            },
                        },
                        {
                            id: "practice-complete-verb-form-continuous-tenses",
                            title: "Continuous Tenses",
                            description:
                                "Complete the missing verb form in continuous tense sentences!",
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completePresentContinuousPositiveStatementVerbForm",
                                    "completePresentContinuousNegativeStatementVerbForm",
                                    "completePastContinuousPositiveStatementVerbForm",
                                    "completePastContinuousNegativeStatementVerbForm",
                                    "completeFutureContinuousPositiveStatementVerbForm",
                                    "completeFutureContinuousNegativeStatementVerbForm",
                                ],
                                limit: 20,
                            },
                        },
                        {
                            id: "practice-complete-verb-form-perfect-tenses",
                            title: "Perfect Tenses",
                            description:
                                "Complete the missing verb form in perfect tense sentences!",
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completePresentPerfectPositiveStatementVerbForm",
                                    "completePresentPerfectNegativeStatementVerbForm",
                                    "completePastPerfectPositiveStatementVerbForm",
                                    "completePastPerfectNegativeStatementVerbForm",
                                    "completeFuturePerfectPositiveStatementVerbForm",
                                    "completeFuturePerfectNegativeStatementVerbForm",
                                ],
                                limit: 20,
                            },
                        },
                        {
                            id: "practice-complete-verb-form-perfect-continuous-tenses",
                            title: "Perfect Continuous Tenses",
                            description:
                                "Complete the missing verb form in perfect continuous tense sentences!",
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completePresentPerfectContinuousPositiveStatementVerbForm",
                                    "completePresentPerfectContinuousNegativeStatementVerbForm",
                                    "completePastPerfectContinuousPositiveStatementVerbForm",
                                    "completePastPerfectContinuousNegativeStatementVerbForm",
                                    "completeFuturePerfectContinuousPositiveStatementVerbForm",
                                    "completeFuturePerfectContinuousNegativeStatementVerbForm",
                                ],
                                limit: 20,
                            },
                        },
                    ],
                },
            ]}
        />
    );
}
