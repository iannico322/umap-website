import React from 'react'
import Logo from './../../media/image/umap-logo.png'
// import Download from './../../media/image/hehe.jpg'
import {  Link } from "react-router-dom";
import './navbar.css';
export const Navbar = (props) => {
  return (
    
    <div className='nav'>
      
        <div>
            <img src={Logo} alt="" />
        </div>
        <ul>
            <li
            onClick={()=>{
              document.querySelector('.Press').click()
            }}>{props.link1}</li>

            <li onClick={()=>{
               document.querySelector(props.single).click()
            }}><i class={props.iconlink2}></i> {props.link2}</li> 

            <Link to={props.link1Address} className="Press"></Link>
            {/* <a href="#" className='download' download={Download}></a> */}
            
        </ul>

        
    </div>
  )
}
