import React, { Fragment, useState } from "react";
import UpdateNote from "./updateNote";
import Opacity from "./Opacity";
import DeleteNote from "./DeleteNote";

export default function Note({ note }) {
  const [update, setUpdate] = useState(false);
  const [wantToDelete, setWantToDelete] = useState(false);
  return (
    <Fragment>
      {update && <UpdateNote setUpdate={setUpdate} oldNote={note} />}
      {(update || wantToDelete) && <Opacity />}
      {wantToDelete && <DeleteNote setWantToDelete={setWantToDelete} id={note.id} />}
      <div className="flex flex-col justify-between items-start gap-3 bg-blue rounded-lg text-white p-5 min-w-[250px] min-h-[250px]">
        <div className="flex flex-col justify-left items-start gap-3 w-full">
          <h3>{note.title}</h3>
          <p>{note.description}</p>
        </div>

        <div className="flex flex-row justify-left items-center  gap-2 w-full">
          <span onClick={() => setWantToDelete(true)} className={`cursor-pointer p-2 rounded-lg bg-red-500 text-white px-3`}>
            <i className="fa-solid fa-trash"></i>
          </span>
          <span onClick={() => setUpdate(true)} className={`cursor-pointer p-2 rounded-lg bg-green-500 text-white px-3`}>
            <i className="fa-solid fa-pen"></i>
          </span>
        </div>
      </div>
    </Fragment>
  );
}
