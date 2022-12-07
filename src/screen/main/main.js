import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float } from "@react-three/drei";
import { Suspense } from "react";
import { Map } from "./Map";
import './main.css'
function MainDasboard() {
  return (
    <div className="main-screen">

      <div className='page'>
        <h2>hellow</h2>
      </div>
      <div className="canva">
      <Canvas>
        <Suspense fallback={null}>
          <Environment
            background={false}
            files={process.env.PUBLIC_URL + "/textures/envmap.hdr"}
          />

          <PerspectiveCamera
            makeDefault
            fov={40}
            position={[800.75, 200.85, 100.35]}
          />

          <OrbitControls target={[10, 100, 0]} maxPolarAngle={Math.PI * 0.5} />

          <Float speed={0.5} rotationIntensity={0.6} floatIntensity={0.6}>
            <Map />
          </Float>
        </Suspense>
      </Canvas>
      </div>
      
    </div>
  );
  
  
}

export default MainDasboard;
