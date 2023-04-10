import React from "react";
import { ForecastData } from "../../../api";
import {
  ForecastHorizontalScrollContainer,
  ForecastHourContainer,
  ForecastHourDisplayTemp,
  ForecastHourDisplayTime,
  ForecastHourDisplayWeather,
} from "./ForecastHorizontalScroll.styled";
import getWeatherIconName from "../../../functions/getWeatherIconName";

interface ForecastHorizontalScrollProps {
  forecast: ForecastData[];
}

const ForecastHorizontalScroll: React.FC<ForecastHorizontalScrollProps> = ({
  forecast,
}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= e.movementX;
    }
  };

  return (
    <ForecastHorizontalScrollContainer
      ref={scrollRef}
      onMouseMove={handleMouseMove}
      data-testid="scroll-container"
    >
      {forecast.map((forecastByHour) => {
        const hour = forecastByHour.displayedDate.split(" - ")[0];
        return (
          <ForecastHourContainer
            key={forecastByHour.displayedDate}
            data-testid="hour-container"
          >
            <ForecastHourDisplayTime data-testid="hour-display-time">
              {hour}
            </ForecastHourDisplayTime>
            <ForecastHourDisplayWeather
              className={`wi ${getWeatherIconName(forecastByHour.weather)}`}
            />
            <ForecastHourDisplayTemp data-testid="hour-display-temp">
              {Math.round(forecastByHour.temperature)}°C
            </ForecastHourDisplayTemp>
          </ForecastHourContainer>
        );
      })}
    </ForecastHorizontalScrollContainer>
  );
};

export default ForecastHorizontalScroll;
