import styled from "styled-components";
import { ColorScheme } from "../../styles/theme";

export const CityListContainer = styled.div`
  background-color: rgba(${ColorScheme.CONTAINER_BG_RGB}, 0.9);
  display: flex;
  align-self: center;
  width: 80%;
  margin: 40px 0;
  border-radius: 10px;
  padding: 8px;
  flex-direction: column;

  max-width: 1024px;

  & > div:not(:last-child) {
    border-bottom: 1px solid #ffffff80;
  }
`;

export const CityElement = styled.div`
  color: white;
  padding: 12px 8px;
  cursor: pointer;

  & > .city-name-from-list {
    font-weight: bold;
    padding-right: 10px;
  }

  &:hover,
  &:focus,
  &:active {
    transition-duration: 300ms;
    color: #ffffff80;
  }
`;
