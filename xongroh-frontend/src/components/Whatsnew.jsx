import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Card2 from "./Card2";
import analytics from "../assets/analytics.png";
import spamfree from "../assets/spamfree.png";
import eventcalender from "../assets/eventcalender.png";
import brandmanagement from "../assets/Brand@4x.png";
import collab from "../assets/Collab@4x.png";
import marketplace from "../assets/Market@4x.png";
import masterclass from "../assets/Masterclass@4x.png";
import patron from "../assets/Patron@4x.png";
import portfolio from "../assets/Portfolio@4x.png";
import community from "../assets/Community@4x.png";

import "../styles/whatsnew.css";

const Whatsnew = () => {
  const card1 = {
    img: `${analytics}`,
    title: "Analytics",
    desc: "Track, observe, and analyse data from your Creations.",
  };

  const card2 = {
    img: `${spamfree}`,
    title: "Spam Free",
    desc: "On our platform, we have zero tolerance for fake accounts and spam activity.",
  };

  const card3 = {
    img: `${eventcalender}`,
    title: "Event Calender",
    desc: "View upcoming events and get tickets for your favourite Creators.",
  };

  const card4 = {
    img: `${brandmanagement}`,
    title: "Brand Management",
    desc: "Creator Management and Brand Endorsement.",
  };

  const card5 = {
    img: `${collab}`,
    title: "Collab",
    desc: "Create and grow with other Creators.",
  };

  const card6 = {
    img: `${marketplace}`,
    title: "Marketplace",
    desc: "Earn money by selling rights, commissions, goods, and much more... ",
  };

  const card7 = {
    img: `${masterclass}`,
    title: "Masterclass",
    desc: "Learn from the experts.",
  };

  const card8 = {
    img: `${patron}`,
    title: "Patrons",
    desc: "Create a loyal fan base that will support you on throughout your journey.",
  };

  const card9 = {
    img: `${portfolio}`,
    title: "Portfolio",
    desc: "Make a Professional Portfolio and share your work with others.",
  };
  const card10 = {
    img: `${community}`,
    title: "Community",
    desc: "Interact with communities and share your ideas.",
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className=" main ">
      <h1 className="d-flex align-items-center fw-bold justify-content-center  pt-4">
        <p className="textb  responsivetitle">What's </p>
        <p className=" mx-2 responsivetitle" style={{color:"#EF6831"}}>New?</p>
      </h1>
      <Carousel responsive={responsive} className="">
        <div className="d-flex justify-content-center ">
          <Card2 {...card9} />
        </div>
        <div className="d-flex justify-content-center">
          <Card2 {...card5} />
        </div>
        <div className="d-flex justify-content-center">
          <Card2 {...card10} />
        </div>
        <div className="d-flex justify-content-center">
          <Card2 {...card6} />
        </div>
        <div className="d-flex justify-content-center">
          <Card2 {...card2} />
        </div>
        <div className="d-flex justify-content-center">
          <Card2 {...card3} />
        </div>
        <div className="d-flex justify-content-center">
          <Card2 {...card7} />
        </div>
        <div className="d-flex justify-content-center">
          <Card2 {...card1} />
        </div>
        <div className="d-flex justify-content-center">
          <Card2 {...card4} />
        </div>
        <div className="d-flex justify-content-center">
          <Card2 {...card8} />
        </div>
      </Carousel>
    </div>
  );
};

export default Whatsnew;
