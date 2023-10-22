

//import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
//import { toast } from "react-hot-toast";
import { BiShow, BiHide } from "react-icons/bi";
import {Link,  useHistory} from "react-router-dom";
import Navbar from "./Navbar";
const Login= () => {
  
  const navigate=useHistory();
  const [data, setData] = useState({
   
    email: "",
    password: "",
    
  });

    const [showPassword, setShowPassword] = useState(false);

    // const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword((preve) => !preve);
    };

    // const handleShowConfirmPassword = () => {
    //   setShowConfirmPassword((preve) => !preve);
    // };

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
     const{email, password, } = data;
     console.log( email, password );
      fetch("http://localhost:8080/signup",{
              method : "POST",
              crossDomain:true,
              headers : {
                "content-type" : "application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*"
              },
              body : JSON.stringify({
               
                email,
                password,
                
              })
            })
            .then((res)=>res.json())
            .then((data)=>{console.log(data,"SuccessFully Logged in");
               if(data.status==="ok"){
                alert("login Successfully");
                window.localStorage.setItem("token",data.data);
                window.location.href="./";
               }
            })
            // .catch(err=>console.log(err))
    };


  return (

    <>
   <Navbar/>
      <div className=" d-flex  justify-content-center " style={{color : '#34495E ',  paddingTop:'3rem',}} >
        <div style={{width:'25rem' ,paddingBottom:'5px', color:'#212F3D', backgroundColor:'#979A9A'}} >

        <h2>Login</h2>
          <form className="mb-3 mt-2 pl-2 pb-2" >

           <div>
          
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-3 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
            placeholder='Enter Your Email'
          />
           </div>
            
           
           <div >
           {/* <label htmlFor="password">Password</label> */}
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
              value={data.password}
              onChange={handleOnChange}
              placeholder='Enter Your password'
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>


          <button  type="button" className="btn btn-success"  onClick={handleSubmit}>Log IN</button>
          </form>
          <p className="text-left text-sm mt-2">
          Don't have account ?{" "}
          <Link to={"/signup"} className="text-red-500 underline">
            Sign UP
          </Link>
        </p>
        </div>
      </div>
      </>
  );
}

export default Login;



