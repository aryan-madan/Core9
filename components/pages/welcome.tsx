"use client"

import React, { useEffect, useState } from "react";
import { Panel } from "@/components/gui/panel";
import useMeasure from "react-use-measure";

function Button({
    onClick,
    children,
}: {
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="relative flex h-8 shrink-0 select-none items-center justify-center rounded-lg border border-zinc-950/10 bg-transparent px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
        >
            {children}
        </button>
    );
}

export function Welcome({ onFinish }: { onFinish: () => void }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [ref, bounds] = useMeasure();

    const FEATURES = [
        {
            title: "Core",
            description:
                "A beautiful, and minimalistic desktop environemnt based on the web."
        },
        {
            title: "Why?",
            description:
                "Because Hackclub wanted me to make a Web-OS."
        },
        {
            title: "Name",
            description:
                "Core9 is inspired by the phrase \"c9\ which is popular in the gaming community and refers to when a team abandons the objective, truly a way of showing that I've lost the plot."
        },
    ];

    const handleSetActiveIndex = (newIndex: number) => {
        setDirection(newIndex > activeIndex ? 1 : -1);
        setActiveIndex(newIndex);
    };

    useEffect(() => {
        if (activeIndex < 0) setActiveIndex(0);
        if (activeIndex >= FEATURES.length)
            setActiveIndex(FEATURES.length - 1);
    }, [activeIndex]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900">
            <div className="w-[364px] overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:bg-zinc-700">
                <Panel
                    activeIndex={activeIndex}
                    variants={{
                        enter: (direction) => ({
                            x: direction > 0 ? 364 : -364,
                            opacity: 0,
                            height: bounds.height > 0 ? bounds.height : "auto",
                            position: "initial",
                        }),
                        center: {
                            zIndex: 1,
                            x: 0,
                            opacity: 1,
                            height: bounds.height > 0 ? bounds.height : "auto",
                        },
                        exit: (direction) => ({
                            zIndex: 0,
                            x: direction < 0 ? 364 : -364,
                            opacity: 0,
                            position: "absolute",
                            top: 0,
                            width: "100%",
                        }),
                    }}
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    custom={direction}
                >
                    {FEATURES.map((feature, index) => (
                        <div key={index} className="px-4 pt-4" ref={ref}>
                            <h3 className="mb-0.5 font-medium text-zinc-800 dark:text-zinc-100">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </Panel>

                <div className="flex justify-between p-4">
                    {activeIndex > 0 ? (
                        <Button onClick={() => handleSetActiveIndex(activeIndex - 1)}>
                            Previous
                        </Button>
                    ) : (
                        <div />
                    )}
                    <Button
                        onClick={() =>
                            activeIndex === FEATURES.length - 1
                                ? onFinish()
                                : handleSetActiveIndex(activeIndex + 1)
                        }
                    >
                        {activeIndex === FEATURES.length - 1 ? "Enter" : "Next"}
                    </Button>
                </div>
            </div>
        </div>
    );
}   