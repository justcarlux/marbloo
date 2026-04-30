import { QuestionSetCategory } from "@/generated/prisma/enums";

export const tabs: {
    [key in QuestionSetCategory]: { label: string };
} = {
    grammar: { label: "Grammar Lessons" },
    phonetics: { label: "Phonetics Lessons" },
};
