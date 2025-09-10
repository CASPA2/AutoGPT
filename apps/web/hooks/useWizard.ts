"use client";

import { useState } from "react";

export function useWizard(total: number) {
  const [step, setStep] = useState(1);
  const next = () => setStep((s) => Math.min(total, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));
  const goTo = (s: number) => setStep(Math.min(total, Math.max(1, s)));
  return { step, next, prev, goTo };
}
