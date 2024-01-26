import React, { useState } from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

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

  const [amount, setAmount] = useState(1);

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
    const stripe = await loadStripe("pk_test_51O3juaSFUzG000TSlpVlPO1QSykakaeTkfxpdn2Hfsu9BPO0zhA7W7tIWRKVt6xzOIWx7MMzb3Cedxh4S1KBELsn00NAGy31cm");

    const totalAmount = amount * selectedUser.amount;

    const { firstname, lastname, contactNo, machine } = data;

    const response = await fetch("http://localhost:8080/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        contactNo,
        machine,
        totalAmount,
      }),
    });

    const session = await response.json();

    try {
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Error redirecting to checkout:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar/>
      <div className="container mt-5">
        <h3 className="text-center mb-4">Menu Page</h3>
        <div className="card mx-auto" style={{ maxWidth: '500px' }}>
          <div className="card-body">
            <p className="card-text">
              Name: {selectedUser.firstname} {selectedUser.lastname}
            </p>
            <p className="card-text">
              Address: {selectedUser.address} {selectedUser.District}, {selectedUser.state}
            </p>
            <p className="card-text">Contact No: {selectedUser.contactNo}</p>
            <p className="card-text">Machine: {selectedUser.machine}</p>
            <p className="card-text">Amount: {amount * selectedUser.amount}</p>

            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-primary btn-sm mx-2" onClick={decrementAmount}>-</button>
              <span className="mx-3">{amount}</span>
              <button type="button" className="btn btn-primary btn-sm mx-2" onClick={incrementAmount}>+</button>
            </div>

            <div className="text-center mt-3">
              <form onSubmit={handlePayment}>
                <button type="submit" className="btn btn-primary">
                  Make Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
