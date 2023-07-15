import React from "react";
import "../styles/aboutus.css";
import me from "../assets/me3.PNG";
import rupam from "../assets/rupam.png";
import puali from "../assets/puali.png";
import hrishikesh from "../assets/hrishikesh.png";

const AboutUs = () => {
  return (
    <div className="bgw my-3 py-3 d-flex align-items-center justify-content-center main">
      <div className="bgw card text-center d-flex align-items-center justify-content-center  border border-0 ">
        <div className="d-block container mt-3">
          <h1 className=" d-flex align-items-center fw-bold justify-content-center textb">
            <p className=" responsivetitle">About</p>
            <p className="mx-2 responsivetitle" style={{ color: "#FF5F1F" }}>
              Us
            </p>
          </h1>
        </div>
        <div className=" container ">
          <p className=" textb text2 p-2">
            We are Team Xongroh from the north-east of India. We are on a
            mission to provide a platform for our creators to establish a
            professional portfolio, work with other creators, communicate with
            diverse creator communities, and earn money through our marketplace.
          </p>
        </div>
        <div className="d-flex justify-content-center  mt-3">
          <div>
            <a
              href="https://wa.me/8638860775?text=hi"
              target="blank"
              style={{ textDecoration: "none" }}
            >
              <img src={rupam} className="us  rounded-circle" />
              <span className="d-block names textb">Rupam</span>
            </a>
          </div>
          <div>
            <a
              href="https://instagram.com/hiradipankar?igshid=MzNlNGNkZWQ4Mg==
"
              target="blank"
              style={{ textDecoration: "none" }}
            >
              <img src={me} className="us  rounded-circle" />
              <span className="d-block names textb">Dipankar</span>
            </a>
          </div>

          <div>
            <a
              href="https://instagram.com/thexmusician?igshid=MjEwN2IyYWYwYw==
"
              target="blank"
              style={{ textDecoration: "none" }}
            >
              <img src={hrishikesh} className="us  rounded-circle" />
              <span className="d-block names textb">Hrishikesh</span>
            </a>
          </div>

          <div>
            <a
              href="https://instagram.com/shred_for_happiness?igshid=MjEwN2IyYWYwYw==
"
              target="blank"
              style={{ textDecoration: "none" }}
            >
              <img src={puali} className="us  rounded-circle" />
              <span className="d-block names textb">Angshuman</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
