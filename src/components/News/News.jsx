import React, { useEffect } from "react";
import { useNews } from "../../contexts/NewsContextProvider";

const News = () => {
  const { news, getNews, deleteNews, editNews, newsDetails } = useNews();

  useEffect(() => {
    getNews();
  }, []);

  console.log(news);
  return <div></div>;
};

export default News;
