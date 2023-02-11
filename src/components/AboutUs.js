import React from "react";
// import img from "../Assets/clint-patterson-dYEuFB8KQJk-unsplash.jpg";
export default function AboutUs() {
  return (
    <div id="about" className="container">
      <div className="row justify-content-center align-items-center py-5 my-5">
        <h2 className="fw-bold text-center py-5 m-0 text-light">About Us</h2>
        {/* <div className="col-lg-6">
          <img src={img} className="w-100" alt="image" />
        </div> */}
        <div className="col-lg-6">
          <div className="p-3">
            <h2 className="fw-bold text-white mb-3">
              We are a boutique data science partner.
            </h2>
            <p className="text-white ">
              At Data Suave, we connect our clients to their data, from business
              problem definition to applied machine learning and everything in
              between. Our business-savvy team uses heavy leverage of
              statistical programming using the best practices in artificial
              intelligence to tackle well-defined business problems.
            </p>
            <p className="text-white m-0">
              At Data Suave, we connect our clients to their data, from business
              problem definition to applied machine learning and everything in
              between. Our business-savvy team uses heavy leverage of
              statistical programming using the best practices in artificial
              intelligence to tackle well-defined business problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
