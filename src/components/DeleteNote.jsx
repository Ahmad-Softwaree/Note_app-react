import React, { useContext } from "react";
import { deleteNote } from "../context/actions/notesAction";
import { AlertContext } from "../context/alertContext";
import { NotesContext } from "../context/notesContext";

export default function DeleteNote({ setWantToDelete, id }) {
  const { dispatch: alertDispatch } = useContext(AlertContext);
  const {
    dispatch: notesDispatch,
    state: { deleteLoading },
  } = useContext(NotesContext);
  return (
    <div
      className={`fixed inset-0 m-auto  h-fit z-50 bg-white p-5 rounded-lg flex flex-col justify-left items-center gap-2 w-[95%] max-w-[400px]`}
    >
      <h1>Are You Sure You want to delete this note?</h1>
      <div className="flex flex-row justify-center items-center w-full gap-3">
        <button onClick={() => setWantToDelete(false)} className={`p-2 px-4 rounded-lg cursor-pointer  text-white bg-black`}>
          no
        </button>
        <button
          disabled={deleteLoading}
          onClick={() => deleteNote(id, notesDispatch, alertDispatch, setWantToDelete)}
          className={`p-2 px-4 rounded-lg cursor-pointer bg-red-500 text-white disabled:bg-black disabled:opacity-70`}
        >
          yes
        </button>
      </div>
    </div>
  );
}
