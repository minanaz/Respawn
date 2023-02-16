import React from "react";
import Footer from "../components/Footer/Footer";
import Games from "../components/Games/Games";
import Navbar from "../components/Navbar/Navbar";

const GamesPage = () => {
  return (
    <div>
      <Navbar/>
      Games
      <Games />
      <Footer />

    </div>
  );
};

export default GamesPage;
