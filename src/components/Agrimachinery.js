

import React, { useEffect, useState } from 'react'
//import { toast } from "react-hot-toast";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
const Agrimachinery = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactNo: "",
    address: "",
    District: "",
    state: "",
    pincode: "",
    machine: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  console.log(process.env.REACT_APP_SERVER_DOMIN)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, contactNo, address, District, state, pincode, machine } = data;
    console.log(firstname, lastname, email, contactNo, address, District, state, pincode, machine);
    await fetch("http://localhost:8080/agris", {
      method: "POST",
      crossDomain: true,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        contactNo,
        address,
        District,
        state,
        pincode,
        machine,
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      })
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center">
        <div>

        <h3 className="title"><u>Enter Your Valid Details</u></h3>
        <hr></hr>
          <form>

          <div style={{color:"orange"}}>
              <p><b>Enter your personal details</b></p>
          </div>

            <div className='inputs_container' style={{borderRadius:"5rem"}}>
              <input type={"text"} id="firstname" name="firstname" value={data.firstname} onChange={handleOnChange} placeholder='Enter Your first name' />
            </div>

            <div className='inputs_container '>
              <input type={"text"} id="lastname" name="lastname" value={data.lastname} onChange={handleOnChange} placeholder='Enter Your last name'  />
            </div>

            <div className='inputs_container '>
              <input type={"email"} id="email" name="email" value={data.email} onChange={handleOnChange} placeholder='Enter Your Email'/>
            </div>

            <div className='inputs_container '>
              <input type={"text"} id="contactNo" name="contactNo" value={data.contactNo} onChange={handleOnChange} placeholder="Enter Your Contact Number" />
            </div>
             <hr></hr>
            <div className='inputs_container '>
              <input type={"text"} id="address" name="address" value={data.address} onChange={handleOnChange} placeholder="Address" />
            </div>

            <div className='inputs_container '>
              <input type={"text"} id="District" name="District" value={data.District} onChange={handleOnChange} placeholder="Your District"  />
            </div>

            <div>
              <select id="state" value={data.state} name="state" onChange={handleOnChange}  className='inputs_container dropdown-item'>
                <option selected>Choose...</option>
                <option>UttarPradesh</option>
                <option>MadhyaPradesh</option>
                <option>AndhraPradesh</option>
                <option>ArunachalPradesh</option>
                <option>Gujrat</option>
                <option>Maharashtra</option>
                <option>Rajasthan</option>
                <option>Bihar</option>
                <option>Punjab</option>
                <option>HimachalPradesh</option>
                <option>Haryana</option>
                <option>Delhi</option>
                <option>Uttarakhand</option>
                <option>Jammu&Kashmir</option>
                <option>WestBengal</option>
                <option>Goa</option>
                <option>Kerela</option>
                <option>Orrisa</option>
                <option>Jharkhand</option>
                <option>Telengana</option>
                <option>Karnataka</option>
                <option>Tamilnadu</option>
              </select>
            </div>

            <div  className='inputs_container'>
              <input type={"text"} id="pincode" name="pincode" value={data.pincode} onChange={handleOnChange} placeholder="Enter Valid Six-Digit code" />
            </div>
            <hr></hr>

            <div>
              <b>Additonal  details</b>
            </div>

            <div >
              <select id="machine" value={data.machine} name="machine" onChange={handleOnChange} className='inputs_container dropdown-item'>
                <option selected>Choose...</option>
                <option>Soil/land preparation</option>
                <option>Sowing</option>
                <option>Manuring</option>
                <option>Irrigation</option>
                <option>Protecting the weeds/Crops</option>
                <option>Harvesting</option>
                <option>Weeding</option>
                <option>Crop Storage</option>
              </select>
            </div>
              <hr></hr>
            <button type="button" className="btn btn-success pt-2" onClick={handleSubmit}>Sign Up</button>
          </form>
          <p className="text-left text-sm mt-2">
            Already have account ?{" "}
            <Link to={"/login"} className="text-red-500 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Agrimachinery;

