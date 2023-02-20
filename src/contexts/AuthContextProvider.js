import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_LOGIN, API_LOGIN_REFRESH, API_REGISTER } from "../helpers/consts";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const register = async (formData) => {
    try {
      const res = await axios.post(API_REGISTER, formData);
      console.log(res);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const login = async (formData, email) => {
    try {
      const res = await axios.post(API_LOGIN, formData);
      console.log(res);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", JSON.stringify(email));
      console.log(res.data);
      setUser(email);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(API_LOGIN_REFRESH, {
        refresh: token.refresh,
      });
      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: res.data.access })
      );

      let user = localStorage.getItem("username");
      setUser(user);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  let value = {
    register,
    login,

    error,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
