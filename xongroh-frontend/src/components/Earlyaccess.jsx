import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';


import "../styles/earlyaccess.css";
import bisrut from '../assets/testimonials/bisrut.jpg';
import prabal from '../assets/testimonials/prabal.jpg';
import prie from '../assets/testimonials/prie.jpg';
import abhi from '../assets/testimonials/abhi.jpg';
import chandan from '../assets/testimonials/chandan.png';
import digbijay from '../assets/testimonials/digbijay.jpg';
import anonyo from '../assets/testimonials/anonyo.jpeg';
import anwesha from '../assets/testimonials/anwesha.jpg';
import { RWebShare } from "react-web-share";

const Earlyaccess = () => {
  let name, value;
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  const Bishrut = {
    img: `${bisrut}`,
    title: "Bishrut Saikia",
    cp:"Singer/ Songwriter",
    slink:"https://instagram.com/bishrutsaikia?igshid=NTc4MTIwNjQ2YQ==",
    testimony: "Xongroh has been a great support in my music since beginning. I feel obliged as well as grateful to be a part of it in the long run. ",
  };

  const Prabal = {
    img: `${prabal}`,
    title: "Prabal Dutta",
    cp:"Musician",
    slink:"https://www.facebook.com/prabal.dutta.980?mibextid=ZbWKwL",
    testimony: "This is a platform which will bring planty of opportunities to people like Musicians, photographers, writers etc. My motive to join this platform is that it will open many links and I can meet new people to work with. All thanks to the Team of this project 👍"
  }
  const Prie = {
    img: `${prie}`,
    title: "Priyangana Kashyap",
    cp:"Writer",
    slink:"https://instagram.com/alprazolam_1111?igshid=ZGUzMzM3NWJiOQ==",
    testimony: "This seems like a long lost dream for writers that has finally come true. And i imagine that that would suffice as an apt reason for joining Xongroh!"
  }

  const Abhi = {
    img: `${abhi}`,
    title: "Abhisek",
    cp:"Author",
    slink:"https://instagram.com/abhisek_fh",
    testimony: "It's perfect for anyone who has a great vision, and wants to make it a reality. I'm especially impressed with the tools they offer to grow oneself. The community of like-minded creators is very helpful and supportive. I highly recommend this platform to those looking to create amazing works of art in a supportive and inspiring environment."
  }

  const Chandan = {
    img: `${chandan}`,
    title: "Chandan Rajbongshi ",
    cp:"Visual Designer",
    slink:"https://instagram.com/chandan_rajbongshi22",
    testimony: "This new platform is a game-changer in the creative industry. I highly recommend signing up because it offers a unique opportunity for creators to showcase their talents, collaborate with others, and earn money through its innovative marketplace. Don't miss out on this exciting platform that empowers creators..."
  }

  const Digbijay = {
    img: `${digbijay}`,
    title: "Digbijay Gogoi",
    cp:"Musician, Producer ",
    slink:"https://instagram.com/digbijay_gogoi?igshid=NGExMmI2YTkyZg==",
    testimony: "I believe in Xongroh, their new platform will definitely boost up the indie music scene in Assam and across India. I wish a successful future and I know they will provide a good bussiness environment in which artists can actually earn by doing their art.  "
  }
  const Ananyo = {
    img: `${anonyo}`,
    title: "Ananyo Kashyap Bora",
    cp:"Photographer",
    slink:"https://instagram.com/o_akb?igshid=MzNlNGNkZWQ4Mg==",
    testimony: "শিল্পী  সকলৰ বাবে পোৰ্টফলিয়' বনোৱা, মাৰ্কেট প্লেচ সৃষ্টি কৰা, নতুন সামাজিক কেন্দ্ৰ সৃষ্টি কৰা আদিবোৰ অতি ব্যতিক্ৰমী চিন্তা। সংগ্ৰহৰ এই নতুন যাত্রাটো আৰু চিন্তাই সকলো শিল্পীকে ধনাত্মক দিশত প্রভাৱাম্বিত কৰিব তাৰে আশা কৰিলোঁ। সংগ্ৰহৰ প্ৰতিষ্ঠাপক সদস্য হিচাপে সংগ্ৰহ শিল্পী-ক'লাৰ লগতে ব্যৱসায়িক দিশটো সফল হওঁক তাৰে কামনা আৰু শুভেচ্ছা যাছিলোঁ..."
  }

  const Anwesha = {
    img: `${anwesha}`,
    title: "Anwesha Changmai",
    cp:"Artist",
    slink:"https://instagram.com/changutoon_caricature?igshid=NTc4MTIwNjQ2YQ==",
    testimony: "I want to enhance my artistic abilities ,meet new people and earn additional income. Apart from that , I want to support local brands and creators. This platform seems to have a lot of potential..."
  }

  // const card9 = {
  //   img: `${prie}`,
  //   title: "Priyangana Kashyap",
  //   cp:"Writer",
  //   slink:"https://instagram.com/alprazolam_1111?igshid=ZGUzMzM3NWJiOQ==",
  //   testimony: "This seems like a long lost dream for writers that has finally come true. And i imagine that that would suffice as an apt reason for joining Xongroh! "
  // }

  // const card10 = {
  //   img: `${prie}`,
  //   title: "Priyangana Kashyap",
  //   cp:"Writer",
  //   slink:"https://instagram.com/alprazolam_1111?igshid=ZGUzMzM3NWJiOQ==",
  //   testimony: "This seems like a long lost dream for writers that has finally come true. And i imagine that that would suffice as an apt reason for joining Xongroh! "
  // }

  const [totalUser, setTotalUser] = useState();

  const handleRegistration = async (e) => {
    e.preventDefault();
    const { name, email, phone } = user;
    try {
      setLoading(true);
      const res = await fetch("/register", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.status === 501 || !data) {
        window.alert("Registration fail");

      } 
      else if (res.status ===403) {
        window.alert("You've already registered")
      }
      else {
        window.alert("Registration Sucessful");
        userLeft();
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const userLeft = async () => {
    try {
      setLoading(true);
      const res = await fetch("/userCount");
      const data = await res.json();
      setLoading(false);
  
      if (data.count !== undefined) {
        setTotalUser(1000 - data.count);
      } else {
        console.log("User count not available");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  

  useEffect(() => {
    userLeft();
  }, []);

  return (
    <>
    
      <div className="p-3 rsmain" style={{ background: "#000000" }}>
        <div
          className="card text-center  d-flex align-items-center  justify-content-evenly earlyaccess "
          style={{ backgroundColor: "#000000", borderRadius: 0 }}
        >
          <div className="d-block container mb-1 p-3 ">
            <h1 className=" fw-bold responsivetitle ">
              <span className="textw  ">get-early-</span>
              <span style={{ color: "#EF6831" }}>access!</span>
            </h1>
          </div>

          <form method="POST" className="p-4 rsform ">
            <div className="mb-3 d-flex justify-content-center">
              <input
                type="text"
                className="form-control form-control-lg rsinputs "
                placeholder="Name"
                name="name"
                onChange={handleInputs}
                value={user.name}
              />
            </div>
            <div className=" mb-3 d-flex justify-content-center">
              <input
                type="email"
                className="form-control form-control-lg rsinputs"
                placeholder="Your best e-mail!"
                name="email"
                onChange={handleInputs}
                value={user.email}
              />
            </div>

            <div className=" mb-3 d-flex justify-content-center">
              <input
                type="number"
                className="form-control form-control-lg rsinputs"
                placeholder="Your phone (optional)"
                name="phone"
                onChange={handleInputs}
                value={user.phone}
              />
            </div>
            <div className=" d-flex justify-content-center ">
              <button
                type="submit"
                className="  fw-bold textw rsbtn d-flex align-items-center  justify-content-center"
                onClick={handleRegistration}
                
              >
                I’M IN!
              </button>
            </div>
          </form>

          
        </div>
        <div className=" container">
            <h1 className=" fw-bold responsivetitle2 ">
              <span className="textw  ">Only {totalUser} </span>
              <span className="mx-1 " style={{ color: "#EF6831" }}>
                Sign-ups
              </span>
              <span className="textw mx-1 text-wrap">left , hurry!</span>
            </h1>
          </div>
        <Carousel responsive={responsive}>
        <div className="d-flex justify-content-center ">
          <Card {...Bishrut} />
        </div>
        <div className="d-flex justify-content-center ">
          <Card {...Anwesha} />
        </div>
        <div className="d-flex justify-content-center ">
          <Card {...Chandan} />
        </div>
        <div className="d-flex justify-content-center ">
          <Card {...Ananyo} />
        </div>
        <div className="d-flex justify-content-center ">
          <Card {...Prie} />
        </div>
        <div className="d-flex justify-content-center ">
          <Card {...Prabal} />
        </div>
        <div className="d-flex justify-content-center ">
          <Card {...Digbijay} />
        </div>
        <div className="d-flex justify-content-center ">
          <Card {...Abhi} />
        </div>
      
      </Carousel>
        <RWebShare data={{ title: "share" }} >
          <h1
            className="d-flex justify-content-center  smalltext"
            style={{ backgroundColor: "#000000" }}
          >
            <span className="textw " style={{textAlign:"center"}}>
              Psstt... Wanna let your creator friends know about this?
              <span
                className="d-inline ms-1 fw-bold"
                style={{ color: "#FF5F1F" }}
              >
                Share! {" "}
              </span>
            </span>
          </h1>
        </RWebShare>
      </div>
    </>
  );
};

export default Earlyaccess;
