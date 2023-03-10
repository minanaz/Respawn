import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider";
import FavoritesContextProvider from "./contexts/FavoritesContextProvider";
import WorkContextProvider from "./contexts/WorkContextProvider";
import GamesContextProvider from "./contexts/GamesContextProvider";
import NewsContextProvider from "./contexts/NewsContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <GamesContextProvider>
          <NewsContextProvider>
            <WorkContextProvider>
              <FavoritesContextProvider>
                <App />
              </FavoritesContextProvider>
            </WorkContextProvider>
          </NewsContextProvider>
        </GamesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
