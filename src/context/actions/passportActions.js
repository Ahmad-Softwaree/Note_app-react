import { api } from "../../utils/api/api";
import { setAlert } from "./alertAction";
const { VITE_API_URL } = import.meta.env;
import { SUCCESS_GOOGLE_AUTH } from "../../url";
export const getGoogleAuth = async (authDispatch, alertDispatch) => {
  try {
    window.open(`${VITE_API_URL}/api/passport/auth/google`, "_self");
  } catch (error) {
    setAlert(authDispatch, alertDispatch, null, error.response.data.error, "fail");
  }
};

export const googleSuccess = async (authDispatch, alertDispatch) => {
  try {
    const { data } = await api.get(`${SUCCESS_GOOGLE_AUTH}`);
    console.log(data);
  } catch (error) {
    console.log(error);
    // setAlert(authDispatch, alertDispatch, null, error.response.data.error, "fail");
  }
};
