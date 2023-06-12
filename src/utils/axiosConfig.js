import axios from "axios";
import { authApi, fileApi } from "./api/api";
export const setAxiosHeader = (token) => {
  if (token) {
    console.log("set token to axios header");
    axios.defaults.headers.common.Authorization = token;
    authApi.defaults.headers.common.Authorization = token;
    authApi.defaults.headers.Authorization = token;
    fileApi.defaults.headers.Authorization = token;
    fileApi.defaults.headers.common.Authorization = token;
  } else {
    delete axios.defaults.headers.commons.Authorization;
    delete authApi.defaults.headers.common.Authorization;
    delete fileApi.defaults.headers.common.Authorization;
    delete authApi.defaults.headers.Authorization;
    delete fileApi.defaults.headers.Authorization;
  }
};
