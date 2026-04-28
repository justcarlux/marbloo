"use client";

import {
    TbAtom,
    TbBolt,
    TbBook,
    TbBooks,
    TbBrain,
    TbChecklist,
    TbCircleCheck,
    TbClock,
    TbHistory,
    TbInfinity,
    TbLoader,
    TbPencil,
    TbRefresh,
    TbRocket,
    TbRotate,
    TbSun,
} from "react-icons/tb";
import LessonList from "./LessonList";

export default function GrammarLessonList() {
    return (
        <LessonList
            category="grammar"
            categories={[
                {
                    title: "Lectures:",
                    description: "Read and learn!",
                    icon: TbBooks,
                    entries: [
                        {
                            title: 'Verb "To Be"',
                            description:
                                "Build your foundation with the most essential verb.",
                            icon: TbAtom,
                            action: {
                                type: "href",
                                href: "/learning/lectures/verb-to-be",
                            },
                        },
                        {
                            title: "Simple Tenses",
                            description: "Express actions and states.",
                            icon: TbClock,
                            action: {
                                type: "href",
                                href: "/learning/lectures/simple-tenses",
                            },
                        },
                        {
                            title: "Continuous Tenses",
                            description:
                                "Describe actions happening right now or over time.",
                            icon: TbRotate,
                            action: {
                                type: "href",
                                href: "/learning/lectures/continuous-tenses",
                            },
                        },
                        {
                            title: "Perfect Tenses",
                            description: "Connect the past to the present.",
                            icon: TbChecklist,
                            action: {
                                type: "href",
                                href: "/learning/lectures/perfect-tenses",
                            },
                        },
                        {
                            title: "Perfect Continuous Tenses",
                            description:
                                "Focus on the duration of ongoing actions.",
                            icon: TbInfinity,
                            action: {
                                type: "href",
                                href: "/learning/lectures/perfect-continuous-tenses",
                            },
                        },
                        {
                            title: "Trivia",
                            description: "Practice your theory knowledge!",
                            icon: TbBrain,
                            action: {
                                type: "create-question-set",
                                questionTypes: ["grammarTrivia"],
                                amount: 10,
                            },
                        },
                    ],
                },
                {
                    title: '"To Be" Verb Practice:',
                    description: "Complete statements and make questions!",
                    icon: TbPencil,
                    entries: [
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Present Tense</div>
                                </div>
                            ),
                            description:
                                'Complete positive and negative "to be" verb forms in present tense sentences!',
                            icon: TbSun,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completePresentToBePositiveStatementVerbForm",
                                    "completePresentToBeNegativeStatementVerbForm",
                                ],
                            },
                        },
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Past Tense</div>
                                </div>
                            ),
                            description:
                                'Complete positive and negative "to be" verb forms in past tense sentences!',
                            icon: TbHistory,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completePastToBePositiveStatementVerbForm",
                                    "completePastToBeNegativeStatementVerbForm",
                                ],
                            },
                        },
                        {
                            title: (
                                <div>
                                    <div>Complete:</div>
                                    <div>Future Tense</div>
                                </div>
                            ),
                            description:
                                'Complete positive and negative "to be" verb forms in future tense sentences!',
                            icon: TbRocket,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "completeFutureToBePositiveStatementVerbForm",
                                    "completeFutureToBeNegativeStatementVerbForm",
                                ],
                            },
                        },
                        {
                            title: (
                                <div>
                                    <div>Turn into Questions:</div>
                                    <div>Present Tense</div>
                                </div>
                            ),
                            description:
                                'Create positive and negative questions from "to be" sentences in simple tense!',
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [
                                    "turnPositivePresentToBeStatementIntoQuestion",
                                    "turnNegativePresentToBeStatementIntoQuestion",
                                ],
                            },
                        },
                        {
                            title: (
                                <div>
                                    <div>Turn into Questions:</div>
                                    <div>Past Tense</div>
                                </div>
                            ),
                            description:
                                'Create positive and negative questions from "to be" sentences in past tense!',
                            icon: TbBook,
                            action: {
                                type: "create-question-set",
                                questionTypes: [],
                            },
                        },
                        {
                            title: (
                                <div>
                                    <div>Turn into Questions:</div>
                                    <div>Future Tense</div>
                                </div>
                            ),
                            description:
                                'Create positive and negative questions from "to be" sentences in future tense!',
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
                    icon: TbBolt,
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
                            icon: TbSun,
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
                            icon: TbHistory,
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
                            icon: TbRocket,
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
                    icon: TbRefresh,
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
                            icon: TbSun,
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
                            icon: TbHistory,
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
                            icon: TbRocket,
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
                    icon: TbCircleCheck,
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
                            icon: TbSun,
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
                            icon: TbHistory,
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
                            icon: TbRocket,
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
                    icon: TbLoader,
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
                            icon: TbSun,
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
                            icon: TbHistory,
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
                            icon: TbRocket,
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
