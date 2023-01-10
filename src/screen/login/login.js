import {useState} from 'react'

import { Input } from "../../components/input/input";
import Cloud1 from "./../../media/image/cloud_2-big.png";
import {  Link } from "react-router-dom";
import Map2 from "./../../media/image/map3d_2.png";
import { Navbar } from '../../components/navbar/navbar';
import { Load } from '../loader/loader';
import Alert from '@mui/material/Alert';

import './login.css'


export const Login = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [alert,setAlert] = useState("alert hide")

  function LogIn(e){
    e.preventDefault()
    if(username === "umap" && password ==="umap"){
      document.querySelector('.main').click()
      
    }else if(username === "admin" && password ==="admin"){
      document.querySelector('.admin').click()
    }
    
    else{

      setAlert("alert show")
      setTimeout(() => {
        setAlert("alert hide")
      }, 2000);
    }
   
  }

  
    
   
  

  return (
    <>
    <Load
      time = {3000}
     />
    <div className={alert}>
    <Alert variant="outlined" severity="error">
      Invalid Username or Password
    </Alert>
    </div>
    
    <div className="login-screen">
      <div class="ui active centered inline loader"></div>
      <Navbar link2="Register" single=".Press" link1Address="/register" iconlink2 = "" />

      <div className="cloud-model-login">
        <img src={Cloud1} alt="" />
      </div>

      <div className="map-model-login">
        <img src={Map2} alt="" />
      </div>

      <div className="login-container">
        <div className="login-box">
          <form  onSubmit={LogIn}>
            <div className="form-title">
              <h2>SIGN IN</h2>
            </div>

            <Input
            text = "Username"
            placeholder = "username"
            value = {username}
            onChange = {
              e => setUsername(e.target.value)
            }
            />
            <Input 
            text = "Password"
            placeholder = "password"
            type = "password"
            value = {password}
            onChange = {
              e => setPassword(e.target.value)
            }
            />
            <div className='down'>
              
                <h3>forgot password?</h3>
                <button type='submit'>Sign In</button>
                
            </div>
          
          </form>
        </div>
      </div>
      <Link to="/main" className="main"></Link>
      
      <Link to="/admin" className="admin"></Link>
    </div>
    </>
  );
}
