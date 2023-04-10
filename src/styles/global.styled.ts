import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body,
  #root {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden !important;
    background: linear-gradient(to bottom, #94c5f8 1%, #a6e6ff 70%, #94c5f8 100%);
    overscroll-behavior: none;  
}

`;

export default GlobalStyled;
