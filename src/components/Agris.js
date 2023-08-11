import React, { useEffect, useState } from "react";
import Navbar from "./Navbar"
import { AgriItem } from "./AgriItem";



const Agris = (props) => {


  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  //const [data,setdata]=useState([]);
  useEffect(()=>{
    fetch("https://localhost:8080/getagriuser",{
      method:"GET",
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,"agris");
      //setdata(data.data);
    });
  },[]);


  return (
    <>
    <Navbar/>
    <div className="auth-wrapper" style={{myStyle}}>
      <div className="auth-inner" style={{myStyle}}>
       <h3 className="my-5" style={{ fontWeight: "bold" }}>Agrimachinery List </h3>
        <table style={{width:500}}>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>machine available</th>
            <th></th>
          </tr>
        </table>
      </div>
    </div>
    </>
  );
};

 export default Agris;
// {props.agris.length === 0
//   ? "No Machines available"
//   : props.agris.map((agri) => {
//       return (
//         <div>
//           <AgriItem
//             agri={agri}
//             key={agri.sno}
//             onDelete={props.onDelete}
//           />
//         </div>
//       );
//     })}