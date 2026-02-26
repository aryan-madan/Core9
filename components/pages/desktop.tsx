"use client";

import { Dock, DockIcon } from "@/components/gui/dock";
import { useWindowManager } from "@/components/system/window-manager";
import { WindowManager } from "@/components/system/window-manager";
import { apps } from "@/lib/app-types";

export function Desktop() {
  const { openApp } = useWindowManager();

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <WindowManager />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Dock>
          {apps.map((app) => {
            const Icon = app.icon;

            return (
              <DockIcon
                key={app.id}
                onClick={() => openApp(app)}
              >
                <Icon className="h-6 w-6 text-white" />
              </DockIcon>
            );
          })}
        </Dock>
      </div>
    </div>
  );
}