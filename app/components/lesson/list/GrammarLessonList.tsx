"use client";

import { TbBook } from "react-icons/tb";
import LessonList from "./LessonList";

export default function GrammarLessonList() {
    return (
        <LessonList
            category="grammar"
            categories={[
                {
                    title: "Lectures:",
                    description: "Read and learn!",
                    icon: TbBook,
                    entries: [
                        {
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
                            title: "Simple Tenses",
                            description: "Express actions and states.",
                            icon: TbBook,
                            action: {
                                type: "href",
                                href: "/learning/grammar/lectures/simple-tenses",
                            },
                        },
                        {
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
                            title: "Perfect Tenses",
                            description: "Connect the past to the present.",
                            icon: TbBook,
                            action: {
                                type: "href",
                                href: "/learning/grammar/lectures/perfect-tenses",
                            },
                        },
                        {
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
                    title: '"To Be" Verb Practice:',
                    description: "Complete statements and make questions!",
                    icon: TbBook,
                    entries: [
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Present Tense "To Be"</div>
                                </div>
                            ),
                            description:
                                'Complete positive and negative "to be" verb forms in present tense sentences!',
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completePresentToBePositiveStatement",
                                    "completePresentToBeNegativeStatement",
                                ],
                            },
                        },
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Past Tense "To Be"</div>
                                </div>
                            ),
                            description:
                                'Complete positive and negative "to be" verb forms in past tense sentences!',
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [],
                            },
                        },
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Future Tense "To Be"</div>
                                </div>
                            ),
                            description:
                                'Complete positive and negative "to be" verb forms in future tense sentences!',
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [],
                            },
                        },
                    ],
                },
                {
                    title: "Simple Tenses Practice:",
                    description: "Complete statements and make questions!",
                    icon: TbBook,
                    entries: [
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Simple Present</div>
                                </div>
                            ),
                            description:
                                "Complete positive and negative verb forms in simple present sentences!",
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completePresentSimplePositiveStatementVerbForm",
                                    "completePresentSimpleNegativeStatementVerbForm",
                                ],
                            },
                        },
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Simple Past</div>
                                </div>
                            ),
                            description:
                                "Complete positive and negative verb forms in simple past sentences!",
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completePastSimplePositiveStatementVerbForm",
                                    "completePastSimpleNegativeStatementVerbForm",
                                ],
                            },
                        },
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Simple Future</div>
                                </div>
                            ),
                            description:
                                "Complete positive and negative verb forms in simple future sentences!",
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completeFutureSimplePositiveStatementVerbForm",
                                    "completeFutureSimpleNegativeStatementVerbForm",
                                ],
                            },
                        },
                    ],
                },
                {
                    title: "Continuous Tenses Practice:",
                    description: "Complete statements and make questions!",
                    icon: TbBook,
                    entries: [
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Present Continuous</div>
                                </div>
                            ),
                            description:
                                "Complete positive and negative verb forms in present continuous sentences!",
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completePresentContinuousPositiveStatementVerbForm",
                                    "completePresentContinuousNegativeStatementVerbForm",
                                ],
                            },
                        },
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Past Continuous</div>
                                </div>
                            ),
                            description:
                                "Complete positive and negative verb forms in past continuous sentences!",
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completePastContinuousPositiveStatementVerbForm",
                                    "completePastContinuousNegativeStatementVerbForm",
                                ],
                            },
                        },
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Future Continuous</div>
                                </div>
                            ),
                            description:
                                "Complete positive and negative verb forms in future continuous sentences!",
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completeFutureContinuousPositiveStatementVerbForm",
                                    "completeFutureContinuousNegativeStatementVerbForm",
                                ],
                            },
                        },
                    ],
                },
                {
                    title: "Perfect Tenses Practice:",
                    description: "Complete statements and make questions!",
                    icon: TbBook,
                    entries: [
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Present Perfect</div>
                                </div>
                            ),
                            description:
                                "Complete positive and negative verb forms in present perfect sentences!",
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completePresentPerfectPositiveStatementVerbForm",
                                    "completePresentPerfectNegativeStatementVerbForm",
                                ],
                            },
                        },
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Past Perfect</div>
                                </div>
                            ),
                            description:
                                "Complete positive and negative verb forms in past perfect sentences!",
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completePastPerfectPositiveStatementVerbForm",
                                    "completePastPerfectNegativeStatementVerbForm",
                                ],
                            },
                        },
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Future Perfect</div>
                                </div>
                            ),
                            description:
                                "Complete positive and negative verb forms in future perfect sentences!",
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completeFuturePerfectPositiveStatementVerbForm",
                                    "completeFuturePerfectNegativeStatementVerbForm",
                                ],
                            },
                        },
                    ],
                },
                {
                    title: "Perfect Continuous Tenses Practice:",
                    description: "Complete statements and make questions!",
                    icon: TbBook,
                    entries: [
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Present Perfect Continuous</div>
                                </div>
                            ),
                            description:
                                "Complete positive and negative verb forms in present perfect continuous sentences!",
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completePresentPerfectContinuousPositiveStatementVerbForm",
                                    "completePresentPerfectContinuousNegativeStatementVerbForm",
                                ],
                            },
                        },
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Past Perfect Continuous</div>
                                </div>
                            ),
                            description:
                                "Complete positive and negative verb forms in past perfect continuous sentences!",
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completePastPerfectContinuousPositiveStatementVerbForm",
                                    "completePastPerfectContinuousNegativeStatementVerbForm",
                                ],
                            },
                        },
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Future Perfect Continuous</div>
                                </div>
                            ),
                            description:
                                "Complete positive and negative verb forms in future perfect continuous sentences!",
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completeFuturePerfectContinuousPositiveStatementVerbForm",
                                    "completeFuturePerfectContinuousNegativeStatementVerbForm",
                                ],
                            },
                        },
                    ],
                },
            ]}
        />
    );
}
