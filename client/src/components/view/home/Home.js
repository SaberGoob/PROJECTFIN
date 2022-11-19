import React from 'react'
import './home.css'
import UserName from '../../user/UserName'
import homepic1 from './homepic1.jpg';

import { Link, Route, Routes } from "react-router-dom"

import iflatbed from './iflatbed.svg'
import Sliders from '../../sliders/Sliders'
const Home = () => {
    return (
        <div className='home'>
            <div className='header'>
                <div className='titleheader'>

                    <Link to='/trucking_live'><h1 className='tite-header1'>
                    Live Freight Track Available</h1></Link>
                
                    <Link to='./submit'>
                <h1 className='tite-header2'>
                Shiping With Us Right Now!
                </h1></Link>
                </div>
            </div>


            <div className='body'>
                <div>
                <div class="services_section">
<div class="container">
<div class="row">
<div id="simpleimage-2" class="widget widget_simpleimage col-lg-3 col-md-6"><p><strong>Dedicated</strong><br/>
Freight</p>
</div><div id="simpleimage-3" class="widget widget_simpleimage col-lg-3 col-md-6"><p><strong>Drop and Hook</strong><br/>
Service</p>
</div><div id="simpleimage-4" class="widget widget_simpleimage col-lg-3 col-md-6"><p><strong>Expedited</strong><br/>
Transportation</p>
</div><div id="simpleimage-5" class="widget widget_simpleimage col-lg-3 col-md-6"><p><strong>Power Only</strong><br/>
Service</p>
</div></div>
</div>
</div>
                </div>

            </div>
            <div className='photo_desc'>
<div className='MinDiscLeft1'>
         <h1>SUPDELIVERY TRANSPORTATION<div className='lineMinLeft1'></div></h1>
         
         <p> Serving the needs of our customers’ door-to-door freight solutions takes a proven combination of skill, experience, and equipment. At SUPDELIVERY Freight Solutions, we’re also leading the way to return honesty and integrity to the logistics, freight, and transportation industry through our freight transportation and shipping services.</p>

</div>
<div className='photo_1'>
{/* <img src={homepic1}/> */}
<p>See now Our History as International Transportation Company "SUPDELIVERY"</p>
<Link to='./about'><button >About Us</button></Link>

</div>

</div>


        </div>
    )
}

export default Home