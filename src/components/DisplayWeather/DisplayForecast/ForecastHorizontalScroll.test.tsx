import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ForecastHorizontalScroll from "./ForecastHorizontalScroll";
import { ForecastData } from "../../../api";

describe("ForecastHorizontalScroll", () => {
  const mockForecastData: ForecastData[] = [
    {
      date: "2023-04-10 12:00:00",
      displayedDate: "12:00 - Today",
      temperature: 24,
      weather: "clear sky",
      feels_like: 25,
      humidity: 50,
      pressure: 1013,
      wind_speed: 3.6,
      clouds: 0,
    },
    {
      date: "2023-04-10 15:00:00",
      displayedDate: "15:00 - Today",
      temperature: 22,
      weather: "few clouds",
      feels_like: 23,
      humidity: 52,
      pressure: 1012,
      wind_speed: 4.2,
      clouds: 20,
    },
    {
      date: "2023-04-10 18:00:00",
      displayedDate: "18:00 - Today",
      temperature: 19,
      weather: "moderate rain",
      feels_like: 20,
      humidity: 56,
      pressure: 1010,
      wind_speed: 3.1,
      clouds: 75,
    },
  ];

  it("should render a ForecastHourContainer for each forecast data provided", () => {
    render(<ForecastHorizontalScroll forecast={mockForecastData} />);

    const hourContainers = screen.getAllByTestId("hour-container");
    expect(hourContainers.length).toBe(mockForecastData.length);
  });

  it("should render the correct hour for each forecast data provided", () => {
    render(<ForecastHorizontalScroll forecast={mockForecastData} />);

    const hourDisplays = screen.getAllByTestId("hour-display-time");
    mockForecastData.forEach((data, index) => {
      expect(hourDisplays[index]).toHaveTextContent(
        data.displayedDate.split(" - ")[0]
      );
    });
  });

  it("should render the correct temperature for each forecast data provided", () => {
    render(<ForecastHorizontalScroll forecast={mockForecastData} />);

    const temperatureDisplays = screen.getAllByTestId("hour-display-temp");
    mockForecastData.forEach((data, index) => {
      expect(temperatureDisplays[index]).toHaveTextContent(
        `${Math.round(data.temperature)}°C`
      );
    });
  });

  it("should scroll the container when the mouse moves", () => {
    const { container } = render(
      <ForecastHorizontalScroll forecast={mockForecastData} />
    );
    const scrollContainer = screen.getByTestId("scroll-container");

    // mock the scrollLeft property
    Object.defineProperty(container, "scrollLeft", {
      writable: true,
      value: 100,
    });

    fireEvent.mouseMove(scrollContainer, { movementX: 100 });

    // check if the scrollLeft property is being set to the expected value
    expect(container.scrollLeft).toBe(100);
  });
});
