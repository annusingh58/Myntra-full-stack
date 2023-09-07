import React, { useContext } from 'react'
import { AuthContext } from '../Component/Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const {state,dispatch}=useContext(AuthContext); 
    const username = state?.user?.name;
    const router=useNavigate();
    const Logout=()=>{
        dispatch({
            type:"LOGOUT"
        })
    }
  return (
    

<div id="navbar">
    <div>
        <img src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/01/30/913689-1.1.4-2.jpg?im=Resize=(1280,720)"
            alt="sreen-logo" />

    </div>
   {state?.user?.role==="seller" ?
    <div id="nb1">
    <div>
        <h3>Add Product</h3>
    </div>
    <div>
        <h3>Update Product</h3>
    </div>
    <div>
        <h3>Delete Product</h3>
    </div>
  
    <div>
        <h3>STUDIO<sup style={{color:'red'}}>NEW</sup></h3>
    </div>
</div> :
 <div id="nb1">
 <div>
     <h3>MEN</h3>
 </div>
 <div onClick={()=>router('/multiplepage')}>
     <h3>WOMEN</h3>
 </div>
 <div>
     <h3>KIDS</h3>
 </div>
 <div>
     <h3>HOME & LIVING</h3>
 </div>
 <div>
     <h3>BEAUTY</h3>
 </div>
 <div>
     <h3>STUDIO<sup style={{color:'red'}}>NEW</sup></h3>
 </div>
</div>
}
    <div id="navbars">
        <form>
            <button type="submit"><i class="fa fa-search"></i></button>
            <input type="text" placeholder="Search for products,brands and more" />
        </form>
    </div>
    <div id="navbarr">
        <div id="switch">
            <i class="fa-regular fa-user "></i>
            {username?<h3>{username}</h3>:<h3 onClick={()=>router('/login')}>LOGIN</h3>}

        </div>
        <div id="Logout">
            <i class="fa-regular fa-heart "></i>
            {username?<button onClick={Logout}>LOGOUT</button>:<button></button>}

        </div>
        <div onClick={()=>router('/cart')}>
            <i class="fa-regular fa-bag-shopping "></i>
            <h5 style={{paddingLeft:'20px'}}>Bag</h5>
        </div>
    </div>
</div>
    
  )
}

export default Navbar