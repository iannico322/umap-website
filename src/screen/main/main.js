import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
} from "@react-three/drei";
import { Suspense, useState } from "react";
import { Map } from "./Map";
import { Navbar2 } from "../../components/navbar/navbar2";
import { Location } from "./Location";

import Map2d from './../../media/image/2dmapc.png'

import Cloud1 from "./../../media/image/cloud_2-big.png";
import "./main.css";
import { Cloud } from "./Cloud";
import { Card } from "../../components/card/card";
import { Search } from "../../components/search/search";
import ArrowForward from "../../media/image/arrow_forward.svg"
import ArrowBackward from "../../media/image/arrow_back.svg"
import { Load } from "../loader/loader";

function MainDasboard() {
  const [buildingSearch, setBuildingSearch] = useState("")
  const [roomSearch, setRoomSearch] = useState("")

  const [roomfloor, setRoomfloor] = useState("")
  const [roomblock, setRoomblock] = useState("")
  
  setInterval(displayDateTime, 1000);
  const updateQueryBuilding = newQuery => {
    console.log("itworks")
    setBuildingSearch(newQuery); // update the search query with the new value
  };

  const updateQueryRoom = newQuery => {
    console.log("itworks3")
    setRoomSearch(newQuery); // update the search query with the new value
  };

  const updateQueryFloor = newQuery => {
    console.log(newQuery)
    setRoomfloor(newQuery); // update the search query with the new value
  };

  const updateQueryBlock = newQuery => {
    console.log(newQuery )
    setRoomblock(newQuery); // update the search query with the new value
  };




  return (
    <>
      <Load />
      <div className="main-screen">
        <div className="page">
          
          <div className="cloud-model-login  main-cloud">
            <img src={Cloud1} alt="" />
          </div>
        </div>



        <div className="canva">
          <Navbar2
            link1="Profile"
            link1Address="/"
            link2="Log out"
            single=".Press"
          />

        <div className="events">
          <div className="event">
            <div className="box">
              <div className="event-header "
              onClick={()=>{
                let eventBoard = document.querySelector(".event-container")
                eventBoard.style.display = "flex"
                let eventIndicator = document.querySelector(".event")
                    eventIndicator.style.display = "none"
              }}
              
              >
                  
                  <div className="title-text">
                    Events
                    
                  </div>
                  <img src={ArrowForward} className="open-event" alt="arrow-forward"
                    
                  
                  />
              </div>
              </div>
        </div>
        <div className="event-container">
            <div className="box">
              <div className="event-header">
                  <div className="clock">
                    <div className="date">
                      DEC 15
                    </div>
                    <div className="time">
                      11:11 AM
                    </div>
                  </div>
                  <div className="title-text">
                    Upcoming Events
                   
                  
                  </div>
                  <img src={ArrowBackward} className="event-arrow" alt="arrow-forward"
                  onClick={()=>{
                    let eventIndicator = document.querySelector(".event")
                    eventIndicator.style.display = "flex"

                    let eventBoard = document.querySelector(".event-container")
                eventBoard.style.display = "none"

                    
                  }}
                  
                  
                  />
                    
              </div>
              <div className="event-content">
                 <Card
                  title = "Week Of Welcome"
                  time = "7:00 AM - 11:00 AM"
                  building = "B1"
                  onMouseOver = {()=>{
                    setRoomSearch("Week Of Welcome")
                    setBuildingSearch("9")
                  }
                  }
                  onMouseOut={()=>{
                    setBuildingSearch("")
                  }}
                 />
                 <Card
                 title = "Birthday Sa Gwapo"
                 time = "1:00 PM - 03:00 PM"
                 building = "B2"
                 onMouseOver = {()=>{
                  setRoomSearch("Birthday Sa Gwapo")
                  setBuildingSearch("23")
                }}
                onMouseOut={()=>{
                  setBuildingSearch("")
                }}
                 />
                 <Card
                  title = "Graduation"
                  time = "5:00 PM - 11:59 PM"
                  building = "B3"
                  onMouseOver = {()=>{
                    setRoomSearch("Graduation")
                    setBuildingSearch("16")
                  }}
                  onMouseOut={()=>{
                    setRoomSearch("")
                    setBuildingSearch("")
                  }}
                 />
              </div>
            </div>
            
          </div>
        
        
        
        
        </div>
        
          
          <div className="search">
           
            <Search 
              onBuilding={updateQueryBuilding}
              onRoom = {updateQueryRoom}
              onFloor = {updateQueryFloor}
              onBlock = {updateQueryBlock}
            />
          
 
          </div>

          <div className="map2d">
            <img src={Map2d} alt="" />
          </div>
          
          <Canvas>
            <Suspense fallback={null}>
            
              <Environment
                files={process.env.PUBLIC_URL + "/textures/light.hdr"}
              />
              
              <PerspectiveCamera
                makeDefault
                fov={40}
                position={[600, 0.85, -10.35]}
                rotation={[0,199,0]}
                // position={[0, 0, 0]}
              />

              <OrbitControls
                target={[50, 20, 20]}
                maxPolarAngle={Math.PI * 0.4}
              />
            
              <Float speed={0.9} position={[0,0,0]} rotationIntensity={0.6} floatIntensity={0.6}>
              
              <Cloud/>
                <Map/>
                < Location
                  search = {buildingSearch}
                  roomSearch = {roomSearch}
                  floor = {roomfloor}
                  block = {roomblock}
                  
                />
              </Float>
            </Suspense>
          </Canvas>



        </div>
      </div>
    </>
  );
}

const displayDateTime = () => {

  var date =  document.querySelector(".date")
  var time = document.querySelector(".time")
  var currentDateAndTime = new Date();

  var month = currentDateAndTime.getMonth();
  var day = currentDateAndTime.getDate();
  var hours = currentDateAndTime.getHours();
  var minutes = currentDateAndTime.getMinutes();
  var seconds = currentDateAndTime.getSeconds();

  var monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  var monthName = monthNames[month];

  var dateString = monthName + " " + day;


  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var amOrPm = (hours < 12) ? "AM" : "PM";
  if (hours > 12) {
    hours -= 12;
  }
  if (hours === 0) {
    hours = 12;
  }
  var timeString = hours + ":" + minutes + " " + amOrPm;


  date.innerHTML = dateString;
  time.innerHTML = timeString;

}


export default MainDasboard;
