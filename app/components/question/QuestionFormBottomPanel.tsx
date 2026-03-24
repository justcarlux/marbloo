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
                whileHover={
                    !isClearButtonDisabled ? { scale: 1.02 } : undefined
                }
                whileTap={!isClearButtonDisabled ? { scale: 0.98 } : undefined}
                onClick={handleClear}
                disabled={isClearButtonDisabled}
                className={`py-4 px-6 text-lg font-bold rounded-2xl transition-all disabled:opacity-60 bg-secondary text-primary border-2 border-secondary ${!isClearButtonDisabled && "hover:-translate-y-0.5"}`}
            >
                Clear
            </motion.button>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                disabled={isSuccessButtonDisabled}
                className={`py-4 px-6 text-lg font-bold rounded-2xl uppercase tracking-wide transition-all disabled:opacity-60
                        ${
                            isQuestionAnsweredCorrectly
                                ? "bg-blue-500 text-white hover:-translate-y-0.5"
                                : "bg-green-500 text-white hover:-translate-y-0.5"
                        }`}
            >
                {isQuestionAnsweredCorrectly ? "Next" : "Check"}
            </motion.button>
        </div>
    );
}
