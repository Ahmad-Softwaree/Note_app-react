import axios from "axios";
import { getCookie } from "../cookies";

// Create an instance of axios
export const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const authApi = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: getCookie("user"),
  },
});

export const fileApi = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: getCookie("user"),
  },
});
