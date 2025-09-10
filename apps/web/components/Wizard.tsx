"use client";

import { ReactNode } from "react";
import { useWizard } from "../hooks/useWizard";

export function Wizard({ steps }: { steps: ReactNode[] }) {
  const { step, next, prev } = useWizard(steps.length);
  return (
    <div>
      <div className="mb-4">
        Step {step} of {steps.length}
      </div>
      <div className="mb-4">{steps[step - 1]}</div>
      <div className="flex gap-2">
        <button
          onClick={prev}
          disabled={step === 1}
          className="px-3 py-1 border rounded"
        >
          Back
        </button>
        <button
          onClick={next}
          disabled={step === steps.length}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
