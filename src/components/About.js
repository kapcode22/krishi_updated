import React from "react";
import tractor from "../img/tractor.jpg";
import firstpro2 from "../img/firstpro2.jpg";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={tractor}
                    className="img-fluid rounded-start"
                    alt="tractor"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Krishi</h5>
                    <p className="card-text">
                      We are providing a platform to Indian farmers where they
                      will get wagers and machinery at any time. We are also
                      including some extra features like weather reports,
                      pesticides and insecticides indicators, free highly
                      experienced consultants from the agriculture department,
                      where you can ask any question.
                    </p>
                    <div style={{ marginTop: "1rem" }}>
                      <button to="/login" className="btn btn-success">
                        Explore NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={firstpro2}
                    className="img-fluid rounded-start"
                    alt="firstpro2"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Social Project Club</h5>
                    <p className="card-text">
                      It is not your job to save everyone. Some people are not
                      even ready to be helped. Focus on being of service to
                      those who are, and be wise and humble enough to know when
                      the best service you can offer is to guide them toward
                      help in another direction.
                    </p>
                    <div style={{ marginTop: "1rem" }}>
                      <button to="/login" className="btn btn-success">
                        Explore NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
