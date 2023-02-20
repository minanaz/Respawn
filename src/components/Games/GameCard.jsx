import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const GameCard = ({ hide, setHide }) => {
  const [slide, setSlide] = useState("");

  useEffect(() => {
    if (hide) {
      setSlide("");
      setHide(false);
    }
  }, [hide]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="game-card">
      <div className={`game-content ${slide}`}>
        <div className="game-slider">
          <div className="game-slider-tint">
            <div className="game-details">
              <div className="game-details-text">
                <p>
                  Conquer with character in Apex Legends™, a free-to-play battle
                  royale game where legendary challengers fight for glory, fame,
                  and fortune on the fringes of the Frontier. Choose from a
                  roster of unique characters and experience the next evolution
                  of battle royale.
                </p>
              </div>
              <div className="game-details-buttons">
                <Link>
                  <div className="game-details-btn">
                    <div className="game-details-site"></div>
                    <h5>Visit game site</h5>
                  </div>
                </Link>
                <Link>
                  <div className="game-details-btn">
                    <div className="game-details-trailer"></div>
                    <h5>Watch trailer</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="game-content-right">
          <div
            data-aos="fade-down"
            // data-aos-easing="linear"
            data-aos-duration="1000"
            className="game-border"
          >
            <div className="game-tint"></div>
          </div>

          <div className="game-img">
            {/* <img src="https://www.respawn.com/media/images/Box_ApexWeb.2e16d0ba.fill-514x717.jpg" /> */}
            <div
              className="game-btn"
              onClick={() => {
                setSlide((prev) => {
                  if (!prev) return "game-active";
                  else return "";
                });
              }}
            >
              <ArrowForwardIosIcon
                sx={{
                  color: "white",
                  ml: "5%",
                }}
              />
              <p>LEARN MORE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="game-title-wrapper">
        <div className="game-title">
          <h5 className="game-title_release">Released february 2019</h5>
          <h2 className="game-title_title">APEX LEGENDS</h2>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
