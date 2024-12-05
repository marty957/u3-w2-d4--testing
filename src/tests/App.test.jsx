import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("look for WELCOME components in the page", () => {
  it("mounts WELCOME component correctly", () => {
    render(<App />);
    const welcome = screen.getByRole("alert");
    screen.debug(welcome);
  });
});
