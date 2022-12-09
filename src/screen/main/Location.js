import { useLoader } from '@react-three/fiber';
import {Text3D ,
    Float,
  } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function Location(props) {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/location.gltf");

  return (
    
    <Float position={[-6, 20, 40]} rotation={[0,-200,0]} rotationIntensity={0} floatIntensity={0}>
      <Float position={[12, 10, -3]} rotation={[0,.4,0]} rotationIntensity={0} floatIntensity={0}>
      <Text3D
         font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
         size={5}
         height={0.065}
         curveSegments={12}
       >
        {props.search}
         <meshStandardMaterial color={[0,0,0 ]}  />
       </Text3D>
       <Float position={[0, -5, 0]} rotation={[0,0,0]} rotationIntensity={0} floatIntensity={0}>
       <Text3D
         font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
         size={2}
         height={0.065}
         curveSegments={12}
       >
         3rd floor
         <meshStandardMaterial color={[0,0,0 ]}  />
         
       </Text3D>
       </Float>
       </Float>
    
    <primitive object={gltf.scene}
    scale={[10,10,10]} 

    />
    
    </Float>
  )
}