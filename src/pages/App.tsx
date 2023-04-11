import React from "react";
import { City, searchCity } from "../api";
import Birds from "../components/Birds";
import DisplayWeather from "../components/DisplayWeather";
import Error from "../components/Error";
import Loading from "../components/Loading";
import SelectCity from "../components/SelectCity";
import {
  AppContainer,
  AppHeader,
  AppLogo,
  SearchButton,
  InputSearchCity,
  InputSearchCityWrapper,
  AppWelcome,
} from "./App.styled";

const App: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [cityList, setCityList] = React.useState([] as Array<any>);
  const [city, setCity] = React.useState(null as null | City);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSearch = async () => {
    try {
      setLoading(true);
      const result = await searchCity(searchValue);
      setCityList(result);
      setLoading(false);
      setError(false);
      setCity(null);
    } catch (err) {
      setError(true);
      setLoading(false);
      setSearchValue("");
      setCityList([]);
    }
  };

  const onReset = () => {
    setCity(null);
    setCityList([]);
    setError(false);
  };

  const onSelectCity = (value: City) => {
    setError(false);
    setSearchValue("");
    setCityList([]);
    setCity(value);
  };

  return (
    <AppContainer>
      {/* Header */}
      <AppHeader>
        <AppLogo data-testid="logo" onClick={() => onReset()}>
          MyWeatherCompanion
        </AppLogo>
        {/* Search City Input */}
        <InputSearchCityWrapper>
          <InputSearchCity
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search a city 🗺️"
            onKeyPress={(e) => e.key === "Enter" && onSearch()}
          />
          <SearchButton
            role="button"
            data-testid="search-city-button"
            onClick={() => onSearch()}
          >
            🔍
          </SearchButton>
        </InputSearchCityWrapper>
      </AppHeader>
      {/* Content */}
      <Birds />
      {error ? (
        <Error />
      ) : (
        <>
          {loading && <Loading />}
          {/* Display the suggestions of cities based by search */}
          {!loading && cityList.length !== 0 && (
            <SelectCity cityList={cityList} onSelectCity={onSelectCity} />
          )}
          {/* Display the weather of the selected city */}
          {!loading && city !== null && <DisplayWeather city={city} />}
          {/* Nothing has been selected, display basic informations */}
          {!loading && city === null && cityList.length === 0 && (
            <AppWelcome data-testid="welcome-container">
              Made with ❤️
              <hr />
              By{" "}
              <a href="https://www.linkedin.com/in/sofiane-belazouz/">
                Sofiane BELAZOUZ
              </a>
            </AppWelcome>
          )}
        </>
      )}
    </AppContainer>
  );
};

export default App;
