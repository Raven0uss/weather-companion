import React from "react";
import { render } from "@testing-library/react";
import DisplayForecast from "./";
import { ForecastDataPerDays } from "../../../api";

describe("DisplayForecast", () => {
  const mockForecastDataPerDays: ForecastDataPerDays = {
    "2022-04-11": [
      {
        date: "2022-04-11T12:00:00Z",
        displayedDate: "12:00 - Today",
        temperature: 24,
        weather: "Clear",
        feels_like: 25,
        humidity: 70,
        pressure: 1015,
        wind_speed: 5,
        clouds: 0,
      },
      {
        date: "2022-04-11T15:00:00Z",
        displayedDate: "15:00 - Today",
        temperature: 22,
        weather: "Clouds",
        feels_like: 23,
        humidity: 75,
        pressure: 1012,
        wind_speed: 7,
        clouds: 20,
      },
    ],
    "2022-04-12": [
      {
        date: "2022-04-12T12:00:00Z",
        displayedDate: "12:00 - Tomorrow",
        temperature: 21,
        weather: "Rain",
        feels_like: 22,
        humidity: 80,
        pressure: 1010,
        wind_speed: 10,
        clouds: 90,
      },
      {
        date: "2022-04-12T15:00:00Z",
        displayedDate: "15:00 - Tomorrow",
        temperature: 18,
        weather: "Thunderstorm",
        feels_like: 19,
        humidity: 85,
        pressure: 1008,
        wind_speed: 12,
        clouds: 100,
      },
    ],
  };

  it("should render forecast elements for each date in forecast data", () => {
    const { getAllByTestId } = render(
      <DisplayForecast forecast={mockForecastDataPerDays} />
    );

    expect(getAllByTestId("forecast-element-container")).toHaveLength(2);
  });
});
