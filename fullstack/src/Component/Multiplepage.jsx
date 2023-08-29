import React from 'react';
import "../Styles/Multiplepage.css";

const Multiplepage = () => {
  return (
    <>
    <div id="screen-multiple">

<div id="navbar">
    <div>
        <img src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/01/30/913689-1.1.4-2.jpg?im=Resize=(1280,720)"
            alt="sreen-logo" />

    </div>
    <div id="nb1">
        <div>
            <h3>MEN</h3>
        </div>
        <div>
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
            <h3>STUDIO<sup style= {{color:'red'}}>NEW</sup></h3>
        </div>
    </div>
    <div id="navbars">
        <form>
            <button type="submit"><i class="fa fa-search"></i></button>
            <input type="text" placeholder="Search for products,brands and more" />
        </form>
    </div>
    <div id="navbarr">
        <div id="switch">
            <i class="fa-regular fa-user "></i>
            <h5 >Profile</h5>
        </div>
        <div id="Logout">
            <i class="fa-regular fa-heart "></i>
            <h5 >Wishlist</h5>
        </div>
        <div>
            <i class="fa-regular fa-bag-shopping "></i>
            <h5 style={{paddingLeft:'5px'}}>Bag</h5>
        </div>
    </div>
</div>


<div id="slider-multiple">
    <img
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/14/7cec9b95-a683-473c-aca8-cc510821b1cd1676394720493-Desktop-Banner.gif" />
</div>
{/* <div id="productsT"></div> */}
</div>
    </>
  )
}

export default Multiplepage