import React from "react";
import { City, ForecastInfo, getForecast } from "../../api";
import { isNil } from "lodash";
import {
  CityName,
  CountryAndState,
  CurrentWeatherContainer,
  CurrentWeatherDetailsContainer,
  CurrentWeatherIcon,
  CurrentWeatherTemp,
  DisplayDateTime,
  DisplayWeatherContainer,
  DisplayWeatherHeader,
  RefreshButton,
} from "./DisplayWeather.styled";
import DisplayForecast from "./DisplayForecast";
import getWeatherIconName from "../../functions/getWeatherIconName";
import Loading from "../Loading";
import Error from "../Error";

interface DisplayWeatherProps {
  city: City;
}

const DisplayWeather: React.FC<DisplayWeatherProps> = ({ city }) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [refresh, setRefresh] = React.useState(0);
  const [weatherInfo, setWeatherInfo] = React.useState<ForecastInfo | null>();

  React.useEffect(() => {
    (async () => {
      try {
        // Get the informations of getForecast
        const forecastInfo: ForecastInfo = await getForecast(city);
        setWeatherInfo(forecastInfo);
        setLoading(false);
        setError(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    })();

    // Unmount component
    return () => {
      setWeatherInfo(null);
      setLoading(true);
      setError(false);
      setRefresh(0);
    };
  }, [refresh]);

  if (loading) {
    return <Loading />;
  } else if (error || isNil(weatherInfo)) {
    return <Error />;
  } else
    return (
      <DisplayWeatherContainer data-testid="display-weather-container">
        <RefreshButton onClick={() => setRefresh((r) => r + 1)} data-testid="refresh-button">
          ↻
        </RefreshButton>
        <DisplayWeatherHeader>
          <CityName>{weatherInfo.cityName}</CityName>
          <CountryAndState>
            {`${weatherInfo.country}${
              weatherInfo.state && ` - ${weatherInfo.state}`
            }`}
          </CountryAndState>
          <DisplayDateTime>{weatherInfo.current.displayedDate}</DisplayDateTime>
        </DisplayWeatherHeader>
        <CurrentWeatherContainer>
          <CurrentWeatherIcon
            className={`wi ${getWeatherIconName(weatherInfo.current.weather)}`}
          />
          <CurrentWeatherTemp>
            {`${Math.round(weatherInfo.current.temperature)}°C`}
          </CurrentWeatherTemp>
        </CurrentWeatherContainer>
        <CurrentWeatherDetailsContainer>
          {/* Display the percantage of clouds */}
          <div className="current-cloud-percentage-container">
            <div className="wi wi-day-cloudy-high" />
            <p>{weatherInfo.current.clouds}%</p>
          </div>
          {/* Display the speed of wind in meter per second */}
          <div className="current-wind-speed-container">
            <div className="wi wi-strong-wind" />
            <p>{weatherInfo.current.wind_speed}m/s</p>
          </div>
          {/* Display the percentage of humidity  */}
          <div className="current-humidity-percentage-container">
            <div className="wi wi-humidity" />
            <p>{weatherInfo.current.humidity}%</p>
          </div>
          {/* Display the air pressure in hectopascal */}
          <div className="current-air-pressure-container">
            <div className="wi wi-barometer" />
            <p>{weatherInfo.current.pressure}hPa</p>
          </div>
        </CurrentWeatherDetailsContainer>
        <DisplayForecast forecast={weatherInfo.forecast} />
      </DisplayWeatherContainer>
    );
};

export default DisplayWeather;
