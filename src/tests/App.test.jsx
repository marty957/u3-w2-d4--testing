import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

//test 1 per il componente welcome
describe("look for WELCOME components in the page", () => {
  it("mounts WELCOME component correctly", () => {
    render(<App />);
    const welcome = screen.getByRole("alert");

    expect(welcome).toBeInTheDocument();
  });
});
describe("looks for absence commentArea", () => {
  it("Is commentArea in the document", () => {
    render(<App />);
    const commentArea = screen.queryByLabelText("Recensione");
    expect(commentArea).toBeNull();
  });
});
