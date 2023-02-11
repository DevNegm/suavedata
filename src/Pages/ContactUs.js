import React, { useEffect } from "react";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container" style={{ minHeight: "80vh" }}>
      <div className="row align-items-center py-5 my-5 gy-4">
        <h2 className="fw-bold text-center py-5 m-0 text-light">Contact Us</h2>

        <form>
          <div
            className="d-flex flex-column gap-4 p-3 rounded-3 m-auto"
            style={{ backgroundColor: "#222", maxWidth: "768px" }}
          >
            <div className="d-flex gap-4">
              <div className="d-flex w-100 flex-column">
                <label htmlFor="test" className="form-label text-white">
                  First Name
                </label>
                <input
                  type="text"
                  id="test"
                  className="form-control text-white shadow-none bg-transparent"
                  style={{border:"1px solid #444"}}
                />
              </div>
              <div className="d-flex w-100 flex-column">
                <label htmlFor="test" className="form-label text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  id="test"
                  className="form-control text-white shadow-none bg-transparent"
                  style={{border:"1px solid #444"}}
                />
              </div>
            </div>

            <div className="d-flex w-100 flex-column">
              <label htmlFor="test" className="form-label text-white">
                Company Name
              </label>
              <input
                type="text"
                id="test"
                className="form-control text-white shadow-none bg-transparent"
                  style={{border:"1px solid #444"}}
              />
            </div>
            <div className="d-flex w-100 flex-column">
              <label htmlFor="test" className="form-label text-white">
                What challenge would you like to tackle?,
              </label>
              <textarea
                type="text"
                id="test"
                className="form-control text-white shadow-none bg-transparent"
                  style={{border:"1px solid #444",minHeight:"100px"}}
                
              />
            </div>
            <div className="d-flex w-100 flex-column">
              <label htmlFor="test" className="form-label text-white">
                How did you hear about us?
              </label>
              <textarea
                type="text"
                id="test"
                className="form-control text-white shadow-none bg-transparent"
                style={{border:"1px solid #444",minHeight:"100px"}}
              />
            </div>
            <button className="btn btn-dark py-2 rounded-3" style={{backgroundColor:"#141414"}}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
