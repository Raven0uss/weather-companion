const getWeatherIconName = (weatherCondition: string): string => {
  const conditions: { [key: string]: string } = {
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
    ShowerRain: "wi-showers",
    Sleet: "wi-sleet",
    ShowerSleet: "wi-sleet",
    ShowerSnow: "wi-snow",
    RainAndSnow: "wi-rain-mix",
    SandDustWhirls: "wi-dust",
    LowDriftingSnow: "wi-snow-wind",
    Cloud: "wi-cloudy",
    Extreme: "wi-meteor",
    Additional: "wi-cloudy",
  };

  // Remove additional words about condition
  weatherCondition = weatherCondition
    .replace(/(scattered|broken|overcast|few|light|heavy|very|moderate|intensity)/gi, "")
    .trim();

  return conditions[weatherCondition] || "wi-day-cloudy";
};

export default getWeatherIconName;
