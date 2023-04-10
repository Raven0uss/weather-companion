import React from "react";
import { ForecastDataPerDays } from "../../../api";
import {
  ForecastDisplayContainer,
  ForecastElementContainer,
  ForecastElementDate,
} from "./DisplayForecast.styled";
import ForecastHorizontalScroll from "./ForecastHorizontalScroll";

interface DisplayForecastProps {
  forecast: ForecastDataPerDays;
}

const DisplayForecast: React.FC<DisplayForecastProps> = ({ forecast }) => {
  return (
    <ForecastDisplayContainer>
      {Object.keys(forecast).map((date: string) => {
        const forecastDay = forecast[date];
        return (
          <ForecastElementContainer
            key={date}
            data-testid="forecast-element-container"
          >
            <ForecastElementDate className="forecast-element-date">
              {date}
            </ForecastElementDate>
            <ForecastHorizontalScroll forecast={forecastDay} />
          </ForecastElementContainer>
        );
      })}
    </ForecastDisplayContainer>
  );
};

export default DisplayForecast;
