"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import {
  WindowInstance,
  useWindowManager,
} from "@/components/system/window-manager";

export function Window({ window: win }: { window: WindowInstance }) {
  const { closeWindow, focusWindow, resizeWindow } = useWindowManager();
  const [isResizing, setIsResizing] = useState(false);

  const App = win.app.component;
  const Icon = win.app.icon;

  return (
    <motion.div
      drag={!isResizing}
      dragMomentum={false}
      onMouseDown={() => focusWindow(win.id)}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.12 }}
      className="absolute rounded-xl bg-zinc-900 shadow-2xl flex flex-col select-none"
      style={{
        width: win.width,
        height: win.height,
        minWidth: 360,
        minHeight: 240,
        left: win.x,
        top: win.y,
        zIndex: win.z,
      }}
    >
      <div className="flex items-center justify-between h-10 px-3 rounded-t-xl bg-zinc-800 shrink-0 cursor-default">
        <div className="flex items-center gap-2 text-sm text-white">
          <Icon className="h-4 w-4" />
          {win.app.title}
        </div>

        <button
          onClick={() => closeWindow(win.id)}
          className="text-zinc-400 hover:text-white"
        >
          <FiX size={16} />
        </button>
      </div>

      <div className="flex-1 p-4 overflow-hidden bg-zinc-900 rounded-b-xl">
        <App />
      </div>

      <div
        className="absolute bottom-1 right-1 h-4 w-4 cursor-se-resize"
        onMouseDown={(e) => {
          e.stopPropagation();
          setIsResizing(true);

          const startX = e.clientX;
          const startY = e.clientY;
          const startW = win.width;
          const startH = win.height;

          const onMove = (ev: MouseEvent) => {
            resizeWindow(
              win.id,
              Math.max(360, startW + ev.clientX - startX),
              Math.max(240, startH + ev.clientY - startY)
            );
          };

          const onUp = () => {
            setIsResizing(false);
            globalThis.window.removeEventListener("mousemove", onMove);
            globalThis.window.removeEventListener("mouseup", onUp);
          };

          globalThis.window.addEventListener("mousemove", onMove);
          globalThis.window.addEventListener("mouseup", onUp);
        }}
      />
    </motion.div>
  );
}