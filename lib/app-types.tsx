"use client";

import React from "react";
import { FiInfo } from "react-icons/fi";
import { AboutApp } from "@/components/apps/about";

export type AppType = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  component: React.ReactNode;
};

export const apps: AppType[] = [
  {
    id: "about",
    title: "About Core 9",
    icon: FiInfo,
    component: <AboutApp />,
  },
];