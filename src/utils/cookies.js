import Cookies from "js-cookie";

export const setCookie = (name, token) => {
  Cookies.set(name, token, {
    sameSite: "strict",
    path: "/",
    expires: new Date(new Date().getTime() + 60 * 60 * 24 * 30 * 1000),
  });
};

export const getCookie = (name) => Cookies.get(name);

export const deleteCookie = (name) => Cookies.remove(name);
