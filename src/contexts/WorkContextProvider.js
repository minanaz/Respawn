import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { RESUME_API } from "../const/api";

export const workContext = createContext();

export const useWorkContext = () => useContext(workContext);

const WorkContextProvider = ({ children }) => {
  console.log(RESUME_API);
  const [err, setErr] = useState("");

  async function getResume() {
    try {
      let res = await axios(RESUME_API);
      console.log("asd", res);
    } catch (error) {
      console.log(error);
    }
  }
  getResume();
  async function addResume(formData) {
    try {
      await axios.post(RESUME_API, formData);
    } catch (error) {
      setErr(error);
      console.log(error);
    }
  }

  const value = {
    addResume,
  };

  return <workContext.Provider value={value}>{children}</workContext.Provider>;
};

export default WorkContextProvider;
