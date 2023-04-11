import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { ColorScheme } from "../styles/theme";

export const AppContainer = styled.main`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  max-width: 1920px;
  align-self: center;
`;

export const AppHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (${device.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const AppLogo = styled.h1`
  font-family: "Caveat", serif;
  text-align: center;
  font-size: 9.5vw;
  letter-spacing: -1px;
  word-spacing: -1px;
  color: rgb(255, 255, 255);
  text-shadow: rgb(0, 0, 0) 2px 2px 14px;
  cursor: pointer;

  @media (${device.mobileL}) {
    font-size: 32px;
  }

  @media (${device.tablet}) {
    margin-left: 20px;
  }
`;

export const AppWelcome = styled.div`
  margin: 50px auto;
  text-align: center;
  color: rgb(${ColorScheme.CONTAINER_BG_RGB});
  font-style: italic;
  font-family: "Laila", sans-serif;

  & > hr {
    color: rgba(${ColorScheme.CONTAINER_BG_RGB}, 0.3);
  }

  & > a {
    text-decoration: none;
    font-weight: bold;
    font-family: "Caveat", sans-serif;
    font-size: 22px;
    color: #fff;
    text-shadow: rgba(0, 0, 0, 0.5) 3px 3px 20px;
    opacity: 0.8;

    &:active,
    &:hover {
      opacity: 1;
      transition-duration: 300ms;
    }
  }
`;

export const InputSearchCityWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 80%;

  @media (${device.tablet}) {
    width: ${device.tablet}px;
    justify-content: flex-end;
    margin-right: 20px;
  }
`;

export const InputSearchCity = styled.input`
  position: relative;
  padding: 2px 12px;

  width: 90%;
  max-width: 400px;
  height: 100%;

  font-size: 16px;
  color: #fff;

  &::placeholder {
    color: #ffffff80;
  }

  border: none;
  border-radius: 0px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  background-color: rgba(${ColorScheme.CONTAINER_BG_RGB}, 0.5);

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-ms-clear {
    display: none;
  }

  &:hover {
    transition-duration: 300ms;
    box-shadow: 0 0 10px rgba(${ColorScheme.CONTAINER_BG_RGB}, 0.5);
  }

  &:focus,
  &:active {
    transition-duration: 300ms;
    outline: none;
    box-shadow: 0 0 10px rgba(${ColorScheme.CONTAINER_BG_RGB}, 0.8);
  }
`;

export const SearchButton = styled.div`
  width: 38px;
  padding: 2px 0px;

  align-items: center;
  justify-content: center;
  display: flex;
  color: rgba(255, 255, 255, 0.8);
  border-radius: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  background-color: rgba(${ColorScheme.CONTAINER_BG_RGB}, 0.8);
  height: 100%;
  border: none;
  font-size: 18px;

  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(${ColorScheme.CONTAINER_BG_RGB}, 1);
    transition-duration: 300ms;
    font-size: 20px;
  }
`;
