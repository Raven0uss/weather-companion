import styled from "styled-components";
import { ColorScheme } from "../../styles/theme";

export const DisplayWeatherContainer = styled.div`
  background-color: rgba(${ColorScheme.CONTAINER_BG_RGB}, 0.3);
  display: flex;
  align-self: center;
  width: 80%;
  margin: 40px 0;
  border-radius: 10px;
  padding: 8px;
  flex-direction: column;
  position: relative;
`;

export const DisplayWeatherHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Laila";
  color: #fff;
  margin: 18px auto;
`;

export const CityName = styled.h2`
  margin: 0;
  font-size: 32px;
`;
export const CountryAndState = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
`;
export const DisplayDateTime = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const CurrentWeatherContainer = styled.div`
  width: 50vw;
  max-width: 200px;
  aspect-ratio: 1/1;
  background-color: rgba(${ColorScheme.CONTAINER_BG_RGB}, 0.5);
  border-radius: 20px;
  align-self: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  box-shadow: 6px 8px 27px 0px rgba(0, 0, 0, 0.55);
  -webkit-box-shadow: 6px 8px 27px 0px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 6px 8px 27px 0px rgba(0, 0, 0, 0.55);
  margin-bottom: 20px;
`;

export const CurrentWeatherIcon = styled.div`
  font-size: 80px;
  color: #fefefe;
  text-shadow: rgba(0, 0, 0, 0.5) 3px 3px 20px;
  margin-bottom: 10px;
`;

export const CurrentWeatherTemp = styled.p`
  position: absolute;
  bottom: 0;
  margin-bottom: 5px;
  font-size: 28px;
  color: #fefefe;
  text-shadow: rgba(0, 0, 0, 0.5) 3px 3px 20px;
  font-weight: bold;
`;

export const CurrentWeatherDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  align-self: center;

  & > div {
    width: 15%;
    min-width: 100px;
    max-width: 140px;
    aspect-ratio: 1/1;
    position: relative;
    box-shadow: 6px 8px 27px 0px rgba(0, 0, 0, 0.55);
    -webkit-box-shadow: 6px 8px 27px 0px rgba(0, 0, 0, 0.55);
    -moz-box-shadow: 6px 8px 27px 0px rgba(0, 0, 0, 0.55);
    border-radius: 10px;
    background-color: rgba(${ColorScheme.CONTAINER_BG_RGB}, 0.5);
    margin: 16px 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > .wi {
      font-size: 50px;
      color: #fefefe;
      text-shadow: rgba(0, 0, 0, 0.5) 3px 3px 20px;
      margin-bottom: 20px;
    }

    & > p {
      position: absolute;
      bottom: 0;
      margin-bottom: 5px;
      font-size: 16px;
      color: #fefefe;
      text-shadow: rgba(0, 0, 0, 0.5) 3px 3px 20px;
      font-weight: bold;
    }
  }
`;

export const RefreshButton = styled.div`
  background-color: rgba(${ColorScheme.CONTAINER_BG_RGB}, 0.5);
  width: 48px;
  aspect-ratio: 1/1;
  position: absolute;
  right: 0;
  margin-right: 10px;
  color: #fff;
  font-size: 32px;
  border: 1px solid #fcfcfc80;
  box-shadow: 6px 8px 27px 0px rgba(0, 0, 0, 0.55);
  -webkit-box-shadow: 6px 8px 27px 0px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 6px 8px 27px 0px rgba(0, 0, 0, 0.55);
  border-radius: 5px;
  opacity: 0.8;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    transition-duration: 300ms;
    opacity: 1;
  }
`;

