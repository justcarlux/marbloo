import { motion } from "framer-motion";

interface QuestionFormBottomPanelProps {
    isClearButtonDisabled: boolean;
    isSuccessButtonDisabled: boolean;
    isQuestionAnsweredCorrectly: boolean;
    handleSubmit: () => void;
    handleClear: () => void;
}

export default function QuestionFormBottomPanel({
    isClearButtonDisabled,
    isSuccessButtonDisabled,
    isQuestionAnsweredCorrectly,
    handleSubmit,
    handleClear,
}: QuestionFormBottomPanelProps) {
    return (
        <div className="grid grid-cols-2 gap-4 mt-8">
            <motion.button
                onClick={handleClear}
                disabled={isClearButtonDisabled}
                className={`py-3 sm:py-4 px-6 text-lg font-bold rounded-2xl
                    transition-all disabled:opacity-60 bg-secondary text-white
                    border-2 border-secondary ${!isClearButtonDisabled && "hover:scale-102 active:scale-98"}`}
            >
                Clear
            </motion.button>

            <motion.button
                onClick={handleSubmit}
                disabled={isSuccessButtonDisabled}
                className={`py-3 sm:py-4 px-6 text-lg font-bold rounded-2xl
                    tracking-wide transition-all disabled:opacity-60
                        ${
                            isQuestionAnsweredCorrectly
                                ? "bg-blue-500 text-white"
                                : "bg-green-500 text-white"
                        } ${!isSuccessButtonDisabled && "hover:scale-102 active:scale-98"}`}
            >
                {isQuestionAnsweredCorrectly ? "Next" : "Check"}
            </motion.button>
        </div>
    );
}
