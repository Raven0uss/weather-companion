import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders appname", () => {
  render(<App />);
  const appname = screen.getByText(/myweathercompanion/i);
  expect(appname).toBeInTheDocument();
});
