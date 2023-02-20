import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import FavoritesContextProvider from "./context/FavoritesContextProvider";
import WorkContextProvider from "./context/WorkContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritesContextProvider>
        <WorkContextProvider>
          <App />
        </WorkContextProvider>
      </FavoritesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
