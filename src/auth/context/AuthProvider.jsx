import { useReducer } from "react";
import { AuthContext, authReducer } from "./";

import { types } from "../types/types";

const initialState = {
  logged: false,
};

const initAuth = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(
    authReducer,
    initialState,
    initAuth
  );

  const loginUser = (name = "", email = "") => {
    const user = {
      name: name,
      email: email,
    };
    const action = { type: types.login,  payload: user, };
    localStorage.setItem("user", JSON.stringify(user));
    authDispatch(action);
  };

  const logoutUser = () => {
    localStorage.removeItem("user");
    authDispatch({ type: types.logout });
  };

  return (
    <AuthContext.Provider value={{ ...authState, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
