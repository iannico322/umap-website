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
                <li onClick={()=>{
                    document.querySelector(".profile").click()
                }} >Profile</li>
                <li onClick={()=>{
                    document.querySelector(".main").click()
                }} >Going To</li>
                <li onClick={()=>{
                    document.querySelector(".out").click()
                }}>Log Out</li>
                <Link to="/profile" className="profile"></Link>
                <Link to="/main" className="main"></Link>
                <Link to="/login" className="out"></Link>
                {/* <a href="#" className='download' download={Download}></a> */}
                
            </ul>
        </div>
        
     
        

        
    </div>
  )
}
