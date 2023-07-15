import React from "react";
import Xongroh from "../assets/Xongroh.svg";
import '../styles/Hero.css';
const Hero = () => {
  return (
    <div className=" background ">
      <div
        className="text-center d-flex align-items-center   justify-content-center  vh-100 "
       
      >
        <div
          className=" p-2"
         
        >
          <div className="d-block container">
            <h1 className="textw display-3 d-flex align-items-center  justify-content-center">
              <img
                src={Xongroh}
                style={{ height: "3em", width: "2em", borderRadius: 0 }}
                className=" "
              />
              <p className="texto mt-3 pt-1 fw-bold responsivexongroh" >
                ongroh
              </p>
            </h1>
          </div>
          <div
           
          >
            <h1 className=" textw responsivetext">
              A social marketplace designed exclusively for{" "}
              <p className=" d-inline responsivetext ">Creators.</p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
