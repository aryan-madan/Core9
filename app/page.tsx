"use client";

import { WindowManagerProvider } from "@/components/system/window-manager";
import { StageManager } from "@/components/system/stage-manager";

export default function Page() {
  return (
    <WindowManagerProvider>
      <StageManager />
    </WindowManagerProvider>
  );
}