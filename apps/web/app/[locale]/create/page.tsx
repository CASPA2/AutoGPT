"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ideaFormSchema } from "../../../lib/validation";
import { Wizard } from "../../../components/Wizard";
import { PublishTargets } from "../../../components/PublishTargets";

export default function CreatePage() {
  const methods = useForm({ resolver: zodResolver(ideaFormSchema) });
  const steps = [
    <div key="idea" className="space-y-2">
      <label>Topic</label>
      <input className="border" {...methods.register("topic")} />
    </div>,
    <div key="publish">
      <PublishTargets />
    </div>,
  ];
  return (
    <FormProvider {...methods}>
      <div className="p-6">
        <Wizard steps={steps} />
      </div>
    </FormProvider>
  );
}
