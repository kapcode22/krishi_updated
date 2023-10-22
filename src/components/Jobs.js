import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import { JobItem } from "./JobItem";
// import Navbar from "./Navbar"


const Jobs = (props) => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/getwageruser", {
      method: "GET",
    })
    
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "agriData");
        setData(data.data);
      });
  }, []);

  const handleAcceptClick = (item) => {
    setSelectedUser(item);
    setData((prevData) => prevData.filter((dataItem) => dataItem !== item));
  };

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
              <th>rate</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.firstname}  {item.lastname}</td>
                <td>{item.address}
                {item.District}, {item.state}</td>
                <td>{item.contactNo}</td>
                <td>{item.Wagers}</td>
                <td>{item.work}</td>
                <td>{item.amount}</td>
                <td><button  type="button"  className="btn btn-primary" onClick={()=>handleAcceptClick(item)}> Accept</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedUser && (
          <Link to={{
            pathname: "/menu",
            state: { selectedUser } // Pass the selectedUser data here
          }}>
            <button className="btn btn-primary">Go to Menu Page</button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Jobs;

