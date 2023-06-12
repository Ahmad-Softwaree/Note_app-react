import { COUNT_ALERT, REMOVE_ALERT, SET_ALERT } from "../type";
export const setAlert = (actionDispatch, alertDispatch, fail, text, type) => {
  let id = crypto.randomUUID();
  alertDispatch({
    type: SET_ALERT,
    payload: {
      id,
      text,
      type,
      time: 5,
    },
  });
  actionDispatch({ type: fail });
  countAlert(alertDispatch, id);
  removeAlertAutomatically(alertDispatch, id);
};

const countAlert = async (dispatch, id) => {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch({
      type: COUNT_ALERT,
      payload: id,
    });
  }
};

const removeAlertAutomatically = (dispatch, id) => {
  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id,
    });
  }, 5000);
};
