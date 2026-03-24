"use client";

import { TbBook } from "react-icons/tb";
import LessonList from "./LessonList";

export default function GrammarLessonList() {
    return (
        <LessonList
            categories={[
                {
                    title: "Lectures",
                    icon: TbBook,
                    entries: [
                        {
                            title: 'Verb "To Be"',
                            description:
                                "Build your foundation with the most essential verb.",
                            icon: TbBook,
                            href: "/learning/grammar/lectures/verb-to-be",
                        },
                        {
                            title: "Simple Tenses",
                            description: "Express actions and states.",
                            icon: TbBook,
                            href: "/learning/grammar/lectures/simple-tenses",
                        },
                        {
                            title: "Continuous Tenses",
                            description:
                                "Describe actions happening right now or over time.",
                            icon: TbBook,
                            href: "/learning/grammar/lectures/continuous-tenses",
                        },
                        {
                            title: "Perfect Tenses",
                            description: "Connect the past to the present.",
                            icon: TbBook,
                            href: "/learning/grammar/lectures/perfect-tenses",
                        },
                        {
                            title: "Perfect Continuous Tenses",
                            description:
                                "Focus on the duration of ongoing actions.",
                            icon: TbBook,
                            href: "/learning/grammar/lectures/perfect-continuous-tenses",
                        },
                    ],
                },
                {
                    title: "Practice - Complete the correct verb forms",
                    icon: TbBook,
                    entries: [
                        {
                            title: 'Verb "To Be"',
                            description:
                                "Build your foundation with the most essential verb.",
                            icon: TbBook,
                            href: "/learning/grammar/lectures/verb-to-be",
                        },
                        {
                            title: "Simple Tenses",
                            description: "Express actions and states.",
                            icon: TbBook,
                            href: "/learning/grammar/lectures/simple-tenses",
                        },
                        {
                            title: "Continuous Tenses",
                            description:
                                "Describe actions happening right now or over time.",
                            icon: TbBook,
                            href: "/learning/grammar/lectures/continuous-tenses",
                        },
                        {
                            title: "Perfect Tenses",
                            description: "Connect the past to the present.",
                            icon: TbBook,
                            href: "/learning/grammar/lectures/perfect-tenses",
                        },
                        {
                            title: "Perfect Continuous Tenses",
                            description:
                                "Focus on the duration of ongoing actions.",
                            icon: TbBook,
                            href: "/learning/grammar/lectures/perfect-continuous-tenses",
                        },
                    ],
                },
            ]}
        />
    );
}
