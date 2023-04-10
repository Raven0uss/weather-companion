import axios from "axios";
import { pick } from "lodash";
import moment from "moment";
import getDay from "../functions/getDay";

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

// Search City

export interface City {
  name: string;
  lat: number;
  lon: number;
  state?: string;
  country: string;
}

export const searchCity = async (cityName: string): Promise<City[]> => {
  const url = "http://api.openweathermap.org/geo/1.0/direct";
  try {
    const response = await axios.get(url, {
      params: {
        q: cityName,
        limit: 10,
        appid: API_KEY,
      },
    });

    // extract the relevant data from the response and map it to an array of ForecastData objects
    const cityData: City[] = response.data.map((city: City) =>
      pick(city, ["name", "lat", "lon", "state", "country"])
    );
    return cityData;
  } catch (error) {
    throw new Error("Failed to fetch city data");
  }
};

// Get Weather

// Interface related to data from API Forecast
interface ForecastDataItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    main: string;
  }[];
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
}

// Data of Forecast after mapping data
export interface ForecastData {
  date: string;
  displayedDate: string;
  temperature: number;
  weather: string;
  feels_like: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  clouds: number;
}

// Data of Forecast after merging dates into objects
export type ForecastDataPerDays = {
  [date: string]: Array<ForecastData>;
};

// Data interface of data returned by the function
export interface ForecastInfo {
  cityName: string;
  country: string;
  state: string;
  current: ForecastData;
  forecast: ForecastDataPerDays;
}

// interface getForecastProps {
//   city: City;
// }

export const getForecast = async (city: City): Promise<ForecastInfo> => {
  const { lat, lon, name: cityName, country, state } = city;

  const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather";
  const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast";

  try {
    const [currentWeatherResponse, forecastResponse] = await Promise.all([
      axios.get(currentWeatherUrl, {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: "metric",
        },
      }),
      axios.get(forecastUrl, {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: "metric",
        },
      }),
    ]);

    const currentWeatherData = currentWeatherResponse.data;
    const forecastData = forecastResponse.data;

    // Calculating the timezone between the user and the searched country
    // to be able to have the current hour in the located area
    const timezoneOffsetSeconds = currentWeatherData.timezone;
    const cityTimezoneOffset = timezoneOffsetSeconds / 60 / 60; // Convert to hours
    const currentDate = new Date();
    const timezoneOffset = currentDate.getTimezoneOffset() / 60; // Get Timezone in hour
    const timezone = cityTimezoneOffset + timezoneOffset; // Timezone Total

    const forecastInfo: ForecastInfo = {
      cityName: cityName,
      country: country,
      state: state || currentWeatherData.sys.state || "",
      current: {
        temperature: currentWeatherData.main.temp,
        weather: currentWeatherData.weather[0].main,
        date: moment().add(timezone, "hours").format("HH:mm - YYYY-MM-DD"),
        displayedDate: moment()
          .add(timezone, "hours")
          .format("dddd DD MMMM hh:mm A"),
        feels_like: currentWeatherData.main.feels_like,
        humidity: currentWeatherData.main.humidity,
        pressure: currentWeatherData.main.pressure,
        wind_speed: currentWeatherData.wind.speed,
        clouds: currentWeatherData.clouds.all,
      },
      forecast: forecastData.list
        .map((item: ForecastDataItem) => ({
          displayedDate: moment(new Date(item.dt * 1000))
            .add(timezone, "hours")
            .format("hh:mm A - YYYY-MM-DD "),
          date: getDay(
            moment(new Date(item.dt * 1000)).add(timezone, "hours"),
            moment().add(timezone, "hours")
          ),
          temperature: item.main.temp,
          weather: item.weather[0].main,
          feels_like: item.main.feels_like,
          humidity: item.main.humidity,
          pressure: item.main.pressure,
          wind_speed: item.wind.speed,
          clouds: item.clouds.all,
        }))
        // Reduce will create an object containing for each key an array of weather for the day
        .reduce((acc: ForecastDataPerDays, obj: ForecastData) => {
          // Split the date to have only the date
          const date = obj.date;
          if (acc[date]) {
            // If the key already exists, add the object to the existing array in the accumulator
            acc[date].push(obj);
          } else {
            // If the key doesn't exist, create a new array in accumulator with the object
            acc[date] = [obj];
          }
          return acc;
        }, {}),
    };

    return forecastInfo;
  } catch (err) {
    throw new Error("Failed to fetch forecast data");
  }
};
