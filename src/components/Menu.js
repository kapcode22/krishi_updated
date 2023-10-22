import React, { useState } from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const Menu = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    contactNo: "",
    machine:"",
    totalAmount:"",
  });
  const location = useLocation();
  const selectedUser = location.state.selectedUser;
  const [amount, setAmount] = useState([1]);

  if (!selectedUser) {
    return <div>No user data provided.</div>;
  }

  const incrementAmount = () => {
    setAmount(prevAmount => prevAmount + 1);
  };

  const decrementAmount = () => {
    setAmount(prevAmount => (prevAmount > 1 ? prevAmount - 1 : 1));
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    const totalAmount = amount * selectedUser.amount;
    const { firstname, lastname, contactNo, machine } = data;
    console.log(firstname, lastname, contactNo, machine, totalAmount);
    fetch("http://localhost:8080/payment", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json", // Fix the header key
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*", // Verify if this is needed
      },
      body: JSON.stringify({
        firstname,
        lastname,
        contactNo,
        machine,
        totalAmount,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          alert("Payment Successful");
          window.location.href = '/mach'; // Correct the redirection
        } else {
          alert("Something Went Wrong");
        }
      });
  };
  

    // console.log('payment start');
   
    // console.log('Total Amount:', totalAmount);
   
    // Add your payment logic here

  return (
    <>
      <Navbar />
      <div>
        <h3>Menu Page</h3>

        <div
          className="card justify-content align-tems-center"
          style={{ height: '40vh', width: '60vh', marginLeft: '30vh' }}
        >
          <div className="card-body">
            <p className="card-text">
              Name: {selectedUser.firstname} {selectedUser.lastname}
            </p>
            <p className="card-text">
              Address: {selectedUser.address} {selectedUser.District}, {selectedUser.state}
            </p>
            <p className="card-text">Contact No: {selectedUser.contactNo}</p>
            <p className="card-text">Machine: {selectedUser.machine}</p>
            <p className="card-text">Amount:  ({amount * selectedUser.amount})</p>

            <button type="button" className="btn btn-primary btn-sm " onClick={incrementAmount}>+</button>

            <button type="button" className="btn btn-primary btn-sm" onClick={decrementAmount}>-</button>

            <button type="button" className="btn btn-primary " onClick={handlePayment}>
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
