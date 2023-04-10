import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import DisplayWeather from "./";
import { City } from "../../api";

const mockCity: City = {
  name: "Paris",
  lat: 40.7128,
  lon: -74.006,
  country: "France",
  state: "Île-de-France",
};

jest.mock("../../api", () => ({
  getForecast: jest.fn().mockResolvedValue({
    cityName: "Paris",
    country: "France",
    state: "Île-de-France",
    current: {
      displayedDate: "2023-04-10 12:00:00",
      weather: "cloudy",
      temperature: 15,
      humidity: 80,
      wind_speed: 5,
      clouds: 75,
      pressure: 1013,
    },
    forecast: [],
  }),
}));

describe("DisplayWeather component", () => {
  it("renders the current weather info for a city", async () => {
    render(<DisplayWeather city={mockCity} />);

    // Wait for the loading spinner to disappear
    await waitFor(() =>
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument()
    );

    expect(screen.queryByTestId("error-component")).not.toBeInTheDocument(); // assert that Error component is not rendered
    expect(screen.getByText(`${mockCity.name}`)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockCity.country} - ${mockCity.state}`)
    ).toBeInTheDocument();
    expect(screen.getByText("2023-04-10 12:00:00")).toBeInTheDocument();
    expect(screen.getByText("15°C")).toBeInTheDocument();
    expect(screen.getByText("75%")).toBeInTheDocument();
    expect(screen.getByText("5m/s")).toBeInTheDocument();
    expect(screen.getByText("80%")).toBeInTheDocument();
    expect(screen.getByText("1013hPa")).toBeInTheDocument();
  });

  it("renders the spinner when looking for API data", async () => {
    render(<DisplayWeather city={mockCity} />);

    // Wait for the loading spinner to disappear
    expect(screen.queryByTestId("loading-spinner")).toBeInTheDocument();
    expect(screen.queryByTestId("error-component")).not.toBeInTheDocument();
  });

  it("re-renders if refresh button is trigger", async () => {
    render(<DisplayWeather city={mockCity} />);

    // Wait for the loading spinner to disappear
    await waitFor(() =>
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument()
    );

    const refreshButton = screen.getByTestId("refresh-button");

    expect(screen.queryByTestId("error-component")).not.toBeInTheDocument(); // assert that Error component is not rendered
    expect(screen.getByText(`${mockCity.name}`)).toBeInTheDocument();

    refreshButton.click();
    await waitFor(() =>
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument()
    );

    expect(screen.queryByTestId("error-component")).not.toBeInTheDocument(); // assert that Error component is not rendered
  });
});
