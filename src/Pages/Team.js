import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import img from "../Assets/clint-patterson-dYEuFB8KQJk-unsplash.jpg";
import "react-loading-skeleton/dist/skeleton.css";

export default function Team() {
  const [team, setTeam] = useState(null);

  const data = [
    {
      name: "Regina Felange",
      title: "Transponster",
    },
    {
      name: "Regina Felange",
      title: "Transponster",
    },
    {
      name: "Regina Felange",
      title: "Transponster",
    },
    {
      name: "Regina Felange",
      title: "Transponster",
    },
    {
      name: "Regina Felange",
      title: "Transponster",
    },
    {
      name: "Regina Felange",
      title: "Transponster",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setTeam(data);
    }, 500);
  }, [team]);
  return (
    <div className="container" style={{ minHeight: "80vh" }}>
      <div className="row align-items-center py-5 my-5 gy-4">
        <h2 className="fw-bold text-center py-5 m-0 text-light">Our Team</h2>

        <div className="d-flex flex-wrap gap-5">
          {team == null
            ? Array(6)
                .fill(0)
                .map((item) => (
                  <div className="col-md-3 w-100" style={{flexGrow:"1"}}>
                    <SkeletonTheme baseColor="#313131" highlightColor="#444">
                      <Skeleton height={260} />
                      <Skeleton className="my-3" />
                      <Skeleton className="my-3" />
                    </SkeletonTheme>
                  </div>
                ))
            : team.map((item) => (
                <div
                  className="col-md-3 d-flex justify-content-center align-items-center text-center flex-column rounded-3"
                  style={{ flexGrow: "1", backgroundColor: "#222" }}
                >
                  <img
                    src={img}
                    className="rounded-3"
                    style={{ width: "100%", objectFit: "cover" }}
                    alt="member"
                  />
                  <p className="fw-bold text-white m-0 p-3">Regina Felange</p>
                  <p className="text-white m-0 pb-3">Transponster</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
