import LearningTabController from "@/app/components/lesson/LearningTabController";
import { QuestionSetCategory } from "@/generated/prisma/enums";
import GenericSearchParams from "../types/GenericSearchParams";
import { tabs } from "./shared-constants";

export async function generateMetadata({
    searchParams,
}: {
    searchParams: GenericSearchParams;
}) {
    const { tab } = await searchParams;
    const activeTab = (tab as QuestionSetCategory) || "grammar";
    const activeLabel = tabs[activeTab]?.label || "Learning";

    return {
        title: `${activeLabel} | Marbloo`,
    };
}

export default async function LearningPage({
    searchParams,
}: {
    searchParams: GenericSearchParams;
}) {
    const { tab } = await searchParams;
    const activeTab = (tab as QuestionSetCategory) || "grammar";

    return <LearningTabController initialTab={activeTab} />;
}
