import getWeatherIconName from "./getWeatherIconName";

const testingValues: { [key: string]: string } = {
  Thunderstorm: "wi-thunderstorm",
  Drizzle: "wi-sprinkle",
  Rain: "wi-rain",
  Snow: "wi-snow",
  Mist: "wi-dust",
  Smoke: "wi-smoke",
  Haze: "wi-day-haze",
  Dust: "wi-dust",
  Fog: "wi-fog",
  Sand: "wi-sandstorm",
  Ash: "wi-volcano",
  Squall: "wi-day-snow-wind",
  Tornado: "wi-tornado",
  Clear: "wi-day-sunny",
  Clouds: "wi-cloudy",
  HeavyRain: "wi-rain",
  LightRain: "wi-rain",
  VeryHeavyRain: "wi-rain",
  HeavyIntensityRain: "wi-rain",
  ModerateRain: "wi-rain",
  LightIntensityShowerRain: "wi-showers",
  HeavyIntensityShowerRain: "wi-showers",
  ShowerRain: "wi-showers",
  LightSnow: "wi-snow",
  HeavySnow: "wi-snow",
  Sleet: "wi-sleet",
  LightShowerSleet: "wi-sleet",
  ShowerSleet: "wi-sleet",
  LightRainAndSnow: "wi-rain-mix",
  RainAndSnow: "wi-rain-mix",
  LightShowerSnow: "wi-snow",
  ShowerSnow: "wi-snow",
  HeavyShowerSnow: "wi-snow",
  SandDustWhirls: "wi-dust",
  LowDriftingSnow: "wi-snow-wind",
  Cloud: "wi-cloudy",
  Extreme: "wi-meteor",
  Additional: "wi-cloudy",
};

describe("getWeatherIcon function test", () => {
  it.each(Object.keys(testingValues))("testing %s", (key: string) => {
    const input = key;
    const result = getWeatherIconName(input);
    const expected = testingValues[key];

    expect(result).toBe(expected);
  });
});
