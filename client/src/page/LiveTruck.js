import React from 'react';
import TopDisc from '../components/TopDisc/TopDisc';
import './live.css';
import live_truck from './live_truck.jpg'


const LiveTruck = () => {
  return (
    <div>
      <TopDisc/>
        <div className='trucking_lv'>
            <h1>Live Trucking 24H</h1>
            <div className='truck_services_lv'>
                <img src={live_truck} alt='trucking' />
                <p1> At Supreme Transports LLC, we are known for the exceptional, reliable, and smart transportation solutions we offer. From dedicated freight transportation and real-time tracking to reliable expedited transportation, we have the perfectly tailored transport solution to fit your company’s unique needs.

                    <br /><br />Thousands of shippers and brokers across Dallas/Fort Worth Metroplex rely on us to take expert care of their high-volume, high-capacity, and time-sensitive shipping with our dedicated trucking solutions.

                    <br /><br />To learn more about our services or request a quote for your transportation needs throughout Dallas or the south, contact our trucking company online or by phone at 888-802-5722.</p1>
              </div>
            </div>
    </div>
  )
}

export default LiveTruck;