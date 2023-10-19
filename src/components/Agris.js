import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
// import { AgriItem } from "./AgriItem";

const Agris = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getagriuser", {
      method: "GET",
    })
    
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "agriData");
        setData(data.data);
      });
  }, []);

  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };

  return (
    <>
      <Navbar />
      <div className="container" style={myStyle}>
        <h3 className="my-5" style={{ fontWeight: "bold" }}>
          Agrimachinery List
        </h3>
        <table style={{ width: 500 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Contact No</th>
              <th>Machine</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.firstname}  {item.lastname}</td>
                <td>{item.address}
                {item.District}, {item.state}</td>
                <td>{item.contactNo}</td>
                <td>{item.machine}</td>
                <td><button  type="button"  className="btn btn-primary"> Accept</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Agris;



