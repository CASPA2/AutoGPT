import Link from "next/link";
import { Check } from "lucide-react";

export type ChecklistItem = {
  label: string;
  done: boolean;
  href?: string;
};

export function Checklist({ items }: { items: ChecklistItem[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-2">
          <Check
            className={item.done ? "text-green-500" : "text-gray-400"}
            size={16}
          />
          {item.href ? (
            <Link href={item.href} className="underline">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
