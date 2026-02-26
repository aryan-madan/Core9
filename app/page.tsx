"use client";

import { useState } from "react";
import { Desktop } from "@/components/pages/desktop";
import { Welcome } from "@/components/pages/welcome";

export default function Home() {
  const [onboarded, setOnboarded] = useState(false);

  return (
    <div className="fixed inset-0">
      {!onboarded ? (
        <Welcome onFinish={() => setOnboarded(true)} />
      ) : (
        <Desktop />
      )}
    </div>
  );
}

