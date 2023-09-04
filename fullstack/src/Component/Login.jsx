import React, { useContext, useState } from 'react';
import "../Styles/Login.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {AuthContext} from './Context/AuthContext';

const Login = () => {
  const[userData,setUserData]=useState({email:"",password:""});
  const {state,dispatch}=useContext(AuthContext);

  const router=useNavigate();
  console.log(userData,"userData");

  const handleChange=(event)=>{
      setUserData({...userData,[event.target.name]:event.target.value})

  }
  const handleSubmit=async(event)=>{
      event.preventDefault();
      if(userData.email && userData.password){
          try {
              const response=await axios.post("http://localhost:2000/myntra/login",{
                  email:userData.email,
                 password:userData.password

              });
              console.log(response,"response")
              const data=response.data;
              console.log(data?.user)
              if(data.success){
                  dispatch({
                      type:"LOGIN",
                      payload:data?.user
                  });
                  localStorage.setItem("JWTToken",JSON.stringify(data.token));
                  alert(data.message);
                  router('/myntraHome');
              }
              
          } catch (error) {
              console.log(error)
              if(!error.response.data.success){
                  alert(error.response.data.message)
              }
              
          }

      }
      else{
          alert("all field are required");
      }
  }
  return (
    <>
     <div class="screen-login">
       <div class="body-login">
        <div class="body1-login">
            <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg"/>
        </div>
        <form onSubmit={handleSubmit}>

                
            <div class="info-login">
                <h3>Login</h3>
                
                <div><input name="email" type="email" placeholder="Enter your email id" onChange={handleChange}/></div>
                <div><input name="password" type="password" placeholder="Enter your password" onChange={handleChange}/></div>
                <div><input type="submit" value="Login"/> </div>
                <p>By continuing, I agree to the <b>Term of Use</b> & <b>Privacy policy</b></p>

                <p>Have troubling in <b>Login</b></p>
            </div>
        </form>
       </div>
    </div>
    </>
  )
}

export default Login