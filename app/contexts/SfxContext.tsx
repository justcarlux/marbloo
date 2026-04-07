"use client";

import React, { createContext, useContext } from "react";
import useSound from "use-sound";

interface SfxContextType {
    playSuccess: () => void;
    playFailure: () => void;
    playHint: () => void;
}

const SfxContext = createContext<SfxContextType | null>(null);

export function SfxContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [playSuccess] = useSound("/sfx/success.mp3");
    const [playFailure] = useSound("/sfx/failure.mp3");
    const [playHint] = useSound("/sfx/hint.mp3");

    return (
        <SfxContext.Provider
            value={{
                playSuccess,
                playFailure,
                playHint,
            }}
        >
            {children}
        </SfxContext.Provider>
    );
}

export const useSfx = () => {
    const context = useContext(SfxContext);
    if (!context) {
        throw new Error("useSfx must be used within a SfxContext");
    }
    return context;
};
