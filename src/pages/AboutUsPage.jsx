import { Typography } from "@mui/material";
import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Navbar from "../components/Navbar/Navbar";

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      {/* <Typography sx={{color: "white"}}>AboutUs</Typography> */}
      <AboutUs />
    </div>
  );
};

export default AboutUsPage;
