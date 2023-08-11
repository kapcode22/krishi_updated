import React from "react";
import { JobItem } from "./JobItem";
import Navbar from "./Navbar"
const Jobs = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <>
    <Navbar/>
    <div className="container" style={myStyle}>
      <h3 className="my-5" style={{ fontWeight: "bold" }}>
        List of available workers
      </h3>
      {props.jobs.length === 0
        ? "No workers available Right now"
        : props.jobs.map((job) => {
            return (
              <div>
                <JobItem job={job} key={job.sno} onDelete={props.onDelete} />
              </div>
            );
          })}
    </div>
    </>
  );
};

export default Jobs;
