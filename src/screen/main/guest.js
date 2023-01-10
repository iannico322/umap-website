import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
} from "@react-three/drei";
import { Suspense, useState,useEffect } from "react";
import { Map } from "./Map";
import { Navbar3 } from "../../components/navbar/navbar3";
import { Location } from "./Location";

import Map2d from './../../media/image/2dmapc.png'

import Cloud1 from "./../../media/image/cloud_2-big.png";
import "./main.css";
import { Cloud } from "./Cloud";

import { Search } from "../../components/search/search";

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


  const [loading, setLoading] = useState("");
 
  useEffect(() => {
    const onPageLoad = () => {
      setLoading("hide")
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <>
      <Load
      load = {loading}
     />
    
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
