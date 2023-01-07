import { useLoader,useFrame } from '@react-three/fiber';
import {Text3D ,
    Float,
  } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef,useState } from 'react';


export function Location(props) {

  
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/location.gltf");
  
  
  
  const [title,setTitle] = useState("")
  const [discription, setdiscription] = useState()

  let buildingName = ["9","23","16"]
  const direction = useRef(null)

  useFrame((state)=>{

      direction.current.position.x = 40
      direction.current.position.y = 20
      direction.current.position.z =-45
      direction.current.rotation.set(0,-200.50,0)
      setTitle(props.roomSearch)


    if (props.search === buildingName[0]) {
      
    direction.current.position.x = 40
      direction.current.position.y = 20
      direction.current.position.z =-45
      direction.current.rotation.set(0,-200.50,0)
      setTitle(props.roomSearch)
      setdiscription(`CITC Building | ${props.floor} : ${props.block}` )

      

    }else if (props.search === buildingName[1]){
      direction.current.position.x = -6
      direction.current.position.y = 20
      direction.current.position.z = 40
      direction.current.rotation.set(0,-200,0)
      setTitle(props.roomSearch)
      setdiscription(`LRC | F ${props.floor} : B ${props.block}` )
      
    }else if (props.search === buildingName[2]){
      direction.current.position.x = 50
      direction.current.position.y = 12
      direction.current.position.z = 5
      direction.current.rotation.set(0,-200,0)
      setTitle(props.roomSearch)
      setdiscription(`DRER Memorial Hall | F ${props.floor} : B ${props.block}` )
    }else{
      direction.current.position.x = 110
      direction.current.position.y = 0
      direction.current.position.z = -30
      direction.current.rotation.set(0,-200,0)
      setTitle("USTP MAP")
      setdiscription("Developed By College Cheetah")
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
         size={2.2}
         height={0.065}
         curveSegments={12}
       >
        {discription}
         <meshStandardMaterial color="#3c3c3c" />
         
       </Text3D>
      
       </Float>
       </Float>
    
    <primitive object={gltf.scene} rotation={[0,.2,0]} scale={[10,10,10]} 

    />
    
    </Float>
  )
}