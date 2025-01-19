import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Page from "../app/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toHaveTextContent("H2 to u 2");
  });
});
