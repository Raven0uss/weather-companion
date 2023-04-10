import React from "react";
import { render, screen } from "@testing-library/react";
import Error from "./";
import userEvent from "@testing-library/user-event";
import { City, getForecast, searchCity } from "./../../api";
import App from "../../pages/App";
import DisplayWeather from "../DisplayWeather";

jest.mock("./../../api");

const axiosError = {
  message: "An error has occurred",
  config: {},
  isAxiosError: true,
  toJSON: () => ({}),
};

describe("Error component", () => {
  it("renders the error message", () => {
    const { getByText } = render(<Error />);
    const errorMessage = getByText("Oops an error occured !");
    expect(errorMessage).toBeInTheDocument();
  });
});

describe("Display Error from App", () => {
  it("displays Error component when there is an error", async () => {
    (searchCity as jest.MockedFunction<typeof searchCity>).mockRejectedValue(
      axiosError
    );

    render(<App />);
    const searchButton = screen.getByTestId("search-city-button");
    const input = screen.getByPlaceholderText("Search a city 🗺️");

    userEvent.type(input, "InvalidCity");
    userEvent.click(searchButton);

    const errorComponent = await screen.findByTestId("error-component");

    expect(errorComponent).toBeInTheDocument();
  });
});

describe("Display Error from DisplayWeather", () => {
  it("renders an error message when there is an error fetching data", async () => {
    (getForecast as jest.MockedFunction<typeof getForecast>).mockRejectedValue(
      axiosError
    );

    const mockCity: City = {
      name: "Paris",
      lat: 40.7128,
      lon: -74.006,
      country: "France",
      state: "Île-de-France",
    };

    render(<DisplayWeather city={mockCity} />);

    // Wait for the error component to appear
    const errorComponent = await screen.findByTestId("error-component");

    expect(errorComponent).toBeInTheDocument();
  });
});
