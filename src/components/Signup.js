//import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
//import { toast } from "react-hot-toast";
import { BiShow, BiHide } from "react-icons/bi";
import {Link,  useHistory} from "react-router-dom";
import Navbar from "./Navbar";
import "./signup.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
const Signup = () => {
  
  
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
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
  
    console.log(process.env.REACT_APP_SERVER_DOMIN)
    
    const handleSubmit= async(e)=>{
      e.preventDefault();
     const{ firstname, lastname ,email, password, confirmPassword } = data;
     console.log( firstname, lastname ,email, password, confirmPassword );
     await fetch("http://localhost:8080/signup",{
              method : "POST",
              crossDomain:true,
              headers : {
                "content-type" : "application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*"
              },
              body : JSON.stringify({
                firstname,
                lastname,
                email,
                password,
                confirmPassword,
              })
            })
            .then((res)=>res.json())
            .then((data)=>{
              console.log(data,"userRegister");
            })
    };

  return (

    <>
   <Navbar/>
   <div className=" d-flex justify-content-center pt-5">
      <div className="card">
        <h1 className="title"> SIGNUP</h1>
        <p className='subtitle'>Please Sign up using your Email and password</p>
          <form>

            <div className='inputs_container'>
            <input type={"text"}  id="firstname" name="firstname" value={data.firstname} onChange={handleOnChange}  placeholder='Enter Your first name'/>
            </div>
            
           <div className='inputs_container' >
           <input type={"text"} id="lastname" name="lastname" value={data.lastname}  onChange={handleOnChange} placeholder='Enter Your last name'/>
           </div>

           <div className='inputs_container'>
          <input type={"email"} id="email" name="email"  value={data.email} onChange={handleOnChange} placeholder='Enter Your Email' />
           </div>
            
           <div className='inputs_container' >
            <input type={showPassword ? "text" : "password"} id="password" name="password" value={data.password} onChange={handleOnChange}  placeholder='Enter Your password' />
            <span  className="flex text-xl cursor-pointer"  onClick={handleShowPassword} >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <div className='inputs_container'>
            <input  type={showConfirmPassword ? "text" : "password"}  id="confirmpassword" name="confirmPassword"  value={data.confirmPassword} onChange={handleOnChange} placeholder='Confirm Your password'/>
            {/* <span className="flex text-xl cursor-pointer"  onClick={handleShowConfirmPassword} >  {showConfirmPassword ? <BiShow /> : <BiHide />} */}
            {/* </span> */}
          </div>

          <div >
            <button  style={{backgroundColor:"black", color:"white",borderColor:"white",borderWidth:"2.5px", fontWeight:"bolder",opacity:"1"}}   type="button" className="login_button" onSubmit={handleSubmit}>Sign Up </button>
          </div>
        </form>


        <p className="subtitle">
          Don't have account ?{" "}
          <Link to={"/signup"} className="small">
            Sign Up
          </Link>
        </p>
        <div className='icons'>
          <GoogleIcon className="icon"></GoogleIcon>
          <FacebookIcon className="icon"></FacebookIcon>
          <TwitterIcon  className="icon"></TwitterIcon>
        </div>
        </div>
      </div>
      </>
  );
}

export default Signup;


