import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider";
import FavoritesContextProvider from "./contexts/FavoritesContextProvider";
import WorkContextProvider from "./contexts/WorkContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <WorkContextProvider>
          <FavoritesContextProvider>
            <App />
          </FavoritesContextProvider>
        </WorkContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
