import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Joi from "joi";
export default function ContactUs() {
  const [err, setErr] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: null,
    email: null,
    company: null,
  });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErr("");
    setSuccess(false);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    let schema = Joi.object({
      name: Joi.string().min(2).max(200).required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: ["com", "net"] })
        .pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        .required(),
      company: Joi.string().min(2).max(200).required(),
    });
    let validate = schema.validate(form, { abortEarly: false });
    if (validate.error) {
      setSpinner(true);
      setErr(validate.error.details);
      setSpinner(false);
    } else {
      setSpinner(true);
      emailjs
        .sendForm(
          "service_5jjygik",
          "template_6mntygs",
          e.target,
          "Pd3R4YAeXTD7T8gnS"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            setErr("");
            setForm({
              name: null,
              email: null,
              company: null,
            });
            setSuccess(true);
            setSpinner(false);
          },
          (error) => {
            console.log(error.text);
          }
        );
      console.log("done");
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleError = (errors) => {
    for (const e of err) {
      if (e.context.key === errors) {
        return e.message;
      }
    }
    return "";
  };

  return (
    <div className="container" style={{ minHeight: "80vh" }}>
      <div className="row align-items-center py-5 my-5 gy-4">
        <h2 className="fw-bold text-center py-5 m-0 text-light">Contact Us</h2>
        {success && (
          <span className="text-center text-light  fs-5 my-2">
            Thank you, we'll reply ASAP.{" "}
          </span>
        )}
        <form onSubmit={sendEmail} autoComplete="off">
          <div
            className="d-flex flex-column gap-4 p-3 rounded-3 m-auto"
            style={{ backgroundColor: "#222", maxWidth: "768px" }}
          >
            <div className="d-flex gap-4">
              <div className="d-flex w-100 flex-column">
                <label htmlFor="test" className="form-label text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="test"
                  name="name"
                  onChange={onChange}
                  className="form-control text-white shadow-none bg-transparent"
                  style={{ border: "1px solid #444" }}
                />

                <span className="text-danger small mt-2">
                  {handleError("name")}
                </span>
              </div>
              <div className="d-flex w-100 flex-column">
                <label htmlFor="test" className="form-label text-white">
                  Email
                </label>
                <input
                  type="text"
                  id="test"
                  name="email"
                  onChange={onChange}
                  className="form-control text-white shadow-none bg-transparent"
                  style={{ border: "1px solid #444" }}
                />
                <span className="text-danger small mt-2">
                  {handleError("email")}
                </span>
              </div>
            </div>

            <div className="d-flex w-100 flex-column">
              <label htmlFor="test" className="form-label text-white">
                Company Name
              </label>
              <input
                type="text"
                id="test"
                name="company"
                onChange={onChange}
                className="form-control text-white shadow-none bg-transparent"
                style={{ border: "1px solid #444" }}
              />
              <span className="text-danger small mt-2">
                {handleError("company")}
              </span>
            </div>
            <div className="d-flex w-100 flex-column">
              <label htmlFor="test" className="form-label text-white">
                What challenge would you like to tackle?
              </label>
              <textarea
                type="text"
                id="test"
                name="challenge"
                className="form-control text-white shadow-none bg-transparent"
                style={{ border: "1px solid #444", minHeight: "100px" }}
              />
            </div>
            <div className="d-flex w-100 flex-column">
              <label htmlFor="test" className="form-label text-white">
                How did you hear about us?
              </label>
              <textarea
                type="text"
                id="test"
                name="about"
                className="form-control text-white shadow-none bg-transparent"
                style={{ border: "1px solid #444", minHeight: "100px" }}
              />
            </div>
            <button
              className="btn btn-dark py-2 rounded-3"
              style={{ backgroundColor: "#141414" }}
            >
              {spinner ? (
                <div class="spinner-border text-light" role="status"></div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
