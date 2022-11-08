import React from 'react'
import Contact from '../contact/Contact'
import logo from '../navbar/logo.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'


import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
     <div className='contactFooter'>
      <Contact/>
     </div>

     <div className='footerDesc'>
    <div>
     <img className='logoFooter' src={logo} alt='logo'/>
     <ul>
        <il>715-226-5129&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</il> 
        <il>UNLOADING SERVICES</il>
        <br/>
        <br/>
        <il >Chicago, Usa, CH 77041</il>
        <il>PRIVACY POLICY</il>
     </ul>
</div>
<div className='socialMedia'>
<h3>KEEP IN<br/>TOUCH</h3>
<ul>
    <il><img src={facebook} alt='facebook'/></il>
    <il><img  src={linkedin} alt='linkedin'/></il>
    <il><img  src={instagram} alt='instagram'/></il>
</ul>

</div>

     </div>

    </div>
  )
}

export default Footer