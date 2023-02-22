import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNews } from "../../contexts/NewsContextProvider";
import "./newsDetailsStyle/NewsDetailsStyle.css";

const NewsDetails = () => {
  const { news, deleteNews, editNews, newsDetails, getNewsDetails } = useNews();
  const params = useParams();

  useEffect(() => {
    getNewsDetails(params.id);
  }, []);
  return (
    <div>
      <div className="news">
        <img src={newsDetails.image} alt="newsImg" />
        <div className="newsDate">{newsDetails.date}</div>
        <h3 className="title">{newsDetails.title}</h3>
        <p>
          Hello, I’m @ricklesauceur, lead engineer on Apex Legends, and today I
          want to offer you a bit of insight into the online infrastructure that
          supports Apex Legends. In the past, we haven’t often talked publicly
          about servers, netcode, or online infrastructure for Apex Legends, and
          today we want to begin to change that. In short, today we want to:
        </p>
        <ul>
          <li>
            Share a bit about how we’re working to improve your online
            experience in Apex Legends
          </li>
          <li>
            Acknowledge and explain some common online issues or connectivity
            problems you may encounter while playing Apex
          </li>
          <li>
            Specifically address commonly-asked questions about topics like
            slow-mo servers, hit-registration, and how our lag compensation
            system works
          </li>
          <li>
            Offer some comprehensive notes on our server tickrate, and explain
            our thinking behind what it affects, and what it doesn’t
          </li>
        </ul>
        <p>
          A warning: This post is long because it’s intended as a true deep-dive
          into the online infrastructure for Apex Legends—something we’ve seen
          some players requesting for a long time.
        </p>
      </div>
    </div>
  );
};

export default NewsDetails;
