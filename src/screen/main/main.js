import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
} from "@react-three/drei";
import { Suspense } from "react";
import { Map } from "./Map";
import { Navbar } from "../../components/navbar/navbar";
import { Load } from "../loader/loader";

import Cloud1 from "./../../media/image/cloud_2-big.png";
import "./main.css";
function MainDasboard() {
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
          <Canvas>
            <Suspense fallback={null}>
              <Environment
                files={process.env.PUBLIC_URL + "/textures/light.hdr"}
              />

              <PerspectiveCamera
                makeDefault
                fov={15}
                position={[800.75, 110.85, 10.35]}
              />

              <OrbitControls
                target={[40, 20, 0]}
                maxPolarAngle={Math.PI * 0.5}
              />

              <Float speed={0.9} rotationIntensity={0.6} floatIntensity={0.6}>
                <Map />
              </Float>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default MainDasboard;
