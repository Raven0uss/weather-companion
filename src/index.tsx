import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import GlobalStyled from "./styles/global.styled";

const rootElement = document.getElementById("root") as HTMLElement;
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>MyWeatherCompanion</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="css/weather-icons.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="css/custom-fonts.css"
        />
      </Helmet>
      <GlobalStyled />
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
