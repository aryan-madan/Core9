"use client";

import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

type WindowProps = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  onClose: () => void;
  children: React.ReactNode;
};

export function Window({
  title,
  icon: Icon,
  onClose,
  children,
}: WindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute left-1/2 top-1/2 w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-zinc-800 shadow-xl"
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-700">
        <div className="flex items-center gap-2 text-sm text-white">
          <Icon className="h-4 w-4" />
          <span>{title}</span>
        </div>

        <button
          onClick={onClose}
          className="text-zinc-400 hover:text-white"
        >
          <FiX />
        </button>
      </div>

      <div className="p-4 text-white">
        {children}
      </div>
    </motion.div>
  );
}