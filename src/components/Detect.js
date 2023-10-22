import React from 'react'
import Navbar from "./Navbar";

const Detect = () => {
  return (
      <>
      <Navbar/>
      <div
        className=" d-flex align-items-center justify-content-center "
        style={{ color: "#34495E ", paddingTop: "5rem" }}
      >
        <div
          className=" card auth-card input-field align-items-center "
          style={{
            width: "50rem",
            paddingBottom: "10px",
            color: "#212F3D",
            backgroundColor: "#979A9A",
          }}
        >
          <h2>Apply for Agri AgriMachinery</h2>
          <p> Upload Your Crops Image </p>
          <form className="row g-3">
         
           
            
            <div className="col-md-12">
            <div>
            <label htmlFor="formFileLg" class="form-label">Upload</label>
            <input class="form-control form-control-lg" id="formFileLg" type="file"/>
          </div>
              <label htmlFor="machine" className="form-label">
               Select the Crops you Grown
              </label>
              <select id="machine" name="machine" className="form-select">
                <option selected>Choose...</option>
                <option>Rice</option>
                <option>Wheat</option>
                <option>Sugarcane</option>
                <option>Oil Seed</option>
                <option>Tea/coffe</option>
                <option>Jute</option>
                <option>Pulses</option>
                <option>Millets</option>
              </select>
            </div>

            <div className="col-12">
              <button type="button"  className="btn btn-primary"> Upload </button>
            </div>
          </form>
        </div>
      </div>
      </>
  )
}

export default Detect
