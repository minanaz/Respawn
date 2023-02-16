import React from "react";
import Footer from "../components/Footer/Footer";
import GameDetails from "../components/Games/GameDetails";
import Navbar from "../components/Navbar/Navbar";

const GameDetailsPage = () => {
  return (
    <div>
      <Navbar/>
      <GameDetails />
      <Footer />

    </div>
  );
};

export default GameDetailsPage;
