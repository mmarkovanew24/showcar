import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Set car info title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Set car info/i);
  expect(linkElement).toBeInTheDocument();
});
