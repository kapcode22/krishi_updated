import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import { JobItem } from "./JobItem";
// import Navbar from "./Navbar"


const Jobs = (props) => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/getwageruser", {
      method: "GET",
    })
    
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "WagerData");
        setData(data.data);
      });
  }, []);

  const handleAcceptClick = (item) => {
    setSelectedUser(item);
    setData((prevData) => prevData.filter((dataItem) => dataItem !== item));
  };
  const filteredData = data.filter((item) => {
    // Customize this condition based on your search requirements.
    return (
      // item.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      // item.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.District.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.contactNo.includes(searchQuery)
    );
  });

  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };

  return (
    <>
      <Navbar />
      <div className="container" style={myStyle}>
      <div className="main_div">
          <div className="search_add mt-4 d-flex justify-content-between">
            <div className="search col-lg-4">
              <form class="form-inline">
                <input class="form-control " type="search" placeholder="Enter your Location" aria-label="Search" onChange={(e)=>setSearchQuery(e.target.value)} />
                <button class="btn btn-outline-warning " type="submit" >Search</button>
              </form>
            </div>
            <div >
            <a href="/wager" className="btn  btn-warning">
                      Apply for job
                  </a>
            </div>
          </div>
        </div>
        <h3 className="my-5" style={{ fontWeight: "bold" }}>
          Wagers List
        </h3>
        <table class="table table-striped table-dark"style={{ width: 500 }}>
        <thead class="thead-dark">
            <tr>
            
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Contact</th>
              <th scope="col">wagers</th>
              <th scope="col">work</th>
              <th scope="col">rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.firstname}  {item.lastname}</td>
                <td>{item.address}
                {item.District}, {item.state}</td>
                <td>{item.contactNo}</td>
                <td>{item.NumberofWagers}</td>
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

