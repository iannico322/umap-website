import { useLoader } from '@react-three/fiber';
import {
    Float,
  } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function Cloud() {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/stylize_clouds.glb");

  return (
    
    <Float position={[20, 50, 60]} rotation={[20, -0.35, -0.05]} rotationIntensity={4.4} floatIntensity={100.5}>
   
   
    
    <primitive object={gltf.scene}
    scale={[20,20,20]} 

    />
    </Float>
  )
}