import React, { useContext } from "react";
import { AlertContext } from "../../context/alertContext";
import { REMOVE_ALERT } from "../../context/type";

export default function Alert() {
  const { state, dispatch } = useContext(AlertContext);
  return (
    <div
      className={`fixed right-0 top-0 bottom-0 min-h-fit z-[999] flex flex-col justify-left items-start  gap-3 p-2 overflow-hidden transition-all duration-200 bg-white ${
        state.length > 0 ? "w-[300px] scale-100 opacity-100" : "w-none scale-0 opacity-60"
      }`}
    >
      {state.map((alert, index) => {
        return (
          <div
            key={index}
            className="flex flex-row justify-between items-center w-full p-2 border-2 border-solid border-blue rounded-md bg-white transition-all duration-200"
          >
            <span className={`${alert.type === "success" ? "text-green-500" : "text-red-500"}`}>{alert.text}</span>
            <span onClick={() => dispatch({ type: REMOVE_ALERT, payload: alert.id })} className={`px-4 py-2 text-red-500 cursor-pointer`}>
              <i className="fa-solid fa-x"></i>
            </span>
          </div>
        );
      })}
    </div>
  );
}
