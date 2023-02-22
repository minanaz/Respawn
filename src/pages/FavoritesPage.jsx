import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Favorites from "../components/Work/Favorites";

const FavoritesPage = () => {
  return (
    <div>
      <Navbar />
      <Favorites />
      <Footer />
    </div>
  );
};

export default FavoritesPage;
