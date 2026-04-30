"use client";

import React, { createContext, useCallback, useContext, useEffect, useRef } from "react";

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
    const successAudio = useRef<HTMLAudioElement | null>(null);
    const failureAudio = useRef<HTMLAudioElement | null>(null);
    const hintAudio = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        successAudio.current = new Audio("/sfx/success.mp3");
        failureAudio.current = new Audio("/sfx/failure.mp3");
        hintAudio.current = new Audio("/sfx/hint.mp3");
    }, []);

    const playSuccess = useCallback(() => {
        if (successAudio.current) {
            successAudio.current.currentTime = 0;
            successAudio.current.play().catch(console.error);
        }
    }, []);

    const playFailure = useCallback(() => {
        if (failureAudio.current) {
            failureAudio.current.currentTime = 0;
            failureAudio.current.play().catch(console.error);
        }
    }, []);

    const playHint = useCallback(() => {
        if (hintAudio.current) {
            hintAudio.current.currentTime = 0;
            hintAudio.current.play().catch(console.error);
        }
    }, []);

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
