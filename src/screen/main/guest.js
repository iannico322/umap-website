import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
} from "@react-three/drei";
import { Suspense, useState } from "react";
import { Map } from "./Map";
import { Navbar3 } from "../../components/navbar/navbar3";
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

function Guest() {
  const [buildingSearch, setBuildingSearch] = useState("")
  const [roomSearch, setRoomSearch] = useState("")

  const [roomfloor, setRoomfloor] = useState("")
  const [roomblock, setRoomblock] = useState("")
  

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
          <Navbar3
            
          />

        
            
       
        
        
        
       
        
          
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



export default Guest;
