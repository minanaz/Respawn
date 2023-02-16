import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import work from "./css/work.css";

import respTeam from "./css/images/Team_Respawn.jpg";
import apex1 from "./css/images/apex1.jpg";
import apex2 from "./css/images/apex2.jpg";
import apex3 from "./css/images/apex3.jpg";
import apex4 from "./css/images/apex4.png";
import starWars1 from "./css/images/star-wars1.jpeg";
import starWars2 from "./css/images/star-wars2.jpg";
import swFps1 from "./css/images/ST_FPS1.png";
import swFps2 from "./css/images/SW_FPS2.png";
import newGame from "./css/images/New_game.png";
import videoResp from "./css/images/video-respawn.webm"

const Work = () => {
  return (
    <div>
      <Box
      className="work-page"
        sx={{
          background: "rgba(0,0,0,0.4)",
          height: "86vh",
          display: "flex",
          alignItems: "start",
          // flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box className="bg-video-box">
          <video autoPlay loop muted playsInline className="bg-video">
            <source src={videoResp} type="video/webm" />
          </video>
        </Box>
        <Box
        className="work-video__wrapper"
          sx={{
            color: "white",
            display: "flex",
            height: "100%",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
            // margin: "0 auto",
          }}
        >
          <Typography
            className="work-title"
            sx={{
              fontSize: { xs: "26px", sm: "36px" },
              lineHeight: "1",
              mt: "40px",
              width: "60vw"
            }}
          >
            BUILDING THE FUTURE OF GAMING
          </Typography>
          <a>
            JOIN OUR TEAM
          </a>
        </Box>
      </Box>


      <Box sx={{ background: "#e7e6e3", padding: "50px 0" }}>
        <Container>
          <Typography
            component="h1"
            sx={{ fontSize: {xs: "32px", sm: "46px"}, fontWeight: "bold", textAlign: "start", color: "#d13639" }}
          >
            WORK WITH US
          </Typography>
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <Box >
              <Typography>JOIN OUR TEAM</Typography>
              <Typography>BUILDING THE FUTURE OF GAMING</Typography>
            </Box>
            <Box className="img__wrapper">
              <img src={respTeam} />
            </Box>
            

          </Box>
         
        </Container>

      </Box>
    </div>
  );
};

export default Work;
