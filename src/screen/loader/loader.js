import {useState} from 'react'
import './loader.css'
import './load.css'
 
 export const Load = (props) => {
    const [load, setLoad] = useState("loader-screen show")
   
    if(props.load === "hide"){
    
      setTimeout(() => {
      setLoad("loader-screen hide")
    }, 1000);
    }else{
    
      setTimeout(() => {
      setLoad("loader-screen hide")
    }, 1000);
    }
    
   return (
    <div className={load}>
     <p>Loading</p>
     <div class="shapes"></div>

    
    </div>
   )
 }
