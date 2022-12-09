import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
} from "@react-three/drei";
import { Suspense } from "react";
import { Map } from "./Map";
import { Words } from "./Words";

import { Navbar } from "../../components/navbar/navbar";
import { Load } from "../loader/loader";

import Magnifying from './../../media/image/Magnifier.png'
import Map2d from './../../media/image/2dmap.png'

import Cloud1 from "./../../media/image/cloud_2-big.png";
import "./main.css";
import { Cloud } from "./Cloud";
import { Search } from "@mui/icons-material";

function MainDasboard() {
  let x = true;
  // const sh =  document.querySelector('.inputd').classList
  // let x = true;
  // const Searchs = () =>{

  //   if(x){
  //     sh.remove('small')
  //     x = false;
  //   }else{
  //     sh.add('small')
  //     x = true;
  //   }
              
  // }

  return (
    <>
      <Load />
      <div className="main-screen">
        <div className="page">
          
          <div className="cloud-model-login">
            <img src={Cloud1} alt="" />
          </div>
        </div>
        <div className="canva">
          <Navbar
            link1="Profile"
            link1Address="/"
            link2="Log out"
            single=".Press"
          />
          <div className="search">
            <div  className="inputd small" >
            <input type="text"  placeholder="Search something" />
            <img src={Magnifying} alt="" onClick={()=>{
              const sh =  document.querySelector('.inputd').classList
              
              console.log("asdsd")
                if(x){
                    sh.remove('small')
                    x = false;
                  }else{
                    sh.add('small')
                    x = true;
                  }
            }} />
            
            </div>
          </div>

          <div className="map2d">
            <img src={Map2d} alt="" />
          </div>
          
          <Canvas>
            <Suspense fallback={null}>
            <Cloud
              
            />
              <Environment
                files={process.env.PUBLIC_URL + "/textures/light.hdr"}
              />
              
              <PerspectiveCamera
                makeDefault
                fov={15}
                position={[800.75, 110.85, 10.35]}
              />

              <OrbitControls
                target={[50, 20, 20]}
                maxPolarAngle={Math.PI * 0.4}
              />
            
              <Float speed={0.9} rotationIntensity={0.6} floatIntensity={0.6}>
              
                
                <Map/>
              </Float>
            </Suspense>
          </Canvas>



        </div>
      </div>
    </>
  );
}

export default MainDasboard;
