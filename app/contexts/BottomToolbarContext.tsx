"use client";

import React, { createContext, useContext, useState } from "react";

interface BottomToolbarContextType {
    shouldBackButtonAppear: boolean;
    setShouldBackButtonAppear: (value: boolean) => void;
    shouldClearQuestionSetOnExit: boolean;
    setShouldClearQuestionSetOnExit: (value: boolean) => void;
    allowsScrollingToTop: boolean;
    setAllowsScrollingToTop: (value: boolean) => void;
}

const BottomToolbarContext = createContext<BottomToolbarContextType | null>(
    null,
);

export function BottomToolbarContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [shouldBackButtonAppear, setShouldBackButtonAppear] = useState(false);
    const [shouldClearQuestionSetOnExit, setShouldClearQuestionSetOnExit] =
        useState(false);
    const [allowsScrollingToTop, setAllowsScrollingToTop] = useState(false);

    return (
        <BottomToolbarContext.Provider
            value={{
                shouldBackButtonAppear,
                setShouldBackButtonAppear,
                shouldClearQuestionSetOnExit,
                setShouldClearQuestionSetOnExit,
                allowsScrollingToTop,
                setAllowsScrollingToTop,
            }}
        >
            {children}
        </BottomToolbarContext.Provider>
    );
}

export const useBottomToolbar = () => {
    const context = useContext(BottomToolbarContext);
    if (!context) {
        throw new Error(
            "useBottomToolbar must be used within a BottomToolbarContext",
        );
    }
    return context;
};
