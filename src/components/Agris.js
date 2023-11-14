import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Form from 'react-bootstrap/Form';



const Agris = (props) => {
  const [machine, setMachine] = useState("All");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  // Make sure you update the GET request URL to match your server endpoint
 
  useEffect(()=>{
    fetch(`http://localhost:8080/getagriuser?search=${search}&machine=${machine}`, {
      method: "GET",
    })
    
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "WagerData");
        console.log(search); 
        setData(data.data);
        // Handle the response data as needed
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },[search,machine])
 


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



  return (
    <>

      <Navbar />
      <div className="container" >
        <div className="main_div">
          <div className="search_add mt-4 d-flex justify-content-between">
            <div className="search col-lg-4">
              <form class="form-inline">
                <input class="form-control " type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearchQuery(e.target.value)} />
                <button class="btn btn-outline-warning " type="submit" >Search</button>
              </form>
            </div>
            <div >
            <a href="/machines" className="btn  btn-warning">
                      Apply for job
            </a>
            </div>
          </div>
        </div>




        {/* export,gender,status */}

        <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">

          <div className="filter_machine">
            <div className="filter">
              <h3>Filter By machine</h3>
              <div className="gender d-flex justify-content-between">
                <div class="btn-group">
                  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Select an Option
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="machine" id="option1" value={"All"} onChange={(e) => setMachine(e.target.value) }/>
                        <label class="form-check-label" htmlFor="option1">Threshers</label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="radioOptions" id="option2" value={"All"} onChange={(e)=>setMachine(e.target.value)} />
                        <label class="form-check-label" htmlFor="option2">Seed drills</label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="radioOptions" id="option2" value={"All"} onChange={(e)=>setMachine(e.target.value)}  />
                        <label class="form-check-label" htmlFor="option2">Sprayers</label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="radioOptions" id="option2" value={"All"} onChange={(e)=>setMachine(e.target.value)}  />
                        <label class="form-check-label" for="option2">Rotavator or Rotary</label>
                      </div>
                    </li>
                    <li>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="radioOptions" id="option2" value={"All"} onChange={(e)=>setMachine(e.target.value)}  />
                        <label class="form-check-label" for="option2">Tractor Trailer</label>
                      </div>
                    </li>

                  </ul>
                </div>

              </div>
            </div>
          </div>
          
        </div>


        <h3 className="my-5" style={{ fontWeight: "bold" }}>
          Agri List
        </h3>

        <table class="table table-striped table-dark">
          <thead class="thead-dark">
            <tr>
             
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Contact</th>
              <th scope="col">machine</th>
              <th scope="col">rate</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.firstname}  {item.lastname}</td>
                <td>{item.address}
                  {item.District}, {item.state}</td>
                <td>{item.contactNo}</td>
                <td>{item.machine}</td>
                <td>{item.amount}</td>
                <td><button type="button" className="btn btn-primary" onClick={() => handleAcceptClick(item)}> Accept</button></td>
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

export default Agris;



