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
  GET_ONE_NOTE_FAIL,
  GET_ONE_NOTE_START,
  GET_ONE_NOTE_SUCCESS,
  UPDATE_NOTE_FAIL,
  UPDATE_NOTE_START,
  UPDATE_NOTE_SUCCESS,
} from "../type";

export const notesInitialState = {
  notes: [],
  note: null,
  loading: true,
  createLoading: false,
  updateLoading: false,
  deleteLoading: false,
};

export const notesReducer = (state = notesInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_NOTES_START:
      return {
        ...state,
        loading: true,
        notes: [],
      };
    case GET_NOTES_FAIL:
      return {
        ...state,
        loading: false,
      };
    case GET_NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        notes: payload,
      };
    case GET_ONE_NOTE_START:
      return {
        ...state,
        loading: true,
        note: null,
      };
    case GET_ONE_NOTE_FAIL:
      return {
        ...state,
        loading: false,
        note: null,
      };
    case GET_ONE_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        note: payload,
      };
    case CREATE_NOTE_START:
      return {
        ...state,
        createLoading: true,
      };
    case CREATE_NOTE_FAIL:
      return {
        ...state,
        createLoading: false,
      };
    case CREATE_NOTE_SUCCESS:
      return {
        ...state,
        createLoading: false,
        notes: [...state.notes, payload],
      };
    case UPDATE_NOTE_START:
      return {
        ...state,
        updateLoading: true,
      };
    case UPDATE_NOTE_FAIL:
      return {
        ...state,
        updateLoading: false,
      };
    case UPDATE_NOTE_SUCCESS:
      var notes = state.notes;
      var index = notes.findIndex((val) => val.id === payload.id);
      if (index !== -1) notes[index] = payload;
      return {
        ...state,
        updateLoading: false,
        notes,
      };
    case DELETE_NOTE_START:
      return {
        ...state,
        deleteLoading: true,
      };
    case DELETE_NOTE_FAIL:
      return {
        ...state,
        deleteLoading: false,
      };
    case DELETE_NOTE_SUCCESS:
      console.log(payload);
      return {
        ...state,
        deleteLoading: false,
        notes: state.notes.filter((val) => val.id !== parseInt(payload)),
      };
    default:
      return state;
  }
};
