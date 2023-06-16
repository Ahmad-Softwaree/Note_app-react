import { CREATE_NOTE_URL, DELETE_NOTE_URL, GET_USER_NOTES_URL, UPDATE_NOTE_URL } from "../../url";
import { authApi } from "../../utils/api/api";
import {
  CREATE_NOTE_FAIL,
  CREATE_NOTE_START,
  CREATE_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
  DELETE_NOTE_START,
  DELETE_NOTE_SUCCESS,
  GET_NOTES_FAIL,
  GET_NOTES_START,
  GET_NOTES_SUCCESS,
  UPDATE_NOTE_FAIL,
  UPDATE_NOTE_START,
  UPDATE_NOTE_SUCCESS,
} from "../type";
import { setAlert } from "./alertAction";

export const getUserNotes = async (user_id, actionDispatch, alertDispatch) => {
  try {
    actionDispatch({
      type: GET_NOTES_START,
    });
    const { data } = await authApi.get(`${GET_USER_NOTES_URL}/${user_id}`);
    actionDispatch({
      type: GET_NOTES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    setAlert(actionDispatch, alertDispatch, GET_NOTES_FAIL, error.response.data.error, "fail");
  }
};

export const createNote = async (inputs, actionDispatch, alertDispatch, setAdd) => {
  try {
    actionDispatch({
      type: CREATE_NOTE_START,
    });
    const { data } = await authApi.post(`${CREATE_NOTE_URL}`, inputs);
    actionDispatch({
      type: CREATE_NOTE_SUCCESS,
      payload: data,
    });
    setAlert(actionDispatch, alertDispatch, null, "Note Created Successfully", "success");
    setAdd(false);
  } catch (error) {
    if (Array.isArray(error.response.data)) {
      error.response.data.forEach((err) => {
        setAlert(actionDispatch, alertDispatch, CREATE_NOTE_FAIL, err, "fail");
      });
    } else {
      setAlert(actionDispatch, alertDispatch, CREATE_NOTE_START, error.response.data.error, "fail");
    }
  }
};

export const updateNote = async (note_id, inputs, actionDispatch, alertDispatch, setUpdate) => {
  try {
    actionDispatch({
      type: UPDATE_NOTE_START,
    });

    const { data } = await authApi.put(`${UPDATE_NOTE_URL}/${note_id}`, inputs);
    actionDispatch({
      type: UPDATE_NOTE_SUCCESS,
      payload: data,
    });
    setAlert(actionDispatch, alertDispatch, null, "Note Updated Successfully", "success");
    setUpdate(false);
  } catch (error) {
    if (Array.isArray(error.response.data)) {
      error.response.data.forEach((err) => {
        setAlert(actionDispatch, alertDispatch, UPDATE_NOTE_FAIL, err, "fail");
      });
    } else {
      setAlert(actionDispatch, alertDispatch, UPDATE_NOTE_FAIL, error.response.data.error, "fail");
    }
  }
};

export const deleteNote = async (note_id, actionDispatch, alertDispatch, setDelete) => {
  try {
    actionDispatch({
      type: DELETE_NOTE_START,
    });
    const { data } = await authApi.delete(`${DELETE_NOTE_URL}/${note_id}`);
    actionDispatch({
      type: DELETE_NOTE_SUCCESS,
      payload: data,
    });
    setAlert(actionDispatch, alertDispatch, null, "Note Deleted Successfully", "success");
    setDelete(false);
  } catch (error) {
    setAlert(actionDispatch, alertDispatch, DELETE_NOTE_FAIL, error.response.data.error, "fail");
  }
};
