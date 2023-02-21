import React from "react";
import "./newsStyle/news.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Link } from "react-router-dom";

const News = () => {
  let news = [
    {
      title:
        "WHAT MAKES APEX TISK: A DEVELOPER DEEP DIVE INTO SERVERS AND NETCODE",
      description:
        "Apex Legends lead engineer Ricklesauceur explores common online issues that players face, their causes, and our efforts to address them.",
      image:
        "https://www.respawn.com/media/images/APEX_Legends_Screenshot_Season2_CG.50e05ec3.fill-594x447.png",
      date: "Feb 1, 2022",
      id: 1,
    },
    {
      title: "RESPAWN FAMILY ALBUM: SHAWN WILSON",
      description:
        "Learn about not only one of the OGs of Respawn, but one of the best animators of the Video Game industry, Shawn Wilson.",
      image:
        "https://www.respawn.com/media/images/shawnWilson-apex-moCap.2e16d0ba.fill-594x447.jpg",
      date: "May 2, 2022",
      id: 2,
    },
    {
      title: "APEX LEGENDS MOBILE REGIONAL BETAS START SOON",
      description:
        "Soon we're kicking off the first regional beta tests for Apex Legends Mobile.",
      image:
        "https://www.respawn.com/media/images/apex-mobile-art-featured-image.jpg.2e16d0ba.fill-594x447.jpg",
      date: "Jul 3 , 2022",
      id: 3,
    },
    {
      title:
        "RESPAWN RESPONDS // Cheaters, Player Feedback, and 2021 Priorities",
      description:
        "This week we're joined by Apex Legends Design Director, Jason McCord to talk about how the Apex Legends team deals with cheaters, player feedback, and our big priorities for this year.",
      image:
        "https://www.respawn.com/media/images/Website_header_01.2e16d0ba.fill-594x447.png",
      date: "Jun 3 , 2022",
      id: 4,
    },
  ];
  return (
    <div className="container">
      <div className="swiper-container">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://media.contentapi.ea.com/content/dam/apex-legends/common/articles/apex-legends-mobile-faq/common/apex-mobile-announce-art-3840x2160.jpg.adapt.crop16x9.575p.jpg"
              alt="Loading..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.roadtovr.com/wp-content/uploads/2020/12/medal-of-honor-above-and-beyond-4.jpg"
              alt="Loading..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://assets.xboxservices.com/assets/1d/e8/1de8594f-2d6c-4c7f-a4fe-c6655d360fcd.jpg?n=Apex-Legends_Gallery-0_1350x759_50.jpg"
              alt="Loading..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.washingtonpost.com/resizer/DxKoq-MZxJDK2lPCvwxyzEahyL4=/arc-anglerfish-washpost-prod-washpost/public/3X3H7G2KYBGL7FBFTJ3BQGG3HY.jpg"
              alt="Loading..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/1172380/ss_effd33d4b798698bec179a5721dfba527e8432f0.1920x1080.jpg?t=1675102852"
              alt="Loading..."
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="news-content"></div>
      {news.map((item) => (
        <div className="news-title">
          <img src={item.image} alt="news" />
          <p className="news-time">{item.date}</p>
          <h5>NEWS</h5>
          <Link to={`/news/${item.id}`}>
            <h3>{item.title}</h3>
          </Link>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
