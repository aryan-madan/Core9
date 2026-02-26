"use client";

import { useEffect, useState } from "react";

export function ClockApp() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="h-full flex flex-col items-center justify-center gap-2">
      <div className="text-5xl font-light tracking-tight">
        {time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
        <span className="text-xl text-zinc-400 ml-2">
          {time.getSeconds().toString().padStart(2, "0")}
        </span>
      </div>

      <div className="text-sm text-zinc-400">
        {time.toLocaleDateString(undefined, {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  );
}