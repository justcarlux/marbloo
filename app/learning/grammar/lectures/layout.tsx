import LectureView from "@/app/components/lesson/LectureView";

export default function GrammarLectureLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <LectureView>{children}</LectureView>;
}
