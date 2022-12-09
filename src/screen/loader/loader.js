import {useState} from 'react'
import './loader.css'
import './load.css'
 
 export const Load = () => {
    const [load, setLoad] = useState("loader-screen show")

    setTimeout(() => {
      setLoad("hide")
    }, 3000);
   return (
    <div className={load}>
     
     <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>

    
</div>
   )
 }
