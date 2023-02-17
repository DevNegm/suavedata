import React, { useEffect, useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
export default function Faq({faq}) {
  const [opener, setOpener] = useState(false);
  const handleOpen = () => {
    setOpener(!opener);
  };


  return (
   
          <div
            className="d-flex flex-column rounded-3 p-3 text-white"
            style={{ backgroundColor: "#222222" }}
          >
            <p className="fw-bold m-0 d-flex fs-5 justify-content-between gap-2" style={{cursor:"pointer"}} onClick={handleOpen}>
              {faq?.title}  <BiDownArrow style={{transform: opener && "rotate(180deg)",transition:"all 250ms ease-in-out" }} />
            </p>
            {opener && <p dangerouslySetInnerHTML={{__html : faq?.body}} className="m-0 my-3 pt-3 anime" style={{borderTop:"1px solid #555"}}/>}
          </div>
  );
}
