import { FiInfo } from "react-icons/fi";
import { FaCalculator, FaClock, FaStickyNote } from "react-icons/fa";
import { AboutApp } from "@/components/apps/about";
import { CalculatorApp } from "@/components/apps/calculator";
import { ClockApp } from "@/components/apps/clock";
import { NotepadApp } from "@/components/apps/notepad"

export const apps = [
  {
    id: "about",
    title: "About Core 9",
    icon: FiInfo,
    component: AboutApp,
  },
  {
    id: "calculator",
    title: "Calculator",
    icon: FaCalculator,
    component: CalculatorApp,
  },
  {
    id: "clock",
    title: "Clock",
    icon: FaClock,
    component: ClockApp,
  },
    {
    id: "notepad",
    title: "Notes",
    icon: FaStickyNote,
    component: NotepadApp,
  },
];