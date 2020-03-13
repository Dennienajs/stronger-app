import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

test("renders App", () => {
  const { getByText } = render(<App />);
  const h1 = getByText(/STRONGER/i);
  expect(h1).toBeInTheDocument();
});
