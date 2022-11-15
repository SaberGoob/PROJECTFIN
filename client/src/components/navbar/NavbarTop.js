import React from 'react'
import logo from './logo.svg'
import {Link, Route, Routes} from "react-router-dom"
import icon_profil_bar from './icon_profil_bar.png';

import './navbartop.css'
const NavbarTop = () => {
  return (
    <div className='navBarTop'>
<Link to="/"><img  className='logoTop' src={logo} alt='logo'/></Link>
<p>MC#10545454
    SCAC code MFBT
    DOT# 25451154
</p>
<ul className='items'>
    <il>(123) 996-7119</il>
    <il>ABOUT US</il>
    <il>FAQ</il>
</ul>
<Link to='contactus1'>
<button className='btnNavbarUS'>CONTACT US</button></Link>
<Link to="/login"><button className='btnNavbarLogin' type='button'>LOGIN</button></Link>
<Link to="/profil"><img  className='icon_profil_bar' src={icon_profil_bar} alt='logo'/></Link>

 </div>

  )
}

export default NavbarTop