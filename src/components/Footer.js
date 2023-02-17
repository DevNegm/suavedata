import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/White.png"

export default function Footer() {
  return (
    <footer className="py-5" style={{borderTop: "1px solid #454545"}}>
      <div className="container-fluid">
        <div className="row gap-5 p-3 align-items-start justify-content-center">
          <div className="col-lg-2 gap-2 d-flex flex-column justify-content-center ">
            <p className="fw-bold text-white mb-3">Suave Data</p>
            <Link to="/#about" className="text-white   text-decoration-none m-0">
              About Us
            </Link>
            <Link to="/services" className="text-white  text-decoration-none m-0">
              All Services
            </Link>
          </div>
          <div className="col-lg-2 gap-2 d-flex flex-column justify-content-center ">
            <p className="fw-bold text-white mb-3">Get In Touch</p>
            <Link to="/contactus" className="text-white   text-decoration-none m-0">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center">

        <img src={logo} width={200} className="m-auto" alt="" />
        </div>
        <div className="row pt-5 justify-content-center">
          <p className="text-white text-center m-0">Austin, Texas Copyright © 2023 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
