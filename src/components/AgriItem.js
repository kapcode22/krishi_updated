import React,{useEffect,useState} from "react";

export const AgriItem = ({ agri, onDelete }) => {
  const [data,setdata]=useState([]);
  useEffect(()=>{
    fetch("https://localhost:8080/getagriuser",{
      method:"GET",
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,"agris");
      setdata(data.data);
    });
  },[]);
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
