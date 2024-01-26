//import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from "react";
//import { toast } from "react-hot-toast";
import { BiShow, BiHide, BiLogoFacebookCircle,BiLogoGooglePlusCircle,BiLogoLinkedin} from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "../img/harvesting.jpg";

const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
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
    e.preventDefault();
    const { email, password } = data;
    console.log(email, password);
    fetch("http://localhost:8080/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "SuccessFully Logged in");
        if (data.status === "ok")  {
          alert("Login Successfully");
        // Redirect user to the "about" route
        } 
        localStorage.setItem("token", data.token); // Store user token in localStorage
        history.push("/about"); 
      }).catch(err=>console.log(err))
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
                     <BiLogoFacebookCircle></ BiLogoFacebookCircle>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <BiLogoGooglePlusCircle></ BiLogoGooglePlusCircle>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                    <BiLogoLinkedin></ BiLogoLinkedin>
                    </button>
                  </div>

                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
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
                      <label className="form-label" htmlFor=
"email">
                        Email address
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
                      <label className="form-label" htmlFor=
"password">
                        Password
                      </label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label"
                          htmlFor=
"rememberMe"
                        >
                          Remember me
                        </label>
                      </div>
                      <Link to={""} className="text-body">
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <Link to={"/signup"} className="link-danger">
                        Register
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

export default Login;

