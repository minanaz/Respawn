import { Typography } from "@mui/material";
import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
