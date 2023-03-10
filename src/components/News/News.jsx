import React, { useEffect, useState } from "react";
import "./newsStyle/news.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { useNews } from "../../contexts/NewsContextProvider";
import { useAuth } from "../../contexts/AuthContextProvider";
import { Button } from "@mui/material";

const News = () => {
  const { news, getNews, deleteNews, editNews, newsDetails, pages } = useNews();
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    getNews();
  }, []);

  console.log(news);

  return (
    <div className="news-page">
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
          {user === "admin@gmail.com" ? (
            <Button
              variant="contained"
              color="error"
              sx={{ mt: "2%" }}
              onClick={() => navigate("/add-news")}
            >
              Add news
            </Button>
          ) : (
            ""
          )}
        </div>

        {news.map((item) => (
          <div className="news-title">
            <img src={item.image} alt="news" />
            <p className="news-time">{item.date}</p>
            <h5>NEWS</h5>
            <Link to={`/news/${item.id}`}>
              <h3>{item.title}</h3>
            </Link>
            <p>{item.description}</p>
            {user === "admin@gmail.com" ? (
              <div>
                <Button
                  sx={{ ml: "8%", mr: "2%" }}
                  variant="contained"
                  color="error"
                  onClick={() => deleteNews(item.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => navigate(`/edit-news/${item.id}`)}
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
  );
};
export default News;
