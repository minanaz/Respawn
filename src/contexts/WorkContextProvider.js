import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { RESUME_API, TEAM_API, VACANCY_API } from "../helpers/consts";

export const workContext = createContext();

export const useWorkContext = () => useContext(workContext);

const INIT_STATE = {
  vacancies: [],
  pages: 0,
  oneVacancy: {},
  teams: [],
  groups: [],
  location: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_VACANCIES":
      return {
        ...state,
        vacancies: action.payload.results,
        pages: Math.ceil(action.payload.count / 1),
      };
    case "GET_TEAMS":
      return { ...state, teams: action.payload };
    case "GET_GROUPS":
      return { ...state, groups: action.payload };
    case "GET_ONE_VACANCY":
      return { ...state, oneVacancy: action.payload };
    default:
      return state;
  }
}

const WorkContextProvider = ({ children }) => {
  console.log(RESUME_API);
  const [err, setErr] = useState("");
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getVacancies = async () => {
    try {
      let res = await axios(`${VACANCY_API}${window.location.search}`);
      dispatch({
        type: "GET_VACANCIES",
        payload: res.data,
      });
    } catch (error) {}
  };

  const getVacancy = async (id) => {
    try {
      let res = await axios(`${VACANCY_API}${id}/`);
      dispatch({
        type: "GET_ONE_VACANCY",
        payload: res.data,
      });
    } catch (error) {}
  };

  const getTeams = async () => {
    try {
      let res = await axios(`${TEAM_API}`)
      console.log(res);
      // dispatch({
      //   type: "GET_TEAMS",
      //   payload: res.data,
      // })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getTeams();
  }, [])

  async function getResume() {
    try {
      let res = await axios(`${RESUME_API}`);
      console.log("asd", res);
    } catch (error) {
      console.log(error);
    }
  }

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
    getVacancies,
    vacancies: state.vacancies,
    pages: state.pages,
    getTeams,
    getVacancy,
    oneVacancy: state.oneVacancy,
  };

  return <workContext.Provider value={value}>{children}</workContext.Provider>;
};

export default WorkContextProvider;
