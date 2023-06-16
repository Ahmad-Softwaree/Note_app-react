import { UPLOAD_USER_IMAGE } from "../../url";
import { fileApi } from "../../utils/api/api";
import { setAlert } from "./alertAction";

export const uploadImage = async (image, actionDispatch, alertDispatch) => {
  try {
    const file = new FormData();
    const filename = Date.now() + image.name;
    file.append("name", filename);
    file.append("image", image);
    const { data } = await fileApi.post(`${UPLOAD_USER_IMAGE}`, file);
    setAlert(actionDispatch, alertDispatch, null, "Image Uploaded Successfully", "success");
    return data;
  } catch (error) {
    setAlert(actionDispatch, alertDispatch, null, error.response.data.error, "fail");
  }
};
