import  React,{ useState } from "react";
import whatsapp from "../assets/whatsapp.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import "../styles/stillhere.css";
const StillHere = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const boxStyle = {};

  return (
    <div className="">
      <div
        className="card main text-center d-flex align-items-center justify-content-center bg-black "
        style={{ height: "520px" }}
      >
        <div className="">
          <div className=" container my-2 p-4 ">
            <h1 className="rstitle d-flex align-items-center fw-bold justify-content-center textb ">
              <span className="m-2 textw">Still</span>
              <span className="m-2 " style={{ color: "#EF6831" }}>
                Here?
              </span>
            </h1>
          </div>

          <div className="rstext container textw  connect">
            Here’s a Discord link for you to stay connected with our journey.
            <div className="rsdiv ">
              <a href="https://discord.gg/HRuR5zsSM3" style={{textDecoration:"none"}} target="blank">
                <button
                  type="button"
                  className="btn fw-bold rsbtn2  "
                  style={{
                    backgroundColor: isHover ? "#F69C27" : "#000000",
                    color: isHover ? "#000000" : "#f5f5f7",
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  
                >
                  Connect
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="footer ">
          <div className="container ">
            <p className="textw text3">Contact Us</p>
            <div className="d-block">
              <a href="https://wa.me/919127510087?text=hi" target="blank">
                <img className="rsicon mx-3" src={whatsapp} />
              </a>
              <a href="https://instagram.com/xongroh" target="blank">
                <img className="rsicon mx-3" src={instagram} />
              </a>
              <a href="https://twitter.com/xongroh" target="blank">
                <img className="rsicon mx-3" src={twitter} />
              </a>
            </div>
          </div>
          <div className="container  copywright">
            <p className="textw text3">© xongroh.com | 2019-23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StillHere;
