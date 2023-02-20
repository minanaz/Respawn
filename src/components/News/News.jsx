import React from "react";

const News = () => {
  let news = [
    {
      title: "APEX LEGENDS",
      description: "Soon bla bla",
      image:
        "https://www.respawn.com/media/images/apex-mobile-art-featured-image.jpg.2e16d0ba.fill-594x447.jpg",
      date: "Jun 3, 2022",
      id: 1,
    },
  ];
  return (
    <div>
      {news.map((item) => (
        <div></div>
      ))}
    </div>
  );
};

export default News;
