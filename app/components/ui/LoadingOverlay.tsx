import useBodyScroll from "@/app/hooks/useBodyScroll";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { OrbitProgress } from "react-loading-indicators";

interface LoadingOverlayProps {
    show: boolean;
}

export default function LoadingOverlay({ show }: LoadingOverlayProps) {
    const { enableScroll, disableScroll } = useBodyScroll();
    useEffect(() => {
        if (show) {
            disableScroll();
        } else {
            enableScroll();
        }
        return () => {
            enableScroll();
        };
    }, [show, enableScroll, disableScroll]);
    return (
        <AnimatePresence mode="wait">
            {show && (
                <motion.div
                    className="fixed w-full h-full bg-surface z-10 flex flex-col gap-3 items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <OrbitProgress dense size="medium" color="#32b5c7" />
                    <p className="text-xl sm:text-2xl font-medium text-primary">
                        Loading...
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
