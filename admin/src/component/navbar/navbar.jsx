import React  from 'react'
import './navbar.css';
import navlogo from '../../assets/logo.jpg'
import navProfil from '../../assets/nav-profile.svg'


const Navbar = () =>{
  return(
    <div className='navbar'>
      <img src={navlogo} alt='' width={50} className='nav-logo'/>
      <h1>LOULITTA</h1>
      <img src={navProfil} className='nav-profile' alt='' />
    </div>
  )
}

  export default Navbar