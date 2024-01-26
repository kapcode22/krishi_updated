import React, { useEffect, useState } from "react";
//import { toast } from "react-hot-toast";

import { Link, useHistory } from "react-router-dom";
import {
  BiShow,
  BiHide,
  BiLogoFacebookCircle,
  BiLogoGooglePlusCircle,
  BiLogoLinkedin,
} from "react-icons/bi";
import logo from "../img/harvesting.jpg";
import Navbar from "./Navbar";
const Signup = () => {
  const history = useHistory();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    userType: "",
    secretKey: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

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
    if (data.userType === "Admin" && data.secretKey !== "kapil123") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();
      const {
        firstname,
        lastname,
        email,
        number,
        password,
        confirmPassword,
        userType,
      } = data;
      console.log(
        firstname,
        lastname,
        email,
        number,
        password,
        confirmPassword,
        userType
      );
      fetch("http://localhost:8080/signup", {
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
          number,
          password,
          confirmPassword,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Registration Successful");
            localStorage.setItem("userInfo", JSON.stringify(data));
            history.push('/login')
            history.go(0);
          } else {
            alert("something Went Wrong");
          }
        });
    }
  };

  return (
    <>
      <Navbar />

      <section className="mt-5">
        <div className="container-fluid h-custom">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-6 col-xl-5 mb-5 mb-lg-0">
              <img src={logo} alt="Logo" className="img-fluid" />
            </div>

            <div className="col-lg-6 col-xl-4">
              <form>
                <div className="mb-3">
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <BiLogoFacebookCircle></BiLogoFacebookCircle>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <BiLogoGooglePlusCircle></BiLogoGooglePlusCircle>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <BiLogoLinkedin></BiLogoLinkedin>
                    </button>
                  </div>

                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                  </div>

                  <div className="mb-3">
                    <div className="form-outline">
                      <input
                        type={"text"}
                        id="firstname"
                        name="firstname"
                        className="form-control form-control-lg"
                        value={data.firstname}
                        onChange={handleOnChange}
                        placeholder="Enter Your first name"
                      />
                      <label className="form-label" htmlFor="firstname">
                        First Name
                      </label>
                    </div>
                  </div>


                  <div className="mb-3">
                    <div className="form-outline">
                      <input
                        type={"text"}
                        id="lastname"
                        name="lastname"
                        className="form-control form-control-lg"
                        value={data.lastname}
                        onChange={handleOnChange}
                        placeholder="Enter Your last name"
                      />
                      <label className="form-label" htmlFor="lastname">
                        Last Name
                      </label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="form-outline">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control form-control-lg"
                        value={data.email}
                        onChange={handleOnChange}
                        placeholder="Enter Your Email"
                      />
                      <label className="form-label" htmlFor="email">
                        Email address
                      </label>
                    </div>
                  </div>


                  <div className="mb-3">
                    <div className="form-outline">
                      <input
                        type={"number"}
                        id="number"
                        name="number"
                        className="form-control form-control-lg"
                        value={data.number}
                        onChange={handleOnChange}
                        placeholder="Enter Your Contact number"
                      />
                      <label className="form-label" htmlFor="number">
                        Contact Number
                      </label>
                    </div>
                  </div>


                  <div className="mb-3">
                    <div className="form-outline">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="form-control form-control-lg"
                        value={data.password}
                        onChange={handleOnChange}
                        placeholder="Enter Your password"
                      />
                      <span
                        className="flex text-xl cursor-pointer"
                        onClick={handleShowPassword}
                      >
                        {showPassword ? <BiShow /> : <BiHide />}
                      </span>
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                    </div>
                  </div>


                  <div className="mb-3">
                    <div className="form-outline">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmpassword"
                        name="confirmPassword"
                        className="form-control form-control-lg"
                        value={data.confirmPassword}
                        onChange={handleOnChange}
                        placeholder="Confirm Your password"
                      />
                      <span
                        className="flex text-xl cursor-pointer"
                        onClick={handleShowConfirmPassword}
                      >
                        {showConfirmPassword ? <BiShow /> : <BiHide />}
                      </span>
                      <label className="form-label" htmlFor="confirmpassword">
                        Password
                      </label>
                    </div>
                  </div>



                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={handleSubmit}
                    >
                      SignUp
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Already have an account?{" "}
                      <Link to={"/login"} className="link-success">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
