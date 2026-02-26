"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { AppType } from "@/lib/app-types";

export type WindowInstance = {
  id: string;
  app: AppType;
  x: number;
  y: number;
  width: number;
  height: number;
  z: number;
};

type WindowManagerContextType = {
  windows: WindowInstance[];
  openApp: (app: AppType) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
};

const WindowManagerContext =
  createContext<WindowManagerContextType | null>(null);

export function WindowManagerProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<WindowInstance[]>([]);
  const [zIndex, setZIndex] = useState(1);

  const openApp = (app: AppType) => {
    const existing = windows.find((w) => w.app.id === app.id);
    if (existing) {
      focusWindow(existing.id);
      return;
    }

    const width = 420;
    const height = 300;

    setZIndex((z) => z + 1);
    setWindows((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        app,
        x: window.innerWidth / 2 - width / 2,
        y: window.innerHeight / 2 - height / 2,
        width,
        height,
        z: zIndex,
      },
    ]);
  };

  const resizeWindow = (id: string, width: number, height: number) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, width, height } : w
      )
    );
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const focusWindow = (id: string) => {
    setZIndex((z) => z + 1);
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, z: zIndex } : w
      )
    );
  };

  return (
    <WindowManagerContext.Provider
      value={{ windows, openApp, closeWindow, focusWindow, resizeWindow }}
    >
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) throw new Error("WindowManagerProvider missing");
  return ctx;
}