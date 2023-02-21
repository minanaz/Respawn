import React, { createContext, useContext, useState } from "react";

export const authContext = createContext();

export const useAuth = () => useContext(authContext);

const AuthContextProvider = () => {
  return <div></div>;
};

export default AuthContextProvider;
