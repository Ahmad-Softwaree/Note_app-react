import React, { Fragment, useState } from "react";
import Notes from "../components/Notes";
import AddNote from "../components/AddNote";
import Opacity from "../components/Opacity";
export default function Home() {
  const [add, setAdd] = useState(false);

  return (
    <Fragment>
      <section className={`w-full min-h-screen p-2 flex flex-col justify-left items-center gap-5 py-10 relative`}>
        {add && <AddNote setAdd={setAdd} />}
        {add && <Opacity />}
        <h1 className={`text-[30px]`}>Notes</h1>
        <button
          onClick={() => setAdd(true)}
          className={`p-2 px-4 bg-blue rounded-lg cursor-pointer text-white text-[13px] opacity-90 hover:opacity-100 duration-200 transition-all`}
        >
          Make Note
        </button>
        <Notes />
      </section>
    </Fragment>
  );
}
