//import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

 import "./wager.css"
const Wager = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    District: "",
    state: "",
    NumberofWager: "",
    work: "",
    pincode: "",
    contactNo: "",
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

  console.log(process.env.REACT_APP_SERVER_DOMIN);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      email,
      address,
      District,
      state,
      NumberofWager,
      work,
      pincode,
      contactNo
    } = data;
    console.log(
      firstname,
      lastname,
      email,
      address,
      District,
      state,
      NumberofWager,
      work,
      pincode,
      contactNo,
    );
    await fetch("http://localhost:8080/wagers", {
      method: "POST",
      crossDomain: true,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        address,
        District,
        state,
        NumberofWager,
        work,
        pincode,
        contactNo,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "request created successfully");
      });
  };

  return (
    <>
      <Navbar />
      <div className=" d-flex  justify-content-center " >
        <div >
          <h3 className="title"><u>Enter Your Valid Details</u></h3>
          <p className="subtitle"><b><i>*should be filled by only one member of the group</i></b> </p>
          <hr></hr>
          <form className="mb-4">

          <div>
              <p><b>Enter your personal details</b></p>
          </div>


            <div className='inputs_container' style={{borderRadius:"10rem"}}>
              <input type={"text"} id="firstname" name="firstname" value={data.firstname} onChange={handleOnChange} placeholder="Enter Your first name" />
            </div>

            <div className='inputs_container '>
              <input  type={"text"} id="lastname" name="lastname" value={data.lastname} onChange={handleOnChange} placeholder="Enter Your last name" />
            </div>

            <div className='inputs_container '>
              <input type={"text"} id="contactNo" name="contactNo" value={data.contactNo} onChange={handleOnChange} placeholder="Enter Your Contact Number"/>
            </div>

            <div className='inputs_container '>
              <input type={"email"} id="email" name="email" value={data.email} onChange={handleOnChange} placeholder="Enter Your Email" />
            </div>
            
            <hr></hr>
            <div className='inputs_container '>
              <p><b>Enter your Address details</b></p>
            </div>

            <div className='inputs_container ' style={{color:"#87AFC7"}}>
              <input type={"text"} id="address" name="address" value={data.address} onChange={handleOnChange}  placeholder="Enter Your address" />
            </div>
           

            <div className='inputs_container'>
              <input type={"text"} id="District"  name="District" value={data.District} onChange={handleOnChange} placeholder="Your District" />
            </div>

            <div >
              <label style={{color:"black"}}>State</label>
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

            <div className='inputs_container'>
              <input value={data.pincode} type={"text"} onChange={handleOnChange} name="pincode" placeholder="Enter Valid Six-Digit code" id="pincode" />
            </div>

            <hr></hr>

            <div className='inputs_container'>
              <b>Additional details</b>
            </div>

            <div className='inputs_container'> 
              <input type="text" id="NumberofWager" placeholder="Number of wagers in your group" name="NumberofWager" value={data.NumberofWager} onChange={handleOnChange} />

              {/* <button type="button"  className="btn btn-primary mx-4">+</button>
   <button type="button"  className="btn btn-primary mx-4">-</button> */}
            </div>

            <div >
              <label style={{color:"black"}}>Enter work</label>
              <select id="work" name="work" value={data.work} onChange={handleOnChange} className='inputs_container dropdown-item'>
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
            <button type="button" className="btn btn-success pt-2" onClick={handleSubmit} >Add JOB </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Wager;
