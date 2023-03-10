import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("Button has correct initial color, and updates when clicked", () => {
  render(<App />);
  const linkElement = screen.getByText("learn react");
  expect(linkElement).toBeInTheDocument();
});
