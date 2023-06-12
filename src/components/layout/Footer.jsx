import React from "react";

export default function Footer() {
  return (
    <footer className={`w-full p-5 text-center bg-blue text-white`}>
      {" "}
      {new Date().getFullYear()}
      <i className="fa-solid fa-copyright"></i> Ahmad Software All right received
    </footer>
  );
}
