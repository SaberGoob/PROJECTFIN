import React from 'react'
import './home.css'
import UserName from '../../user/UserName'
import { Link, Route, Routes } from "react-router-dom"

import iflatbed from './iflatbed.svg'
import Sliders from '../../sliders/Sliders'
const Home = () => {
    return (
        <div className='home'>
            <div className='header'>
                <div className='titleheader'>
                <h1 className='tite-header1'>
                    Live Freight Track Available</h1>
                <h1 className='tite-header2'>
                Shiping With Us Right Now!
                </h1>

                </div>
            </div>


            <div className='body'>


            </div>



        </div>
    )
}

export default Home