import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  GROUP_API,
  RESUME_API,
  TEAM_API,
  VACANCIES_API,
  VACANCY_API,
} from "../helpers/consts";

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
        vacancies: action.payload,
        // pages: Math.ceil(action.payload.count / 1),  
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
  let countTeams = 0;
  let team = {};

  // const getVacancies = async () => {
  //   try {
  //     let res = await axios(`${VACANCY_API}${window.location.search}`);
  //     dispatch({
  //       type: "GET_VACANCIES",
  //       payload: res.data,
  //     });
  //   } catch (error) {}
  // };

  // const getVacancy = async (id) => {
  //   try {
  //     let res = await axios(`${VACANCY_API}${id}/`);
  //     dispatch({
  //       type: "GET_ONE_VACANCY",
  //       payload: res.data,
  //     });
  //   } catch (error) {}
  // };

  // ================================================

  // const getTeamsCount = async() => {
  //   try {
  //     let res = await axios(`${TEAM_API}`)
  //     countTeams = res.data.count
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const getTeams = async (num) => {
  //   try {
  //     let res = await axios(`${TEAM_API}?page=${num}`)
  //     team = res.data.results[0];
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const getAllTeams = async () => {
  //   try {
  //     await getTeamsCount();
  //     let res = []
  //     for(let i=1; i<=countTeams; i++){
  //       await getTeams(i);
  //       res.push(team);
  //     }
  //     dispatch({
  //       type: "GET_TEAMS",
  //       payload: res,
  //     })

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // ===================================

  async function getOneVacancy(id) {
    try {
      let res = await axios(`${VACANCIES_API}/${id}`);
      dispatch({
        type: "GET_ONE_VACANCY",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getVacancies() {
    try {
      let res = await axios(`${VACANCIES_API}${window.location.search}`);
      dispatch({
        type: "GET_VACANCIES",
        payload: res.data,
      });
      
    } catch (error) {
      console.log(error);
    }
  }

  async function getTeams() {
    try {
      let res = await axios(TEAM_API);
      dispatch({
        type: "GET_TEAMS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getGroups() {
    try {
      let res = await axios(GROUP_API);
      dispatch({
        type: "GET_GROUPS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getVacancies();
  }, []);

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
      alert("Заполните все поля правильно!", error);
      console.log(error);
    }
  }

  const value = {
    addResume,
    getResume,
    getVacancies,
    vacancies: state.vacancies,
    // pages: state.pages,
    getTeams,
    getGroups,
    groups: state.groups,
    getOneVacancy,
    oneVacancy: state.oneVacancy,
    teams: state.teams,
    // getAllTeams,
  };

  return <workContext.Provider value={value}>{children}</workContext.Provider>;
};

export default WorkContextProvider;
