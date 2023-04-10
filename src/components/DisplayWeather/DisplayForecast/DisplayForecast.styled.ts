import styled from "styled-components";
import { ColorScheme } from "../../../styles/theme";

export const ForecastDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(${ColorScheme.CONTAINER_BG_RGB}, 0);
  margin-top: 30px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const ForecastElementContainer = styled.div`
  display: flex;

  &:not(:last-child) > div {
    border-bottom: 2px solid rgba(${ColorScheme.CONTAINER_BG_RGB}, 0.3);
  }

  &:last-child > .forecast-element-date {
    border-bottom-left-radius: 10px;
  }

  &:first-child > .forecast-element-date {
    border-top-left-radius: 10px;
  }

`;

export const ForecastElementDate = styled.div`
  border-right: 2px solid rgba(${ColorScheme.CONTAINER_BG_RGB}, 0.3);
  width: 100px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fefefe;
  font-size: 14px;
  font-weight: bold;
  background-color: rgba(${ColorScheme.CONTAINER_BG_RGB}, 0.5);
`;
