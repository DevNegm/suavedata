import React from "react";
import img from "../Assets/clint-patterson-dYEuFB8KQJk-unsplash.jpg"
import logo from "../Assets/White.png"
export default function Header() {
  return (
    <header style={{minHeight:"70vh"}} className=" d-flex flex-column pt-5 align-items-center">
      <h3 className="display-3 m-0 text-white fw-bold d-flex mt-4" style={{zIndex:"999"}}>Suave Data</h3>
      <img style={{zIndex:"999"}} width={200} src={logo} alt="" />
    </header>
  );
}
