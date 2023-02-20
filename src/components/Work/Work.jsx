import {
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";

import work from "./css/work.css";

import respTeam from "./css/images/Team_Respawn.jpg";
import apex1 from "./css/images/apex1.jpg";
import apex2 from "./css/images/apex2.jpg";
import apex3 from "./css/images/apex3.jpg";
import apex4 from "./css/images/apex4.png";
import starWars1 from "./css/images/star-wars1.jpeg";
import starWars2 from "./css/images/star-wars2.jpg";
import starWars3 from "./css/images/star-wars3.jpg";
import swFps1 from "./css/images/ST_FPS1.png";
import swFps2 from "./css/images/SW_FPS2.png";
import newGame from "./css/images/New_game.png";
import videoResp from "./css/images/video-respawn.webm";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

import StarIcon from "@mui/icons-material/Star";
import { useFavorite } from "../../contexts/FavoritesContextProvider";

const Work = () => {
  const [apexTeam, setApexTeam] = useState(0);
  const [starWars, setStarWars] = useState(0);
  const [swFps, setSwFps] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const { addToFavorites, deleteFromFavorites, checkInFavorites } =
    useFavorite();

  const navigate = useNavigate();

  const apexTeamInfo = [
    {
      title: "TEAM: APEX LEGENDS",
      content:
        "Led by Game Director Steve Ferreira, Executive Producer Ben Brinkman and Design Director Evan Nikolich, Apex Legends was developed by the team that created Titanfall 2 after that game's successful launch and launched in February 2019 to wide acclaim.",
    },
    {
      title: "TEAM: APEX LEGENDS",
      content:
        "The team began with that original group in Los Angeles but quickly expanded in order to support the requirements of growing a successful live service game. A new Apex Legends team - Respawn Vancouver - made up of industry veterans from the Vancouver game scene was formed in Spring 2020 and merged with the original Respawn group.",
    },
    {
      title: "TEAM: APEX LEGENDS",
      content:
        "We are currently a team of 400+ amazing developers in the Los Angeles and Vancouver areas, as well as across the globe, working to ensure Apex Legends continues to grow and deliver on the Battle Royale experience our players expect now and into the future. A great source of pride with Apex Legends and the development team is our goal of focus on representation, inclusion and diversity in Apex Legend story telling inside the game itself and in lore supporting our game. A focus on these goals and values are what has driven the game to have over 100M players that have tried it out.",
    },
    {
      title: "TEAM: APEX LEGENDS",
      content:
        "We have grown quickly to match the success of the game, and have worked hard to develop tools and processes to support the growth so that our developers can focus on making amazing content for our players. The early years of Apex Legends have been an existing challenge, but we are most excited about what we have in store for the future.",
    },
  ];

  const starwarsTeamInfo = [
    {
      title: "TEAM: STAR WARS JEDI: SURVIVOR",
      content:
        "Respawn’s “JEDI team” was built from the ground up by studio head Vince Zampella and Game Director Stig Asmussen, transforming the studio from a one game, one team structure into a multi-team, multi-project development environment. It also helped pave the way for Respawn’s expanded Star Wars™ development efforts in collaboration with Lucasfilm Games.",
    },
    {
      title: "TEAM: STAR WARS JEDI: SURVIVOR",
      content:
        "What initially began as a handful of people working on a third-person action/adventure prototype soon flourished into a hand-picked team of 100+ vastly talented and diverse developers, mutually committed to creating an authentic Star Wars gaming experience that would allow players to “‘Become a Jedi.’” Star Wars Jedi: Fallen Order™, released to critical acclaim on November 15, 2019, was born of the collective ideas, efforts, and aspirations from across the entire team, who in the process have not only accomplished an incredibly ambitious task for their first project together, but have also contributed stories, and introduced new characters to the Star Wars galaxy.",
    },
    {
      title: "TEAM: STAR WARS JEDI: SURVIVOR",
      content:
        "The team is actively developing the next installment in the Star Wars Jedi franchise, Star Wars Jedi: Survivor™, for release in 2023.",
    },
  ];

  const starWarsFpsTeamInfo = [
    {
      title: "TEAM: STAR WARS FPS",
      content:
        "In collaboration with Lucasfilm Games, Game Director Peter Hirschmann is leading a team of Respawn’s extremely talented developers to build a new AAA FPS in the Star Wars galaxy. The game is being developed from the ground up, leveraging the next-gen power of Unreal Engine 5, and the team is looking to add more passionate, skilled people to their swiftly growing ranks.",
    },
    {
      title: "TEAM: STAR WARS FPS",
      content: `With this project, the team is excited to carry on the excellence that Jedi: Fallen Order established for Star Wars games within Respawn, combining it with the studio’s pedigree for making best-in-class FPS titles such as Apex Legends and the beloved Titanfall series. Peter says he has "always been inspired by the classic Star Wars titles Dark Forces and Jedi Knight: Dark Forces 2," and that he's "never forgotten that emotion and excitement playing a fun, single-player FPS inside the Star Wars universe." For Peter and the team, this project is an absolute dream come true. It is a story they have always wanted to tell.`,
    },
  ];

  const vacancy = [
    {
      title: "PRODUCTION COORDINATOR",
      group: "ADMINISTRATIVE",
      team: "APEX LEGENDS",
      location: "VANCOUVER",
      id: 0,
    },
    {
      title: "PRODUCTION COORDINATOR",
      group: "ADMINISTRATIVE",
      team: "APEX LEGENDS",
      location: "LOS ANGELES - CHATSWORTH",
      id: 1,
    },
    {
      title: "PRODUCT MANAGER INTERN",
      group: "PRODUCT MANAGEMENT",
      team: "APEX LEGENDS",
      location: "OFFSITE - PENNSYLVANIA",
      id: 2,
    },
    {
      title: "SENIOR TECHNICAL ANIMATOR",
      group: "ART",
      team: "STAR WARS JEDI: SURVIVOR",
      location: "LOS ANGELES - CHATSWORTH",
      id: 3,
    },
    {
      title: "CINEMATIC LEAD",
      group: "ART",
      team: "STAR WARS FPS",
      location: "LOS ANGELES - CHATSWORTH",
      id: 4,
    },
  ];

  return (
    <div className="work-page">
      <Box
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
              width: "60vw",
            }}
          >
            BUILDING THE FUTURE OF GAMING
          </Typography>
          <a href="#work-list">JOIN OUR TEAM</a>
        </Box>
      </Box>

      <Box sx={{ background: "#e7e6e3", padding: "50px 0" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "start",
              borderBottom: "2px solid red",
              mb: "20px",
              pb: "20px",
            }}
          >
            {apexTeamInfo.map((item, index) => {
              if (index === apexTeam)
                return (
                  <Box
                    className="swiper_info"
                    sx={{
                      textAlign: "start",
                      width: { md: "50%", xs: "100%" },
                      mr: { md: "20px", xs: "none" },
                      pr: { md: "20px", xs: "none" },

                      borderRight: { md: "2px solid red", xs: "none" },
                    }}
                  >
                    <Typography
                      sx={{
                        margin: "20px 0",
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      TEAM: APEX LEGENDS
                    </Typography>
                    <Typography sx={{ margin: "10px 0" }}>
                      {item.content}
                    </Typography>
                  </Box>
                );
            })}
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              onSlideChange={(e) => setApexTeam(e.activeIndex)}
            >
              <SwiperSlide>
                <img src={apex2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={apex1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={apex3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={apex4} />
              </SwiperSlide>
            </Swiper>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "start",
              borderBottom: "2px solid red",
              mb: "20px",
              pb: "20px",
            }}
          >
            {starwarsTeamInfo.map((item, index) => {
              if (index === starWars)
                return (
                  <Box
                    className="swiper_info"
                    sx={{
                      textAlign: "start",
                      width: { md: "50%", xs: "100%" },
                      mr: { md: "20px", xs: "none" },
                      pr: { md: "20px", xs: "none" },

                      borderRight: { md: "2px solid red", xs: "none" },
                    }}
                  >
                    <Typography
                      sx={{
                        margin: "20px 0",
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ margin: "10px 0" }}>
                      {item.content}
                    </Typography>
                  </Box>
                );
            })}
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              onSlideChange={(e) => setStarWars(e.activeIndex)}
            >
              <SwiperSlide>
                <img src={starWars3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={starWars1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={starWars2} />
              </SwiperSlide>
            </Swiper>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "start",
              borderBottom: "2px solid red",
              mb: "20px",
              pb: "20px",
            }}
          >
            {starWarsFpsTeamInfo.map((item, index) => {
              if (index === swFps)
                return (
                  <Box
                    className="swiper_info"
                    sx={{
                      textAlign: "start",
                      width: { md: "50%", xs: "100%" },
                      mr: { md: "20px", xs: "none" },
                      pr: { md: "20px", xs: "none" },

                      borderRight: { md: "2px solid red", xs: "none" },
                    }}
                  >
                    <Typography
                      sx={{
                        margin: "20px 0",
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ margin: "10px 0" }}>
                      {item.content}
                    </Typography>
                  </Box>
                );
            })}
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              onSlideChange={(e) => setSwFps(e.activeIndex)}
            >
              <SwiperSlide>
                <img src={swFps2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={swFps1} />
              </SwiperSlide>
            </Swiper>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "start",
              borderBottom: "2px solid red",
              mb: "20px",
              pb: "20px",
            }}
          >
            <Box
              sx={{
                textAlign: "start",
                width: { md: "50%", xs: "100%" },
                mr: { md: "20px", xs: "none" },
                pr: { md: "20px", xs: "none" },

                borderRight: { md: "2px solid red", xs: "none" },
              }}
            >
              <Typography
                sx={{
                  margin: "20px 0",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                TEAM: NEW GAME INCUBATION TEAM
              </Typography>
              <Typography sx={{ margin: "10px 0" }}>
                We have exciting things in the works, apply to learn more!
              </Typography>
            </Box>

            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={newGame} />
              </SwiperSlide>
            </Swiper>
          </Box>
          <Box
            id="work-list"
            className="work-list__wrapper"
            sx={{ mt: "50px" }}
          >
            <Typography
              sx={{ fontSize: { xs: "30px", sm: "50px" }, fontWeight: "bold" }}
            >
              WORK WITH US
            </Typography>
            <Typography>Open Position: 1</Typography>

            <Box
              className="work-filtres"
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                mt: "20px",
                borderBottom: "1px solid grey",
                pb: "20px",
              }}
            >
              <TextField
                color="error"
                size="small"
                id="input-with-icon-textfield"
                label="Search..."
                // value={search}
                // onChange={(e) => setSearch(e.target.value)}
                sx={{ width: { sm: "38%", xs: "100%" } }}
                variant="outlined"
              />
              <Grid
                container
                sx={{
                  width: { sm: "60%", xs: "100%" },
                  display: "flex",
                  alignItems: "center",
                  mt: { xs: "10px", sm: "0" },
                }}
              >
                <Grid item xs={12} sm={4} sx={{ padding: "0" }}>
                  <FormControl
                    color="error"
                    sx={{
                      width: { sm: "90%", xs: "100%" },
                      margin: { xs: "8px 0", sm: "0 8px" },
                    }}
                    size="small"
                  >
                    <InputLabel id="demo-select-small">Age</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      // value={age}
                      label="Age"
                      // onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl
                    color="error"
                    sx={{
                      width: { sm: "90%", xs: "100%" },
                      margin: { xs: "8px 0", sm: "0 8px" },
                    }}
                    size="small"
                  >
                    <InputLabel id="demo-select-small">Age</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      // value={age}
                      label="Age"
                      // onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl
                    color="error"
                    sx={{
                      width: { sm: "90%", xs: "100%" },
                      margin: { xs: "8px 0", sm: "0 8px" },
                    }}
                    size="small"
                  >
                    <InputLabel id="demo-select-small">Age</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      // value={age}
                      label="Age"
                      // onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            {/* =========================================================================== */}

            {vacancy.map((item, index) => (
              <Box sx={{ display: "flex" }}>
                <IconButton
                  size="small"
                  onClick={() => {
                    if (checkInFavorites(index)) {
                      // setIsFavorite(true)
                      return deleteFromFavorites(index);
                    } else {
                      // setIsFavorite(false);
                      addToFavorites(item);
                    }
                  }}
                  color={checkInFavorites(index) ? "error" : ""}
                >
                  <StarIcon />
                </IconButton>
                <Box
                  onClick={() => navigate("/work/1")}
                  className="work-list-content"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: { xs: "column", md: "row" },
                    padding: "20px",
                    background: `${index % 2 == 0 ? "" : "#e2e1de"}`,
                    minHeight: "50px",
                    width: "100%",
                  }}
                >
                  <Typography
                    className="work-list-title"
                    sx={{
                      width: { md: "41%", xs: "100%" },
                      textAlign: "start",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      width: { xs: "100%", md: "59%" },
                      display: "flex",
                      justifyContent: { md: "space-between", xs: "none" },
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        borderRight: { xs: "1px solid grey", md: "none" },
                        marginRight: { xs: "10px", md: "0px" },
                        paddingRight: { xs: "10px", md: "0px" },
                        width: { md: "30%", xs: "100xp" },
                        fontSize: "14px",
                        textAlign: "start",
                      }}
                    >
                      {item.group}
                    </Typography>
                    <Typography
                      sx={{
                        borderRight: { xs: "1px solid grey", md: "none" },
                        marginRight: { xs: "10px", md: "0px" },
                        paddingRight: { xs: "10px", md: "0px" },
                        width: { md: "30%", xs: "100xp" },
                        fontSize: "14px",
                        textAlign: "start",
                      }}
                    >
                      {item.team}
                    </Typography>
                    <Typography
                      sx={{
                        marginRight: { xs: "10px", md: "0px" },
                        paddingRight: { xs: "10px", md: "0px" },
                        width: { md: "30%", xs: "100xp" },
                        fontSize: "14px",
                        textAlign: "start",
                      }}
                    >
                      {item.location}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Work;
