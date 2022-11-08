import React from 'react'
import './navbarmin.css'
import search from '../images/search.svg'




const NavbarMin = () => {
  return (
    <div className=" navBarMin">


<ul>
    <il>TRANSPORTATION SERVICES</il>
    <il>INDUSTRIES</il>
    <il>LOAD TRACKING</il>
    <il>CARRIERS</il>
    <il>LOAD TRACKING</il>
    <il>SHIPPERS</il>
    <il>AGENT PROGRAM</il>
    <il><img src={search} alt="search" className='searchIcon'/></il>

</ul>
 
    </div>
  )
}

export default NavbarMin