import { searchCity, getForecast } from "./index";
import axios from "axios";

jest.mock("axios", () => ({
  get: jest.fn(),
}));

describe("weather", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("searchCity", () => {
    it("returns city data for a valid city name", async () => {
      const mockData = [
        {
          name: "New York",
          lat: 40.7143,
          lon: -74.006,
          state: "New York",
          country: "US",
        },
      ];

      (
        axios.get as jest.MockedFunction<typeof axios.get>
      ).mockResolvedValueOnce({ data: mockData });

      const result = await searchCity("New York");

      expect(result).toEqual(mockData);
      expect(axios.get).toHaveBeenCalledWith(
        "http://api.openweathermap.org/geo/1.0/direct",
        {
          params: {
            q: "New York",
            limit: 10,
            appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
          },
        }
      );
    });

    it("throws an error for an invalid city name", async () => {
      (
        axios.get as jest.MockedFunction<typeof axios.get>
      ).mockRejectedValueOnce(new Error("Failed to fetch city data"));

      await expect(searchCity("invalid-city")).rejects.toThrow(
        "Failed to fetch city data"
      );

      expect(axios.get).toHaveBeenCalledWith(
        "http://api.openweathermap.org/geo/1.0/direct",
        {
          params: {
            q: "invalid-city",
            limit: 10,
            appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
          },
        }
      );
    });
  });

  describe("getForecast", () => {
    it("returns forecast info for a given city", async () => {
      const mockResponse = {
        data: {
          name: "London",
          sys: { country: "UK" },
          main: { temp: 10, feels_like: 8, humidity: 70, pressure: 1000 },
          weather: [{ main: "Clouds" }],
          wind: { speed: 5 },
          clouds: { all: 75 },
          timezone: 0,
          list: [
            {
              dt: 1650194400,
              main: { temp: 12, feels_like: 10, humidity: 60, pressure: 1002 },
              weather: [{ main: "Rain" }],
              wind: { speed: 8 },
              clouds: { all: 90 },
            },
            {
              dt: 1650280800,
              main: { temp: 8, feels_like: 6, humidity: 80, pressure: 1005 },
              weather: [{ main: "Clouds" }],
              wind: { speed: 4 },
              clouds: { all: 40 },
            },
            {
              dt: 1650194400,
              main: { temp: 12, feels_like: 10, humidity: 60, pressure: 1002 },
              weather: [{ main: "Rain" }],
              wind: { speed: 8 },
              clouds: { all: 90 },
            },
          ],
        },
      };

      // Mock the axios.get() method to return the mockResponse
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(
        mockResponse
      );

      // Call the getForecast function with a mock city object
      const mockCity = {
        name: "London",
        country: "UK",
        lat: 51.5072,
        lon: -0.1276,
      };
      const forecast = await getForecast(mockCity);

      // Assert that the returned data is correct
      expect(forecast.cityName).toEqual("London");
      expect(forecast.country).toEqual("UK");
      expect(forecast.current.temperature).toEqual(10);
      expect(forecast.current.weather).toEqual("Clouds");
      //   expect(forecast.forecast["2022-04-16"].length).toEqual(2);
    });
  });

  test("getForecast throws error", async () => {
    await expect(
      getForecast({
        name: "New York",
        lat: 40.7143,
        lon: -74.006,
        state: "New York",
        country: "US",
      })
    ).rejects.toThrow("Failed to fetch forecast data");
  });
});
