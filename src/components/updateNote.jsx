import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "../context/notesContext";
import { AuthContext } from "../context/authContext";
import { AlertContext } from "../context/alertContext";
import { createNote, updateNote } from "../context/actions/notesAction";

export default function UpdateNote({ setUpdate, oldNote }) {
  const {
    state: { updateLoading },
    dispatch: noteDispatch,
  } = useContext(NotesContext);
  const {
    state: {
      user: { id },
    },
  } = useContext(AuthContext);
  const { state: alertState, dispatch: alertDispatch } = useContext(AlertContext);

  const [inputs, setInputs] = useState({
    title: oldNote.title,
    description: oldNote.description,
  });
  useEffect(() => {
    setInputs({
      title: oldNote.title,
      description: oldNote.description,
    });
  }, [oldNote]);
  const { title, description } = inputs;
  const onChange = (e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const makeNote = (e) => updateNote(oldNote.id, inputs, noteDispatch, alertDispatch, setUpdate);

  const active = Boolean(title && description);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        makeNote();
      }}
      className={`fixed inset-0 m-auto  h-fit z-50 bg-white p-5 rounded-lg flex flex-col justify-left items-center gap-2 w-[95%] max-w-[400px]`}
    >
      <h1>Update Note</h1>
      <input
        placeholder="title"
        className={`border-2 border-solid p-2 border-black rounded-sm w-full`}
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={onChange}
      />
      <textarea
        placeholder="description"
        className={`border-2 border-solid p-2 border-black rounded-sm w-full`}
        name="description"
        id="description"
        cols="30"
        rows="10"
        value={description}
        onChange={onChange}
      ></textarea>
      <div className="flex flex-row justify-center items-center gap-3 w-full">
        <button
          disabled={updateLoading}
          type="submit"
          className={`p-2 px-4 rounded-lg disabled:bg-black disabled:opacity-70 cursor-pointer ${
            active ? "bg-green-500 text-white" : "bg-gray text-black"
          }`}
        >
          Update
        </button>
        <button onClick={() => setUpdate(false)} type="button" className={`p-2 px-4 rounded-lg text-white cursor-pointer bg-red-500`}>
          Cancel
        </button>
      </div>
    </form>
  );
}
