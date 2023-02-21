import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./GamesStyles/Games.css";

// import required modules
import { Mousewheel, Pagination, Parallax, Keyboard, EffectFade } from "swiper";
import GameCard from "./GameCard";
import { useGames } from "../../contexts/GamesContextProvider";

const Games = () => {
  const [hide, setHide] = useState(false);
  const { games, getGames } = useGames();

  useEffect(() => {
    getGames();
  }, []);

  console.log(games);
  return (
    <div className="games">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        // parallax={true}
        speed={600}
        keyboard={{
          enabled: true,
        }}
        // effect={"fade"}
        modules={[Mousewheel, Pagination, Parallax, Keyboard, EffectFade]}
        className="mySwiper"
        onSlideChange={() => setHide(true)}
      >
        {games.map((item) => (
          <SwiperSlide>
            <GameCard hide={hide} setHide={setHide} item={item} />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide style={{ color: "white" }}>
          {({ isActive }) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 5 : 0.5,
              }}
            >
              {" "}
              This is animated 3 Slide
            </motion.div>
          )}
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Games;
