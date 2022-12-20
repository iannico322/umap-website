import React from 'react'
import Logo from './../../media/image/umap-logo.png'
// import Download from './../../media/image/hehe.jpg'
import {  Link } from "react-router-dom";
import './navbar2.css';
export const Navbar2 = (props) => {
  return (
    
    <div className='nav2'>
      
        <div className='logo'>
            <img src={Logo} alt="" />
        </div>
       
        <div className='menu'>
            <button className='menu-btn' onClick={()=>{
                var link = document.querySelector('.links')
                link.classList.remove('hide-link')
                link.classList.add('show')

            }}>Menu</button>
            <ul className='links hide-link'>
                <li>Profile</li>
                <li>Going To</li>
                <li onClick={()=>{
                    document.querySelector(".Press").click()
                }}>Log Out</li>

                <Link to="/login" className="Press"></Link>
                {/* <a href="#" className='download' download={Download}></a> */}
                
            </ul>
        </div>
        
     
        

        
    </div>
  )
}
