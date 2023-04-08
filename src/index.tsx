import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppStyled } from "./App.styled";

const rootElement = document.getElementById("root") as HTMLElement;
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="css/weather-icons.min.css"
        />
      </Helmet>
      <AppStyled />
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
