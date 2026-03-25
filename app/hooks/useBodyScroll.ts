import { useCallback } from "react";

export default function useBodyScroll() {
    const enableScroll = useCallback(() => {
        document.body.style.overflowY = "auto";
    }, []);
    const disableScroll = useCallback(() => {
        document.body.style.overflowY = "hidden";
    }, []);
    const resetScroll = useCallback(() => {
        window.scrollTo(0, 0);
    }, []);

    return { disableScroll, enableScroll, resetScroll };
}
