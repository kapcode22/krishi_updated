import React, { useEffect, useState } from 'react'
import { BiShow, BiHide } from "react-icons/bi";
import {Link,  useHistory} from "react-router-dom";
//import { toast } from "react-hot-toast";
import Navbar from "./Navbar";
import "./Login.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
const Login = () => {
  // const navigate = useHistory();
  // useEffect(()={
  //   if(localStorage.getItem('user-info')){
  //     navigate.push('./features');
  //   }
  //  },[])
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
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
        console.log(data, "user logged in");
        if (data.status==="ok") {
          alert("login Sucesfully");
        }
      });
  };
  
  // const handleShowPassword = () => {
  //   setShowPassword((preve) => !preve);
  // };
  return (
    <>
    <Navbar/>
    <div className=" d-flex justify-content-center pt-5">
      <div className="lcard" style={{height:"40rem"}}>
        <h1 className="title"> LOGIN</h1>
        <p className='subtitle'>Please log in using your Email and password</p>
        
        <form>

          <div className='inputs_container pt-2'>
           <input type="email" id="email" name="email" value={data.email} placeholder="Email" onChange={handleOnChange} ></input>
         
          </div>

          <div className='inputs_container pt-5 pb-4 '>
           <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="password" onChange={handleOnChange}  value={data.password}></input>
            {/* <span className="flex text-xl cursor-pointer" onClick={handleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span> */}
          </div>

          <div className='px-4 pt-5' >
            <button  type="button" style={{backgroundColor:"black", color:"white",borderColor:"white",borderWidth:"2.5px", fontWeight:"bolder",opacity:"1"}}   className="login_button" onSubmit={handleSubmit}>Login </button>
          </div>
        </form>


        <p className="subtitle pb-3">
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
};

export default Login;

// margin-bottom: '15px', padding-right: '15px',
//     padding-left: '15px',
//     flex: '1',
//     max-width: '50%',
//     flex-basis: '50%'
// if(email && password ){
//   const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login`,{
//     method : "POST",
//     headers : {
//       "content-type" : "application/json"
//     },
//     body : JSON.stringify(data)
//   })

//   const dataRes = await fetchData.json()
//   console.log(dataRes)

//   toast(dataRes.message)

// if(dataRes.alert){
//   dispatch(loginRedux(dataRes))
//   setTimeout(() => {
//     navigate("/")
//   }, 1000);
// }

// console.log(userData)
// }
// else{
//     alert("Please Enter required fields")
// }
