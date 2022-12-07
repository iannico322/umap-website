import React from 'react'

import { Input } from "../../components/input/input";
import Cloud1 from "./../../media/image/cloud_2-big.png";
import Cloud2 from "./../../media/image/cloud_2.png";
import Map2 from "./../../media/image/map3d_2.png";
import { Navbar } from '../../components/navbar/navbar';
import './login.css'
export const Login = () => {
  return (
    <div className="login-screen">
      <Navbar link2="Register" single=".Press" link1Address="/register" />

      <div className="cloud-model-login">
        <img src={Cloud1} alt="" />
      </div>

      <div className="map-model-login">
        <img src={Map2} alt="" />
      </div>

      <div className="login-container">
        <div className="login-box">
          <form action="">
            <div className="form-title">
              <h2>SIGN IN</h2>
            </div>

            <Input
            text = "Username"
            placeholder = "username"
            
            />
            <Input 
            text = "Password"
            placeholder = "password"
            type = "password"
            />
            <div className='down'>
                <h3>forgot password?</h3>
                <button>Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
