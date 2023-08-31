import React, { useState } from 'react';
import "../Styles/Register.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-hot-toast';


const Register = () => {
  const [userData,setUserData]=useState({name:"",email:"",password:"",confirmpassword:""})
  
  
  const router =useNavigate();
  console.log(userData,"userData");

  const handelChange=(event)=>{
    setUserData({...userData,[event.target.name]:event.target.value})
  }

  const handleSubmit=async(event)=>{
    event.preventDefault();
    if(userData.name && userData.email && userData.password && userData.confirmpassword){
      try {
        const response=await axios.post("http://localhost:2000/myntra/register",{
          name:userData.name,
          email:userData.email,
          password:userData.password,
          confirmpassword:userData.confirmpassword
        });

        console.log(response,"response")

         const data=response.data;

         console.log(data,"data");
         if(data.success){
          toast(data.message);
          router('/login');

         }

      } catch (error) {
        console.log(error)
        if(!error.response.data.success){
            alert(error.response.data.message);
        }
        
      }
    }
    else{
      alert("All field are required");
  }
  }

  return (
    
    <div class="screen-register">
       <div class="body-register">
        <div class="body1-register">
            <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg"/>
        </div>
        <form onSubmit={handleSubmit}>

                
            <div class="info-register">
                <h3>Sign Up</h3>
                <div><input name="name" type="text" placeholder="User Name" onChange={handelChange} /></div>
                <div><input name="email" type="email" placeholder="Enter your email id" onChange={handelChange} /></div>
                <div><input name="password" type="password" placeholder="Enter your password" onChange={handelChange}/></div>
                <div><input name="confirmpassword" type="confirmpassword" placeholder="Confirmpassword" onChange={handelChange}/></div>
                <div><input type="submit" value="SignUp" /> </div>
                <p>By continuing, I agree to the <b>Term of Use</b> & <b>Privacy policy</b></p>

                <p>Have troubling in <b>Sign Up</b></p>
            </div>
        </form>
       </div>
    </div>
    
  )
}

export default Register;