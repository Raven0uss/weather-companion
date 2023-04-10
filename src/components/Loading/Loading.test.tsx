import { render, screen } from "@testing-library/react";
import Loading from "./";
import App from "../../pages/App";

describe("Loading", () => {
  it("renders a loading icon", () => {
    const { getByTestId } = render(<Loading />);
    const loadingIcon = getByTestId("loading-spinner");
    expect(loadingIcon).toBeInTheDocument();
  });

  test("App displays loading spinner while searching for city", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(
      /search a city/i
    ) as HTMLInputElement;
    const searchButton = screen.getByRole("button");

    // Simulate user input and click search button
    input.value = "Paris";
    searchButton.click();

    // Check that loading spinner is displayed
    const spinner = await screen.findByTestId("loading-spinner");
    expect(spinner).toBeInTheDocument();
  });
});
