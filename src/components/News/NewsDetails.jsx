import React from "react";
import "./newsDetailsStyle/NewsDetailsStyle.css";

const NewsDetails = () => {
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
  ];
  return (
    <div>
      {news.map((item) => (
        <div className="news">
          <img src={item.image} alt="newsImg" />
          <div className="newsDate">{item.date}</div>
          <h3 className="title">{item.title}</h3>
          <p>
            Hello, I’m @ricklesauceur, lead engineer on Apex Legends, and today
            I want to offer you a bit of insight into the online infrastructure
            that supports Apex Legends. In the past, we haven’t often talked
            publicly about servers, netcode, or online infrastructure for Apex
            Legends, and today we want to begin to change that. In short, today
            we want to:
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
            A warning: This post is long because it’s intended as a true
            deep-dive into the online infrastructure for Apex Legends—something
            we’ve seen some players requesting for a long time.
          </p>
        </div>
      ))}
    </div>
  );
};

export default NewsDetails;
