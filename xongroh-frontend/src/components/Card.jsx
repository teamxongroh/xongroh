import React from "react";

import "../styles/earlyaccess.css";
const Card = (props) => {
  return (
    <div
      className="card m-4     rsscard "
      style={{ backgroundColor: "#000000" }}
    >
      <div className="row g-0   " style={{height:"300px"}}>
        <div className="col">
          <a href={props.slink} style={{textDecoration:"none"}} target='_blank'>
          <div
            className="card    d-flex justify-content-center align-tems-center"
            style={{ backgroundColor: "#000000" }}
          >
            <img src={props.img} className="rssimage  rounded-circle mx-auto" alt="..." />
            <div
              className=" text-center  mt-4"
             
            >
              <h5 className="  textw fw-bold">{props.title}</h5>
              <p className="cp" style={{ color: "#FF5F1F" }} >{props.cp}</p>
            </div>
          </div>
          </a>
          
        </div>
        <div className="col-md-8  p-1   testimony">
          <div className=" ">
            <p className=" ">
            {props.testimony}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
