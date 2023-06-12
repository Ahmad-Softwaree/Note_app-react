import { GET_AUTH_TOKEN_URL, LOGIN_URL, REGISTER_URL } from "../../url";
import { api, authApi } from "../../utils/api/api";
import { setAxiosHeader } from "../../utils/axiosConfig";
import { deleteCookie, getCookie, setCookie } from "../../utils/cookies";
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
} from "../type";
import { setAlert } from "./alertAction";

export const loadUser = async (authDispatch, alertDispatch) => {
  if (getCookie("user")) setAxiosHeader(getCookie("user"));
  try {
    console.log(authApi.defaults.headers);
    const { data } = await authApi.get(`${GET_AUTH_TOKEN_URL}`);
    authDispatch({
      type: LOAD_USER,
      payload: {
        user: data,
        token: getCookie("user"),
      },
    });
  } catch (error) {
    setAlert(authDispatch, alertDispatch, AUTH_FAIL, error.response.data.error, "fail");
    deleteCookie("user");
    setAxiosHeader(null);
  }
};

export const register = async (authDispatch, alertDispatch, values, navigate) => {
  try {
    authDispatch({
      type: REGISTER_START,
    });
    const { data } = await api.post(`${REGISTER_URL}`, values);
    authDispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
    setAlert(authDispatch, alertDispatch, null, "Account Created Successfully", "success");
    navigate("/login");
  } catch (error) {
    if (Array.isArray(error.response.data)) {
      error.response.data.forEach((err) => {
        setAlert(authDispatch, alertDispatch, REGISTER_FAIL, err, "fail");
      });
    } else {
      setAlert(authDispatch, alertDispatch, REGISTER_FAIL, error.response.data.error, "fail");
    }
  }
};

export const login = async (authDispatch, alertDispatch, values, navigate) => {
  try {
    authDispatch({
      type: LOGIN_START,
    });
    const { data } = await api.post(`${LOGIN_URL}`, values);
    setCookie("user", data.token);
    setAxiosHeader(data.token);
    authDispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    setAlert(authDispatch, alertDispatch, null, "User Login Successfully", "success");
    navigate("/");
  } catch (error) {
    if (Array.isArray(error.response.data)) {
      error.response.data.forEach((err) => {
        setAlert(authDispatch, alertDispatch, LOGIN_FAIL, err, "fail");
      });
    } else {
      setAlert(authDispatch, alertDispatch, LOGIN_FAIL, error.response.data.error, "fail");
    }
    deleteCookie("user");
    setAxiosHeader(null);
  }
};

export const logout = async (authDispatch, alertDispatch, navigate) => {
  setAlert(authDispatch, alertDispatch, LOGOUT, "User Logout successfully", "success");
  setAxiosHeader(null);
  deleteCookie("user");
  navigate("/login");
};
