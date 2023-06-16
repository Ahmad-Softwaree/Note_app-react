import { COUNT_ALERT, REMOVE_ALERT, SET_ALERT } from "../type.js";

export const alertInitialState = [];

export const alertReducer = (state = alertInitialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      if (!state.some((val) => val.text === payload.text)) {
        return [...state, payload];
      }
      return state;

    case COUNT_ALERT:
      let alerts = state;
      let index = alerts.findIndex((val) => val.id === payload);
      if (index !== -1) alerts[index].time--;
      return alerts;

    case REMOVE_ALERT:
      return state.filter((val) => val.id !== payload);
    default:
      return state;
  }
};
