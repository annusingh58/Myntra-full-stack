import {  useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Component/Context/AuthContext";

function AuthProtected({children}){
    const {state}=useContext(AuthContext);
    const router=useNavigate();

    useEffect(()=>{
        if(!state?.user?.name){
            setTimeout(() => {
                router('/myntrahome')
            }, 3000);
        }
    },[state])
    if(state?.user?.name){
        return(
            children
        )
    }else{
        return (
        <div style={{backgroundColor:"red"}}>
            <h1>You are not logged in please log in first...Redirecting you to the home page within 3 sec</h1>
            <button onClick={()=>router('/login')}>Click here to login</button>
        </div>
        )
    }
}

export default AuthProtected;