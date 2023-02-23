import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import respTeamHome from "./css/images/respawn.jfif";
import homePage from "./css/homePage.css";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router"; 

import apexImg from "./css/images/apexHome.jpg";
import starWarsImg from "./css/images/starWarsHome.jpg";
import titanFall1Img from "./css/images/titanFall1Home.jpg";
import titanFall2Img from "./css/images/titanFall2Home.jpg";
import medalOfHonorImg from "./css/images/medalOfHonorHome.jpg";
import apexHomeNews from "./css/images/apexHomeNews.png";
import respawnHomeNews from "./css/images/respawnHomeNews.png";
import apexMerchHomeNews from "./css/images/apexMerchHomeNews.jpg";
import mohHomeNews from "./css/images/mohHomeNews.jpg";

import { useNews } from "../../contexts/NewsContextProvider";
import { useAuth } from "../../contexts/AuthContextProvider";
import eaResp from "./css/images/EA-Respawn.png"

import { Link } from "react-router-dom";


import "../News/newsStyle/news.css";
import { Link } from "react-router-dom";
const Home = () => {
  const { news, getNews, deleteNews, editNews, newsDetails, pages } = useNews();
  const { user } = useAuth();

  useEffect(() => {
    getNews();
  }, []);
  let newss = [];

  newss.push(news[0]);
  newss.push(news[1]);
  // useEffect(() => {
  // }, [news]);
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Box
        sx={{
          backgroundImage: `url(${eaResp})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          webkitBackgroundSize: "cover",
          mozBackgroundSize: "cover",
          oBackgroundSize: "cover",
          backgroundSize: "cover",
          backgroundColor: "balck",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        ></Box></Box>
      <Box sx={{ background: "#e7e6e3", padding: "50px 0" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "42px",
                color: "#1f1f1f",
                fontWeight: "bold",
                textAlign: "start",
                mr: "20px",
              }}
            >
              NEWS
            </Typography>
            <button className="news-btn" onClick={() => navigate("/news")}>
              More news
            </button>
          </Box>
          </Container>
          <div className="news-page">
      <div className="container">
        

        {newss?.map((item) => (
          <div className="news-title">
            <img src={item?.image} alt="news" />
            <p className="news-time">{item?.date}</p>
            <h5>NEWS</h5>
            <Link to={`/news/${item?.id}`}>
              <h3>{item?.title}</h3>
            </Link>
            <p>{item?.description}</p>
            {user === "admin@gmail.com" ? (
              <div>
                <Button
                  sx={{ ml: "8%", mr: "2%" }}
                  variant="contained"
                  color="error"
                  onClick={() => deleteNews(item?.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => navigate(`/edit-news/${item?.id}`)}
                >
                  Edit
                </Button>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
            {/* <Grid container spacing={4}>
              <Grid
                item
                md={6}
                sm={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "10px",
                  rowGap: "10px",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Box
                  className="news-img__wrapper"
                  sx={{ width: { xs: "100%", sm: "50%" } }}
                >
                  <img src={apexHomeNews} />
                </Box>
                <Box
                  sx={{ width: { xs: "100%", sm: "50%" }, textAlign: "start" }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    WHAT MAKES APEX TICK: A DEVELOPER DEEP DIVE INTO SERVERS AND
                    NETCODE
                  </Typography>
                  <Typography>
                    Apex Legends lead engineer Ricklesauceur explores common
                    online issues that players face, their causes, and our
                    efforts to address them.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                md={6}
                sm={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "10px",
                  rowGap: "10px",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Box
                  className="news-img__wrapper"
                  sx={{ width: { xs: "100%", sm: "50%" } }}
                >
                  <img src={apexHomeNews} />
                </Box>
                <Box
                  sx={{ width: { xs: "100%", sm: "50%" }, textAlign: "start" }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    WHAT MAKES APEX TICK: A DEVELOPER DEEP DIVE INTO SERVERS AND
                    NETCODE
                  </Typography>
                  <Typography>
                    Apex Legends lead engineer Ricklesauceur explores common
                    online issues that players face, their causes, and our
                    efforts to address them.
                  </Typography>
                </Box>
              </Grid>
            </Grid> */}
     
        
      </Box>
      <Box sx={{ background: "#1f1f1f", padding: "50px 0" }}>
        <Container>
          <Typography
            sx={{
              fontSize: "42px",
              color: "white",
              fontWeight: "bold",
              textAlign: "start",
              mb: "25px",
            }}
          >
            OUR GAMES
          </Typography>
          <Grid container spacing={4}>
            <Grid item md={6} sm={12}>
              <Box className="img__wrapper">
                <img src={apexImg} />
              </Box>
            </Grid>
            <Grid item md={6} sm={12}>
              <Box className="img__wrapper">
                <img src={starWarsImg} />
              </Box>
            </Grid>
            <Grid item md={6} sm={12}>
              <Box className="img__wrapper">
                <img src={titanFall1Img} />
              </Box>
            </Grid>
            <Grid item md={6} sm={12}>
              <Box className="img__wrapper">
                <img src={titanFall2Img} />
              </Box>
            </Grid>
            <Grid item md={6} sm={12}>
              <Box className="img__wrapper">
                <img src={medalOfHonorImg} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${respTeamHome})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          webkitBackgroundSize: "cover",
          mozBackgroundSize: "cover",
          oBackgroundSize: "cover",
          backgroundSize: "cover",
          backgroundColor: "balck",
          minHeight: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <Container sx={{ height: "90%", m: "50px auto" }}>
            <Box
              className="join-team-wrapper"
              sx={{
                maxWidth: "400px",
                background: "#e7e6e3",
                // height: "100%",

                padding: "20px",
                borderRadius: "5px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "34px", sm: "48px" },
                    fontWeight: "bold",
                  }}
                >
                  We’re hiring!
                </Typography>
                <Typography sx={{}}>
                  Team up with <strong>Respawn</strong> to forge your path and
                  craft unforgettable experiences for players
                </Typography>
              </Box>
              <Box sx={{ mt: "20px" }}>
                <Box
                  sx={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "5px",
                  }}
                >
                  <Typography sx={{ fontSize: "32px" }}>213</Typography>
                  <Typography>Open position</Typography>
                </Box>
                <button onClick={() => navigate("/work")}>
                  Explore Careers
                </button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
