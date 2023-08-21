import React from 'react';
import "../Styles/Login.css";

const Login = () => {
  return (
    <>
     <div class="screen">
       <div class="body">
        <div class="body1">
            <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg"/>
        </div>
        <form onsubmit="login(event)">

                
            <div class="info">
                <h3>Login</h3>
                
                <div><input id="lemail" type="email" placeholder="Enter your email id" /></div>
                <div><input id="lpassword" type="password" placeholder="Enter your password"/></div>
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