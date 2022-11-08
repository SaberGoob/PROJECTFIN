import React from 'react'
import { Link } from 'react-router-dom'

const TopDisc = () => {
  return (

    <div >
        <h1 className='topdisch1'><p>Home > shipper</p>FREIGHT TRANSPORTATION FOR SHIPPERS</h1>
<div className='minDisc'>
        <div className='MinDiscRight'>
         <p> What if you weren’t just trying to find a way to get your 
            freight from point A to point B? What if you knew your freight
            transportation shipper could be your partner? What if your supply chain, 
            freight movement, and warehouse professionals demonstrated values
             like integrity, honesty, and transparent communication with stakeholders, 
             including shippers just like you?<br/><br/>

That’s the way SupDelivery Freight Solutions has always worked 
— and it’s how we build strategic partnerships with every shipper we’re privileged to serve. We guarantee swift results and pledge to always remain flexible to serve our customers’ needs.</p>

        </div>
        <div className='MinDiscLeft'> 
         <p>Are you ready to leverage the benefit of working
            with SupDelivery Freight Solutions freight transportation
            shippers to get your freight where it needs to go, on time,
            on budget, and in perfect condition? Get started today.
            Get your SupDelivery Freight Solutions shipper packet today!</p><Link to='/login'> <button className='btnMinDisc'>LOGIN</button></Link>
        </div>
       

    </div>
   
    </div> )
}

export default TopDisc