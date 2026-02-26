"use client";

import { Dock, DockIcon } from "@/components/gui/dock";
import { useWindowManager } from "@/components/system/window-manager";
import { Window } from "@/components/gui/window";
import { apps } from "@/lib/app-types";

export function Desktop() {
  const { windows, openApp } = useWindowManager();

  return (
    <div className="fixed inset-0 bg-black">
      {windows.map((w) => (
        <Window key={w.id} window={w} />
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Dock>
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <DockIcon key={app.id} onClick={() => openApp(app)}>
                <Icon className="h-6 w-6 text-white" />
              </DockIcon>
            );
          })}
        </Dock>
      </div>
    </div>
  );
}