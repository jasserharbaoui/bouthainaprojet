 import React, { useContext, useRef, useState } from "react";
 import './navbar.css';
 import logo from '../assests/logo.jpg';
 import cart_icon from "../assests/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import dropdown_icon from '../assests/th.jpg'

 const Navbar =()=>{

  const [menu,setMenu] = useState("shop");
  const {getTotalCartItem} = useContext(ShopContext)
  const menuRef = useRef();

  const dropown_toggle = (e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open')
  }
   return(
    <div className="navbar">
      <div className="nav-logo">
         <img src={logo} alt="" height={100}/>
         <p>Loulitta Art</p>
      </div>
      <img className="nav-dropdown" onClick={dropown_toggle} src={dropdown_icon} alt=""/>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to='/'>home</Link>{menu === "shop" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu("arts1")}}><Link style={{textDecoration:"none"}} to='/arts1'>art1</Link>{menu === "arts1" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu("acc")}}><Link style={{textDecoration:"none"}} to='/acc'>accessoir</Link>{menu === "acc" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu("arts3")}}><Link style={{textDecoration:"none"}} to='/arts3'>art3</Link>{menu === "arts3" ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className="nav_cart_count">{getTotalCartItem()}</div>
      </div>
        
    </div>
   )
 } 

 export default Navbar