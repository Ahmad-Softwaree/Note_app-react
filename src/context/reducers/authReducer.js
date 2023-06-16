export const authInitialState = {
  user: null,
  loading: true,
  registerLoading: false,
  isAuthenticated: false,
  loginLoading: false,
  updateLoading: false,
  deleteLoading: false,
  token: null,
};

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
  UPDATE_USER_FAIL,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
} from "../type.js";

export const authReducer = (state = authInitialState, action) => {
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

    case UPDATE_USER_START:
      return {
        ...state,
        updateLoading: true,
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        updateLoading: false,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        updateLoading: false,
        user: payload,
      };
    default:
      return state;
  }
};
