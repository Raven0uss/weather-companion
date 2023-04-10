import styled from "styled-components";
import { ColorScheme } from "../../../styles/theme";

export const ForecastHorizontalScrollContainer = styled.div`
  //   background: linear-gradient(to right, #2d91c2 0%, #1e528e00 40%);
  background-color: rgba(${ColorScheme.CONTAINER_BG_RGB}, 0.3);
  flex: 1;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    width: 0px;
    background-color: transparent; /* Chrome and Safari */
  }

  touch-action: pan-x;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  user-select: none;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;

  &::active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
  //   border: 1px solid black;
`;

export const ForecastHourContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  align-items: center;
  justify-content: space-around;
  height: 120px;
`;
export const ForecastHourDisplayTime = styled.div`
  color: #fff;
`;
export const ForecastHourDisplayWeather = styled.div`
  font-size: 30px;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.5) 3px 3px 20px;
`;
export const ForecastHourDisplayTemp = styled.div`
  color: #fcfcfc;
  font-weight: bold;
`;
