import React, { createContext, useContext } from "react";

export const authContext = createContext();

export const useAuth = () => useContext(authContext);

const AuthContextProvider = () => {
  return <div></div>;
};

export default AuthContextProvider;
