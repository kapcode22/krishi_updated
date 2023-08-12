import React from "react";
import weather from "../img/weather.jpg";
import pesticide from "../img/pesticide.jpg";
import schemes from "../img/schemes.jpg";
import tractor from '../img/tractor.jpg'
import career from '../img/career.jpg'
import consultancy from '../img/consultancy.jpg'
import Navbar from "./Navbar";
import "./Home.css"
const Features = () => {
  return (
    <>
      <Navbar />

      <div className="homepageCard">
          <div class=" text-center homepageCard">
            <div class="row">
              <div class="homePageCardcol col featureCard">
                <div className=" homePageCardBody eitherSideCard " >
                  <img src={tractor} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn homepageCardBtn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="homePageCardcol col featureCard">
                <div className=" homePageCardBody  " >
                  <img src={weather} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn homepageCardBtn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="homePageCardcol col featureCard">
                <div className=" homePageCardBody eitherSideCard " >
                  <img src={pesticide} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn homepageCardBtn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="homePageCardcol col featureCard">
                <div className=" homePageCardBody eitherSideCard " >
                  <img src={schemes} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn homepageCardBtn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="homePageCardcol col featureCard" >
                <div className=" homePageCardBody eitherSideCard " >
                  <img src={career} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn homepageCardBtn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="homePageCardcol col featureCard">
                <div className=" homePageCardBody eitherSideCard " >
                  <img src={consultancy} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn homepageCardBtn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Features;
