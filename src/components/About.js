import React from "react";
import firstpro2 from "../img/firstpro2.jpg"
import tractor from "../img/tractor.jpg"
import Navbar from "./Navbar";
import "../components/About.css"


const About = () => {
  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="row">
        <div className="card mb-3" style={{ width: "50rem", height: "20rem", paddingBlockStart: "2rem",  marginLeft: "5rem",marginTop: "5rem", backgroundColor:"lightblue"}}>
          <div className="row g-0">
            <div className="col-md-4" >
              <img src={tractor} className="img-fluid rounded-start col-xs-11 col-sm-6 col-md-8" alt="..." style={{width:"15rem",height:"15rem",}}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Krishi</h5>
                <p className="card-text">
                  we are prioviding a platform to indian farmers
                 where they will get wagers and machninery at any time .
                 we are also including some extra features like weather report, 
                 pesticides and insectides indicator, free highly experienced consultant from agriculture 
                 department,where you can ask any question 
                </p>
                <div  style={{marginTop:"1rem"}}>
                  <button to="/login"   className="btn btn-success" >Explore NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="card mb-3" style={{ width: "50rem", height: "20rem", paddingBlockStart: "2rem",  marginLeft: "25rem", marginTop: "5rem", backgroundColor:"lightblue"}}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Social Prioject Club</h5>
                <p className="card-text">
                It is not your job to save everyone.
             Some people are not even ready to be helped. 
             Focus on being of service to those who are, 
             and be wise and humble enough to know when the best service
             you can offer is to guide them toward help in another direction.
                </p>
                <div style={{marginTop:"2rem"}}>
                  <button to="/login"   className="btn btn-success" >Explore NOW</button>
                </div>
                
              
              </div>
            </div>
            <div className="col-md-4">
              <img src={firstpro2} className="img-fluid rounded-start col-xs-12 col-sm-6 col-md-8 fit box-cover" alt="" style={{width:"15rem",height:"15rem",}}/>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default About;

/*

 <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
    <div className="e-card e-card-horizontal" style={{ width: `500px` }}>
        <img src="D:\learnwebdevreact\krishi\Frontened\src\img\firstpro2.jpg" alt="" style={{ height: `180px` }}/>
        <div className="e-card-stacked">
            <div className="e-card-header">
                <div className="e-card-header-caption">
                    <div className="e-card-header-title">Social Project Club</div>
                </div>
            </div>
            <div className="e-card-content">
             It is not your job to save everyone.
             Some people are not even ready to be helped. 
             Focus on being of service to those who are, 
             and be wise and humble enough to know when the best service
             you can offer is to guide them toward help in another direction.
            </div>
        </div>
    </div>
  </div>
     

 <div className='container my-5 card-style'>
      <div className='card'>
        <div className='card-header'>
          <b><i>About Us</i></b>
        </div>
        <div className='card-body'>
          <p>
          It is not your job to save everyone. 
          Some people are not even ready to be helped. 
          Focus on being of service to those who are, 
          and be wise and humble enough to know when the best service
           you can offer is to guide them toward help in another direction.
          </p>
          <footer className="blockquote-footer">Social Project Club </footer>
        </div>
      </div>
      </div>
    
*/
