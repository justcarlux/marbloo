import QuestionSet from "./components/question/QuestionSet";
import questions from "./questions";

export default function HomePage() {
    return <QuestionSet questions={questions} />;
}
