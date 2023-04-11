import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";
import { City, searchCity } from "../api";
import userEvent from "@testing-library/user-event";

jest.mock("../api");

describe("App", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders appname", () => {
    render(<App />);
    const appname = screen.getByText(/myweathercompanion/i);
    expect(appname).toBeInTheDocument();
  });

  it("renders the App component", () => {
    render(<App />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("App is displaying the results of city list and are clickable", async () => {
    const mockCityList: City[] = [
      { name: "Paris", lon: 0, lat: 0, country: "FR" },
      { name: "London", lon: 0, lat: 0, country: "EN" },
    ];
    (searchCity as jest.MockedFunction<typeof searchCity>).mockResolvedValue(
      mockCityList
    );
    render(<App />);
    const input = screen.getByPlaceholderText(
      /search a city/i
    ) as HTMLInputElement;
    const searchButton = screen.getByRole("button");

    // Simulate user input and click search button
    input.value = "Paris";
    searchButton.click();

    await waitFor(
      () =>
        expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument(),
      { timeout: 100 }
    );

    const cityList = screen.getByTestId("city-list-container");
    expect(cityList).toBeInTheDocument();
    const cityElements = screen.getAllByTestId("city-element");
    cityElements[0].click();
    expect(cityElements.length).toBeGreaterThanOrEqual(1);
  });

  test("Search input can be trigger with Enter", async () => {
    const mockCityList: City[] = [
      { name: "Paris", lon: 0, lat: 0, country: "FR" },
      { name: "London", lon: 0, lat: 0, country: "EN" },
    ];
    (searchCity as jest.MockedFunction<typeof searchCity>).mockResolvedValue(
      mockCityList
    );
    render(<App />);
    const input = screen.getByPlaceholderText(
      /search a city/i
    ) as HTMLInputElement;

    // Simulate user type in input and type enter
    userEvent.type(input, "Paris{enter}");

    await waitFor(
      () =>
        expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument(),
      { timeout: 100 }
    );

    const cityList = screen.getByTestId("city-list-container");
    expect(cityList).toBeInTheDocument();
  });

  it("Test if click on logo display welcome", () => {
    render(<App />);
    const logo = screen.getByTestId("logo");
    logo.click();

    const welcome = screen.getByTestId("welcome-container");
    expect(welcome).toBeInTheDocument();
  });
});
