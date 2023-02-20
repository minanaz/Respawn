import React, { useState } from "react";
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

const Games = () => {
  const [hide, setHide] = useState(false);
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
        <SwiperSlide>
          <GameCard hide={hide} setHide={setHide} />
        </SwiperSlide>
        <SwiperSlide>
          <GameCard hide={hide} setHide={setHide} />
        </SwiperSlide>
        <SwiperSlide style={{ color: "white" }}>
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
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Games;
