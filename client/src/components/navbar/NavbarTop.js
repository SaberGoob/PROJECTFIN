import React from 'react'
import logo from './logo.svg'
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import icon_profil_bar from './icon_profil_bar.png';
import icon_admin from './icon_admin.svg';

import './navbartop.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../js/userSlice/userSlice';
const NavbarTop = () => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const user = useSelector(store=>store.user?.user)


  return (
    <div className='navBarTop'>
      <Link to="/"><img className='logoTop' src={logo} alt='logo' /></Link>
      <p>MC#10545454
        SCAC code MFBT
        DOT# 25451154
      </p>
      <ul className='items'>
        <il>(123) 996-7119</il>
        <il>24H Live Services</il>
       
      </ul>
      <Link to='contactus1'>
        <button className='btnNavbarUS'>CONTACT US</button></Link>
        
      {isAuth
        ? <>
        
        <button className='btnNavbarLogin' onClick={() => {
          dispatch(logout());
          navigate("/");
        }}>logout</button>
          <Link to="/profil"><img className='icon_profil_bar' src={icon_profil_bar} alt='logo' /></Link>


          {user?.isAdmin && 
          <Link to="/admin"><img className='icon_profil_bar' src={icon_admin} alt='logo' /></Link>}
       
        </>
        : <Link to="/login"><button className='btnNavbarLogin' type='button'>LOGIN</button></Link>}






    </div>

  )
}

export default NavbarTop