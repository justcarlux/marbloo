"use client";

import { Route } from "next";
import React, { createContext, useContext, useState } from "react";

interface BottomToolbarContextType {
    backPath: Route | null;
    setBackPath: (value: Route | null) => void;
    shouldClearQuestionSetOnExit: boolean;
    setShouldClearQuestionSetOnExit: (value: boolean) => void;
    allowsScrollingToTop: boolean;
    setAllowsScrollingToTop: (value: boolean) => void;
}

const BottomToolbarContext = createContext<BottomToolbarContextType | null>(
    null,
);

export const BottomToolbarContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [backPath, setBackPath] = useState<Route | null>(null);
    const [shouldClearQuestionSetOnExit, setShouldClearQuestionSetOnExit] =
        useState(false);
    const [allowsScrollingToTop, setAllowsScrollingToTop] = useState(false);

    return (
        <BottomToolbarContext.Provider
            value={{
                backPath,
                setBackPath,
                shouldClearQuestionSetOnExit,
                setShouldClearQuestionSetOnExit,
                allowsScrollingToTop,
                setAllowsScrollingToTop,
            }}
        >
            {children}
        </BottomToolbarContext.Provider>
    );
};

export const useBottomToolbar = () => {
    const context = useContext(BottomToolbarContext);
    if (!context) {
        throw new Error(
            "useBottomToolbar must be used within a BottomToolbarContext",
        );
    }
    return context;
};
