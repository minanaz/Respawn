import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API_GAMES } from "../helpers/consts";

const gamesContext = createContext();
export const useGames = () => useContext(gamesContext);

const GamesContextProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  async function getGames() {
    try {
      // const token = JSON.parse(localStorage.getItem("token"));
      // const Authorization = `Bearer ${token.access}`;
      // const config = {
      //   headers: {
      //     Authorization,
      //   },
      // };

      // const res = await axios(API_GAMES, config);

      const res = await axios(API_GAMES);
      setGames(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  let value = {
    games,

    getGames,
  };
  return (
    <gamesContext.Provider value={value}>{children}</gamesContext.Provider>
  );
};

export default GamesContextProvider;
