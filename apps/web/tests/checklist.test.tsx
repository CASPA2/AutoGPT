import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { Checklist } from "../components/Checklist";

describe("Checklist", () => {
  it("renders provided items", () => {
    render(<Checklist items={[{ label: "Item A", done: false }]} />);
    expect(screen.getByText("Item A")).toBeInTheDocument();
  });
});
