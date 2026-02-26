"use client";

import { useState } from "react";

const buttons = [
  ["C", "+/-", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

export function CalculatorApp() {
  const [display, setDisplay] = useState("0");

  const handle = (val: string) => {
    if (val === "C") return setDisplay("0");
    if (val === "=") {
      try {
        setDisplay(
          String(
            eval(
              display
                .replace("×", "*")
                .replace("÷", "/")
            )
          )
        );
      } catch {
        setDisplay("Error");
      }
      return;
    }

    setDisplay((d) =>
      d === "0" ? val : d + val
    );
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="text-right text-4xl font-light px-2 py-4">
        {display}
      </div>

      <div className="grid grid-cols-4 gap-2">
        {buttons.flat().map((b) => (
          <button
            key={b}
            onClick={() => handle(b)}
            className={`h-14 rounded-full text-lg ${
              ["+", "-", "×", "÷", "="].includes(b)
                ? "bg-orange-500"
                : "bg-zinc-700"
            }`}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}