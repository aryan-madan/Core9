"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Welcome } from "@/components/pages/welcome";
import { Desktop } from "@/components/pages/desktop";

export function StageManager() {
    const [stage, setStage] = useState<"welcome" | "desktop">("welcome");

    return (
        <AnimatePresence mode="wait">
            {stage === "welcome" && (
                <motion.div
                    key="welcome"
                    className="fixed inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                >
                    <Welcome onFinish={() => setStage("desktop")} />
                </motion.div>
            )}

            {stage === "desktop" && (
                <motion.div
                    key="desktop"
                    className="fixed inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                >
                    <Desktop />
                </motion.div>
            )}
        </AnimatePresence>
    );
}