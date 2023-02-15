import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import video from "./css/bgVideo.webm";
import apexImage from "./css/apex_legends.jpg";
import findTheFun from "./css/Respawn_team.jfif";
import stayCurious from "./css/APEX_CHAMP.jpg";
import beInclusive from "./css/titanfall.jpg";
import keepItReal from "./css/beer-club.jpg";
import socialAtmosphere from "./css/soc_atmosphere.jpg";
import homeAway from "./css/a_home_away.jpg";
import givingBack from "./css/giving_back.jpg";
import gonvenient from "./css/gonvenient.jpg";
import mocap from "./css/mocap.jpg";
import sunshine from "./css/sunshine.jpg";
import perksImg from "./css/perks-bg.png";

import aboutUs from "./css/aboutUs.css";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const swiperInfo = [
    {
      title: "SOCIAL ATMOSPHERE",
      content:
        "Making games is fun! At Respawn we create and support opportunities for our employees to hang out and socialize together whether that be company parties, happy hours, gaming competitions, fitness activities, employee interest groups, conferences, and more!",
      id: 0,
    },
    {
      title: "A HOME AWAY FROM HOME",
      content:
        "We strive to create a comfortable work space that is visually appealing and encourages collaboration. Our studio offers many onsite amenities, including spacious kitchen areas that are stocked with lots of free snacks, drinks, fruits and veggies.",
      id: 1,
    },
    {
      title: "GIVING BACK TO THE COMMUNITY",
      content:
        "We provide many opportunities to support and contribute to give back to the community through volunteer events, onsite blood drives, company donation matching, and more.",
      id: 2,
    },
    {
      title: "CONVENIENT ONSITE AMENITIES",
      content:
        "Our on-site gym is available to our employees for free 24 hours a day, 7 days a week. We also offer strength training and yoga classes as well as an onsite chiropractic services, personal training, and massage therapy.",
      id: 3,
    },
    {
      title: "OUR OWN MOCAP STAGE",
      content:
        "We have our own state of the art motion capture and sound stage that our developers utilize to bring our characters to life. You can check out some of our animators and team in action during the development of Titanfall 2 here.",
      id: 4,
    },
    {
      title: "ENJOY SUNSHINE YEAR ROUND",
      content:
        "Located in the San Fernando Valley, the studio is near many exciting regions of Los Angeles and all that Southern California has to offer.",
      id: 5,
    },
  ];

  console.log(count);

  return (
    <div className="aboutUsPage">
      <Box
        sx={{
          background: "rgba(0,0,0,0.4)",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box className="bg-video-box">
          <video autoPlay loop muted playsInline className="bg-video">
            <source src={video} type="video/webm" />
          </video>
        </Box>
        <Box
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "0 auto",
          }}
        >
          <Typography
            sx={{
              background: "#d13639",
              width: "150px",
              fontSize: { xs: "16px", sm: "24px" },
            }}
          >
            Who are we?
          </Typography>
          <Typography
            className="aboutUs-title"
            sx={{
              fontSize: { xs: "46px", sm: "86px" },
              lineHeight: "1",
              mt: "10px",
            }}
          >
            We are Respawners
          </Typography>
        </Box>
      </Box>

      <Box sx={{ background: "#e7e6e3", padding: "100px 0" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "24px", sm: "42px" } }}
              fontWeight="bold"
            >
              OUR STUDIO'S MISSION AND VALUES BUILDING DIVERSE TEAMS THAT ARE
              CREATIVELY EMPOWERED
            </Typography>
            <Typography
              mt="40px"
              mb="20px"
              textAlign="start"
              sx={{ maxWidth: "700px", fontSize: { xs: "16px", sm: "22px" } }}
            >
              Founded in 2010, Respawn was created with the philosophy that when
              talented people have creative freedom, they’ll make extraordinary
              games that achieve the unexpected.
            </Typography>
            <Typography
              mb="20px"
              textAlign="start"
              sx={{ maxWidth: "700px", fontSize: { xs: "16px", sm: "22px" } }}
            >
              Respawn Entertainment is the Academy Award-winning studio behind
              critically acclaimed multi-platform games Apex Legends, Titanfall,
              Titanfall 2, Star Wars™ Jedi: Fallen Order, and Medal of Honor:
              Above and Beyond. As a collective of creative developers, we have
              launched some of the industry’s most critically and commercially
              successful games. We truly love what we do and want to share our
              passion with players worldwide.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${apexImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          webkitBackgroundSize: "cover",
          mozBackgroundSize: "cover",
          oBackgroundSize: "cover",
          backgroundSize: "cover",
          backgroundColor: "balck",
          height: "300px",
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
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <Box
            sx={{
              maxWidth: "700px",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
              color: "white",
              margin: "0 20px",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "28px",
                  sm: "36px",
                  fontWeight: "bold",
                  color: "#e7e6e3",
                },
              }}
            >
              WHAT WE VALUE:{" "}
            </Typography>
            <Typography
              sx={{
                textAlign: "start",
                fontSize: { xs: "22px", sm: "30px" },
                color: "#e7e6e3",
              }}
            >
              Each one of us is empowered to take creative risks and is given
              the autonomy to create the best gaming experiences possible.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ background: "#e7e6e3", padding: "50px 0 10px" }}>
        <Container>
          <Grid container sx={{ padding: 0, display: "flex", rowGap: "50px" }}>
            <Grid
              className="value-card"
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: { xs: "column", md: "row" },
                columnGap: "40px",
                rowGap: "40px",
                padding: { xs: "20px", sm: "50px" },
                background: "rgba(255, 255, 255, 0.629)",
                borderRadius: "10px",
              }}
              xs={12}
            >
              <Box className="img__wrapper">
                <img src={findTheFun} alt="img" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", sm: "28px" },
                    textAlign: "start",
                    fontWeight: "bold",
                    color: "#d13639",
                  }}
                >
                  FIND THE FUN.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "20px" },
                    textAlign: "start",
                  }}
                >
                  Our passion for gameplay inspired the use of the braille
                  letter “R” as our logo. It signifies our dedication to making
                  games that feel good to play. We believe that every facet of
                  the gameplay experience should feel “just right,” and we
                  discover what's fun by constantly playing our games and
                  listening to our community. We listen. We adapt. We find the
                  fun.
                </Typography>
              </Box>
            </Grid>
            <Grid
              className="value-card"
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: { xs: "column", md: "row" },
                columnGap: "40px",
                rowGap: "40px",
                padding: { xs: "20px", sm: "50px" },
                background: "rgba(255, 255, 255, 0.629)",
                borderRadius: "10px",
              }}
              xs={12}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", sm: "28px" },
                    textAlign: "start",
                    fontWeight: "bold",
                    color: "#d13639",
                  }}
                >
                  STAY CURIOUS.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "20px" },
                    textAlign: "start",
                  }}
                >
                  We believe experimentation is vital for creative innovation.
                  Through iteration, we constantly rethink our assumptions,
                  pushing ourselves to explore unfamiliar territories because
                  players deserve greatness, and we aspire to deliver greatness
                  to them.
                </Typography>
              </Box>
              <Box className="img__wrapper">
                <img src={stayCurious} alt="img" />
              </Box>
            </Grid>
            <Grid
              className="value-card"
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: { xs: "column", md: "row" },
                columnGap: "40px",
                rowGap: "40px",
                padding: { xs: "20px", sm: "50px" },
                background: "rgba(255, 255, 255, 0.629)",
                borderRadius: "10px",
              }}
              xs={12}
            >
              <Box className="img__wrapper">
                <img src={beInclusive} alt="img" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", sm: "28px" },
                    textAlign: "start",
                    fontWeight: "bold",
                    color: "#d13639",
                  }}
                >
                  BE INCLUSIVE.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "20px" },
                    textAlign: "start",
                  }}
                >
                  We strive to be allies and advocates by listening, learning,
                  and speaking out against hatred and toxic behavior. By
                  creating diverse characters and telling inclusive stories, we
                  spotlight many perspectives and amplify the voices of
                  underrepresented communities in our games. We champion
                  projects and highlight social issues that impact us all
                  because we care to create inclusive experiences for all our
                  players.
                </Typography>
              </Box>
            </Grid>
            <Grid
              className="value-card"
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: { xs: "column", md: "row" },
                columnGap: "40px",
                rowGap: "40px",
                padding: { xs: "20px", sm: "50px" },
                background: "rgba(255, 255, 255, 0.629)",
                borderRadius: "10px",
              }}
              xs={12}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", sm: "28px" },
                    textAlign: "start",
                    fontWeight: "bold",
                    color: "#d13639",
                  }}
                >
                  KEEP IT REAL AND RESPECTFUL.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "20px" },
                    textAlign: "start",
                  }}
                >
                  We nurture an environment where we can be our authentic
                  selves, know that our voices will be heard and that our
                  colleagues have our back. Through mutual trust and respectful
                  honesty, we can openly share our different perspectives,
                  opinions, and feedback. We can both challenge and champion
                  each other in the spirit of collective growth and integrity.
                </Typography>
              </Box>
              <Box className="img__wrapper">
                <img src={keepItReal} alt="img" />
              </Box>
            </Grid>
          </Grid>

          <Box
            className="swiper_content"
            sx={{
              mt: "100px",
              maxHeight: "50%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
              onSlideChange={(e) => setCount(e.activeIndex)}
            >
              <SwiperSlide>
                <img src={socialAtmosphere} id="first-img" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={homeAway} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={givingBack} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={gonvenient} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={mocap} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sunshine} />
              </SwiperSlide>
            </Swiper>
            {swiperInfo.map((item) => {
              if (item.id == count)
                return (
                  <Box
                    className="swiper_info"
                    sx={{
                      width: { xs: "100%", md: "40%" },
                      borderLeft: { xs: "none", md: "4px solid red" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "20px", sm: "28px" },
                        textAlign: "start",
                        fontWeight: "bold",
                        color: "#d13639",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "17px",
                      }}
                    >
                      {item.content}
                    </Typography>
                  </Box>
                );
            })}
          </Box>
          <Divider
            sx={{ background: "black", margin: "100px 0 10px", height: "3px" }}
          />
          <Box sx={{ position: "relative", marginBottom: "50px" }}>
            <img src={perksImg} className="perks" />
            <ul className="perksInfo">
              <li>STATE OF THE ART ONSITE GYM WITH 24/7 ACCESS</li>
              <li>401K WITH COMPANY MATCH AND NO VESTING PERIOD</li>
              <li>STOCK PURCHASE PLANS</li>
              <li>COMPREHENSIVE HEALTHCARE</li>
              <li>POOL TABLE, PING PONG, FOOSBALL, MASSAGE ROOM AND MORE</li>
            </ul>
          </Box>
          <Box
            sx={{
              background: "#111",
              padding: "40px",
              mb: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Typography
              sx={{
                color: "#e7e6e3",
                fontSize: { xs: "20px", sm: "28px" },
                textAlign: "start",
                marginRight: "20px",
              }}
            >
              The opportunity to create groundbreaking games with some of the
              best developer talent in the industry awaits our future team
              members.
            </Typography>
            <button onClick={() => navigate("/work")}>JOIN RESPAWN</button>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default AboutUs;
