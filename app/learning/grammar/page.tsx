import GrammarLessonList from "@/app/components/lesson/list/GrammarLessonList";

export const metadata = {
    title: "Grammar Learning | Marbloo",
    description: "Learn and practice your grammar skills.",
};

export default async function GrammarLearningPage() {
    return <GrammarLessonList />;
}
