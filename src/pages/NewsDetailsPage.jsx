import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NewsDetails from "../components/News/NewsDetails";

const NewsDetailsPage = () => {
  return (
    <div>
      <Navbar/>
      <NewsDetails />
      <Footer />

    </div>
  );
};

export default NewsDetailsPage;
