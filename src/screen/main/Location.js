import { useLoader,useFrame,useThree } from '@react-three/fiber';
import {Text3D ,
    Float,
  } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect,useRef,useState } from 'react';


export function Location(props) {

  
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/location.gltf");
  
  
  
  const [title,setTitle] = useState("")

  let buildingName = ["b1","b2","b3"]
  const direction = useRef(null)
  const { camera } = useThree()

  useFrame((state)=>{

      direction.current.position.x = 40
      direction.current.position.y = 20
      direction.current.position.z =-45
      direction.current.rotation.set(0,-200.50,0)
      setTitle("CITC BUILDING")


    if (props.search == buildingName[0]) {
      
    direction.current.position.x = 40
      direction.current.position.y = 20
      direction.current.position.z =-45
      direction.current.rotation.set(0,-200.50,0)
      setTitle("CITC BUILDING")

      

    }else if (props.search == buildingName[1]){
      direction.current.position.x = -6
      direction.current.position.y = 20
      direction.current.position.z = 40
      direction.current.rotation.set(0,-200,0)
      setTitle("Library")
      
    }else if (props.search == buildingName[2]){
      direction.current.position.x = 50
      direction.current.position.y = 12
      direction.current.position.z = 5
      direction.current.rotation.set(0,-200,0)
      setTitle("Gym")
    }else{
      direction.current.position.x = 110
      direction.current.position.y = 0
      direction.current.position.z = 50
      direction.current.rotation.set(0,-200,0)
      setTitle("UMAP")
    }
    
   
  })
  
  
  return (
    


    
    <Float  ref={direction}  rotationIntensity={0} floatIntensity={0}>
      
      
      <Float position={[12, 10, -3]} rotation={[0,.2,0]} rotationIntensity={0} floatIntensity={0}>
    
      <Text3D
         font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
         size={5}
         height={0.065}
         curveSegments={12}
         
         
       >
        
        {title}
         <meshStandardMaterial color="#fbbc05" />
       </Text3D>
       <Float position={[0, -5, 0]}  rotationIntensity={0} floatIntensity={0}>
       <Text3D
         font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
         size={2}
         height={0.065}
         curveSegments={12}
       >
         BY:  College Cheetah
         <meshStandardMaterial color="#3c3c3c" />
         
       </Text3D>
      
       </Float>
       </Float>
    
    <primitive object={gltf.scene} rotation={[0,.2,0]} scale={[10,10,10]} 

    />
    
    </Float>
  )
}