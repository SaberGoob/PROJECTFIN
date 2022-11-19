import React from 'react'
import './navbarmin.css'
import search from '../images/search.svg'
import { Link } from 'react-router-dom'




const NavbarMin = () => {
  return (
    <div className=" navBarMin">


<ul className='navbarmenu'>
    <Link to='/'><il >HOME</il></Link>
    <Link to='/about'><il>ABOUT US</il></Link>
    <il>TRANSPORTATION SERVICES</il>
    <il>LOAD TRACKING</il>
    <Link to='/submit'><il>SHIP WITH US</il></Link> 
    <il>DRIVE FOR US</il>
    <il>FAQs</il>
    {/* <il><img src={search} alt="search" className='searchIcon'/></il> */}

</ul>
 
    </div>
  )
}

export default NavbarMin