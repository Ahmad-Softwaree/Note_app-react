import { createContext, useReducer } from "react";
import {
  AUTH_FAIL,
  LOAD_USER,
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
} from "./type";

export const AuthContext = createContext();

const initialState = {
  user: null,
  loading: true,
  registerLoading: false,
  isAuthenticated: false,
  loginLoading: false,
  token: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER:
      var { user, token } = payload;
      return {
        ...state,
        loading: false,
        user,
        token,
        isAuthenticated: user.isAuthenticated,
      };
    case AUTH_FAIL:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        token: null,
        isAuthenticated: false,
        registerLoading: false,
        loginLoading: false,
      };
    case REGISTER_START:
      return {
        ...state,
        registerLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerLoading: false,
      };
    case LOGIN_START:
      return {
        ...state,
        loginLoading: true,
      };
    case LOGIN_SUCCESS:
      var { user, token } = payload;
      return {
        ...state,
        loginLoading: false,
        user,
        token,
        isAuthenticated: user.isAuthenticated,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};
