import React from 'react';
import "../Styles/Register.css";

const Register = () => {
  return (
    <>
    <div class="screen-register">
       <div class="body-register">
        <div class="body1-register">
            <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/59a76460-3a85-4d4b-b517-faef119c50551675792734635-offer-banner-200-600x240-code-_-MYNTRA200.jpg"/>
        </div>
        <form onsubmit="signup(event)">

                
            <div class="info-register">
                <h3>Sign Up</h3>
                <div><input id="mname" type="text" placeholder="User Name" /></div>
                <div><input id="memail" type="email" placeholder="Enter your email id" /></div>
                <div><input id="mpassword" type="password" placeholder="Enter your password"/></div>
                <div><input id="mconfirmpassword" type="confirmpassword" placeholder="Confirm password"/></div>
                <div><input type="submit" value="SignUp" /> </div>
                <p>By continuing, I agree to the <b>Term of Use</b> & <b>Privacy policy</b></p>

                <p>Have troubling in <b>Sign Up</b></p>
            </div>
        </form>
       </div>
    </div>
    </>
  )
}

export default Register;