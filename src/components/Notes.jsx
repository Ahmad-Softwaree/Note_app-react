import React, { Fragment, useContext, useEffect, useState } from "react";
import { AlertContext } from "../context/alertContext";
import { NotesContext } from "../context/notesContext";
import { getUserNotes } from "../context/actions/notesAction";
import { AuthContext } from "../context/authContext";

import Note from "./Note";

export default function Notes() {
  const { state: alertState, dispatch: alertDispatch } = useContext(AlertContext);
  const {
    state: { notes, loading },
    dispatch: notesDispatch,
  } = useContext(NotesContext);
  const {
    state: {
      user: { id },
    },
  } = useContext(AuthContext);

  useEffect(() => {
    getUserNotes(id, notesDispatch, alertDispatch);
  }, [notesDispatch]);

  if (loading) return <span>loading...</span>;
  if (!loading && notes.length === 0) return <span>There is no notes</span>;
  if (!loading && notes.length > 0)
    return (
      <div className="flex flex-row justify-center items-center gap-5 flex-wrap w-full">
        {notes.map((note, index) => {
          return <Note key={index} note={note} />;
        })}
      </div>
    );
}
