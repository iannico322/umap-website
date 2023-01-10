import React,{useState,useEffect} from 'react'
import Logo from './../../media/image/umap-logo.png'
// import Download from './../../media/image/hehe.jpg'
import {  Link } from "react-router-dom";
import MenuIcon from "../../media/image/menu.svg"
import MenuOpenIcon from "../../media/image/menu-open.svg"
import './navbar2.css';
export const Navbar3 = (props) => {
    const [clickMenu, setClickMenu] = useState(true)
    const [Menu, setMenu] = useState(MenuIcon)

  
  return (
    
    <div className='nav2'>
      
        <div className='logo'>
            <img src={Logo} alt="" />
        </div>
       
        <div className='menu'>
         
            <ul className='links '>
        
                <li className='button-24' onClick={()=>{
                    document.querySelector(".out").click()
                }}>Exit</li>
               <div className='link-hide'>
               <Link to="/" className="out"></Link>
               
               </div>
                
                
            </ul>
        </div>
        
        
     
        

        
    </div>
  )
}
