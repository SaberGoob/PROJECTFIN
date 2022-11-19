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
   <Link to='/services'><il>TRANSPORTATION SERVICES</il></Link> 
 <Link to='trucking_live'><il>LOAD TRACKING</il></Link>   
    <Link to='/submit'><il>SHIP WITH US</il></Link> 
    <Link to='drive_for_us'><il>DRIVE FOR US</il></Link>
   <Link to='/faqs'><il>FAQs</il></Link> 
    {/* <il><img src={search} alt="search" className='searchIcon'/></il> */}

</ul>
 
    </div>
  )
}

export default NavbarMin