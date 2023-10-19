import React from "react";

export const AgriItem = ({ agri, onDelete }) => {
  return (
    <>
      <div className="card body mx-3"  style={{width:'35rem', height:'10rem', backgroundColor:'#BDC3C7 '}}>
        <p>Full Name:-<b>{agri.fstName} {agri.lstName}</b><br></br>
         machines Available for:-<b>{agri.NumberofMachine}<br></br> </b>
        ContactNo:-<b>{agri.contactNo}</b><br></br>  EmailId:-<b>{agri.emailId}</b><br></br>
        Address:-<b>{agri.address},{agri.District},{agri.state}</b></p>
        <button
          className="btn btn-sm btn-success" onClick={() => { onDelete(agri)}}>Accept
        </button>
      </div>
      <hr />
    </>
  );
};

export default AgriItem;
