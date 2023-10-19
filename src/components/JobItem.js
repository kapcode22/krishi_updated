import React from "react";

export const JobItem = ({ job, onDelete }) => {
  return (
    <>
      <div className="card body mx-5 " style={{width:'35rem', height:'12rem', backgroundColor:'#BDC3C7 '}}>
        <p>Full Name:-<b>{job.fstName} {job.lstName}</b><br></br> 
        ContactNo:-<b>{job.contactNo}</b><br></br>  
        EmailId:-<b>{job.emailId}</b><br></br>
        Number of workers in our team:-<b>{job.Wagers} for {job.work}</b><br></br>
        Address:-<h6>{job.address},{job.District},{job.state}</h6></p>
        <button
          className="btn btn-sm btn-success" onClick={() => { onDelete(job)}}>Accept
        </button>
      </div>
      <hr />
    </>
  );
};

export default JobItem;
