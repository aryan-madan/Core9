"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { AnimatePresence } from "framer-motion";
import { AppType } from "@/lib/app-types";
import { Window } from "@/components/gui/window";

type WindowInstance = {
  id: string;
  app: AppType;
};

type WindowManagerContextType = {
  windows: WindowInstance[];
  openApp: (app: AppType) => void;
  closeApp: (id: string) => void;
};

const WindowManagerContext =
  createContext<WindowManagerContextType | null>(null);

export function WindowManagerProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [windows, setWindows] = useState<WindowInstance[]>([]);

  const openApp = (app: AppType) => {
    setWindows((prev) => [
      ...prev,
      { id: crypto.randomUUID(), app },
    ]);
  };

  const closeApp = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <WindowManagerContext.Provider
      value={{ windows, openApp, closeApp }}
    >
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) {
    throw new Error(
      "useWindowManager must be used inside WindowManagerProvider"
    );
  }
  return ctx;
}

export function WindowManager() {
  const { windows, closeApp } = useWindowManager();

  return (
    <AnimatePresence>
      {windows.map(({ id, app }) => (
        <Window
          key={id}
          id={id}
          title={app.title}
          icon={app.icon}
          onClose={() => closeApp(id)}
        >
          {app.component}
        </Window>
      ))}
    </AnimatePresence>
  );
}