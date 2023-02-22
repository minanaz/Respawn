import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API_NEWS } from "../helpers/consts";

const newsContext = createContext();
export const useNews = () => useContext(newsContext);

const INIT_STATE = {
  news: [],
  newsDetails: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_NEWS":
      return { ...state, news: action.payload };
    case "GET_NEWS_DETAILS":
      return { ...state, newsDetails: action.payload };
    default:
      return state;
  }
}

const NewsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getNews() {
    try {
      // const token = JSON.parse(localStorage.getItem("token"));
      // const Authorization = `Bearer ${token.access}`;
      // const config = {
      //   headers: {
      //     Authorization,
      //   },
      // };

      // const res = await axios(API_NEWS, config);
      const res = await axios(API_NEWS);
      dispatch({
        type: "GET_NEWS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function addNews(obj) {
    try {
      // const token = JSON.parse(localStorage.getItem("token"));
      // const Authorization = `Bearer ${token.access}`;
      // const config = {
      //   headers: {
      //     Authorization,
      //   },
      // };

      //   const res = await axios.post(API_NEWS, obj, config);
      const res = await axios.post(API_NEWS, obj);  
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteNews(id) {
    try {
      // const token = JSON.parse(localStorage.getItem("token"));
      // const Authorization = `Bearer ${token.access}`;
      // const config = {
      //   headers: {
      //     Authorization,
      //   },
      // };

      //   const res = await axios.post(`${API_NEWS}${id}`, config);

      const res = await axios.delete(`${API_NEWS}/${id}/`);
      getNews();
    } catch (error) {
      console.log(error);
    }
  }

  async function getNewsDetails(id) {
    try {
      // const token = JSON.parse(localStorage.getItem("token"));
      // const Authorization = `Bearer ${token.access}`;
      // const config = {
      //   headers: {
      //     Authorization,
      //   },
      // };

      //   const res = await axios(`${API_NEWS}${id}/`, config);
      const res = await axios(`${API_NEWS}/${id}`);

      dispatch({
        type: "GET_NEWS_DETAILS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function editNewsDetails(id, updatedNews) {
    try {
      // const token = JSON.parse(localStorage.getItem("token"));
      // const Authorization = `Bearer ${token.access}`;
      // const config = {
      //   headers: {
      //     Authorization,
      //   },
      // };

      //   const res = await axios.patch(`${API_NEWS}${id}/`, updatedNews, config);
      const res = await axios.patch(`${API_NEWS}/${id}`, updatedNews);
      dispatch({
        type: "GET_NEWS_DETAILS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  let value = {
    news: state.news,
    newsDetails: state.newsDetails,

    getNews,
    getNewsDetails,
    addNews,
    deleteNews,
    editNewsDetails,
  };
  return <newsContext.Provider value={value}>{children}</newsContext.Provider>;
};

export default NewsContextProvider;
