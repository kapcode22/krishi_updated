import React from "react";
import weather from "../img/weather.jpg";
import pesticide from "../img/pesticide.jpg";
import schemes from "../img/schemes.jpg";
import tractor from '../img/tractor.jpg'
import career from '../img/career.jpg'
import consultancy from '../img/consultancy.jpg'
import Navbar from "./Navbar";
const Features = () => {
  return (
    <>
    <Navbar/>
    <div>
       <div className="row">
      <div className="homepageCard">
        <div class="container text-center homepageCard">
          <div class="row">
            <div class="homePageCardcol col">
              <div className="card homePageCardBody eitherSideCard ">
                <img src={weather} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Weather Report</h5>
                  <p className="card-text">
                   Know your area's weather conditions
                  </p>
                  <a href="/weather" className="btn homepageCardBtn btn-primary">
                    Explore
                  </a>
                </div>
              </div>
            </div>
            <div class="homePageCardcol col">
              <div className="card homePageCardBody eitherSideCard ">
                <img src={pesticide} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Pesticide and insecticide</h5>
                  <p className="card-text">
                    protect your crops from disease
                  </p>
                  <a href="https://play.google.com/store/apps/details?id=com.peat.GartenBank" className="btn homepageCardBtn btn-primary">
                   Explore
                  </a>
                </div>
              </div>
            </div>
            <div class="homePageCardcol col">
              <div className="card homePageCardBody eitherSideCard ">
                <img src={schemes} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Government scheme</h5>
                  <p className="card-text">
                   government facilities for farmer 
                  </p>
                  <a href="https://sbi.co.in/web/agri-rural/agriculture-banking/government-schemes" className="btn homepageCardBtn btn-primary">
                   Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="homepageCard">
        <div class="container text-center homepageCard">
          <div class="row">
            <div class="homePageCardcol col">
              <div className="card homePageCardBody eitherSideCard ">
                <img src={career} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Career in Agriculture</h5>
                  <p className="card-text">
                   learn more about agriculture
                  </p>
                  <a href="https://alison.com/careers/agriculture-food-and-natural-resources/agricultural-consultant" className="btn homepageCardBtn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class="homePageCardcol col">
              <div className="card homePageCardBody eitherSideCard ">
                <img src={consultancy} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Free consultancy</h5>
                  <p className="card-text">
                   clear your Doubt's;                  </p>
                  <a href="https://www.indiamart.com/proddetail/free-consultancy-farming-plantation-25535049691.html" className="btn homepageCardBtn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class="homePageCardcol col">
              <div className="card homePageCardBody eitherSideCard ">
                <img src={tractor} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Detect disease</h5>
                  <p className="card-text">
                    upload your crop image
                  </p>
                  <a href="/detect" className="btn homepageCardBtn btn-primary">
                    Explore
                  </a>
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

export default Features;
