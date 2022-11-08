import React from 'react'
import './home.css'
import UserName from '../../user/UserName'
import {Link, Route, Routes} from "react-router-dom"

import iflatbed from './iflatbed.svg'
const Home = () => {
  return (
    <div className='home'>
        <div className='header'>
        <h1>FREIGHT TRANSPORTATION SOLUTIONS</h1>
        <div className='mov3'>
        <div className='movement'> 
            <h4>I am a...</h4>
            <div className='iconName'>
            <h3>CARRIER</h3>
            <div className='line'></div>
            <img src={iflatbed} alt='iflatbed'/>
            </div>
            <Link to="submit"> <button>LEARN MORE</button></Link>
        </div>
        <div className='movement'> 
            <h4>I am a...</h4>
            <div className='iconName'>
            <h3>CARRIER</h3>
            <div className='line'></div>
            <img src={iflatbed} alt='iflatbed'/>
            </div>
        <Link to="submit"><button>LEARN MORE</button></Link>
        </div>
        <div className='movement'> 
            <h4>I am a...</h4>
            <div className='iconName'>
            <h3>CARRIER</h3>
            <div className='line'></div>
            <img src={iflatbed} alt='iflatbed'/>
            </div>
           <Link to="submit"> <button>LEARN MORE</button></Link>
            </div>
        </div>
        </div>

        
        <div className='body'>
        
         <UserName/>

        </div>
        
    
        
        </div>
  )
}

export default Home