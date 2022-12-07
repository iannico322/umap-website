import React from "react";
import { Navbar } from "../../components/navbar/navbar";
import Cloud1 from "./../../media/image/cloud_1.png";
import Cloud2 from "./../../media/image/cloud_2.png";
import Map1 from "./../../media/image/map3d_1.png";
import {  Link } from "react-router-dom";
import "./welcome.css";

export const Welcome = () => {
    <Link to="/login" className="Press"></Link>
  return (
    <>
   
      <div className="welcome-screen">
        <Navbar 
            link1 = "Sign In"
            link1Address = "/login"
            link2 = "Download"
            single = ".download"
            iconlink2 = "fa-regular fa-circle-down"
        />
        <div className="cloud-model">
          <img src={Cloud1} alt="" />
        </div>

        <div className="map-model">
          <img src={Map1} alt="" />
          <img src={Cloud2} alt="" />
        </div>

        <div className="welcome-container">
          <div className="welcome-box">
            <h1
                
            >
              Welcome to
              <br />
              <span>USTP MAP</span>
            </h1>
            <div>
            
              <button onClick={()=>{
                    document.querySelector('.Press').click()
                }}
                >Student</button>
               <button >I'm a guest</button>
              
            </div>
          </div>
        </div>
      </div>
      <Link to="/login" className="Press"></Link>
    </>
  );
};
