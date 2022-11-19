import React from 'react'
import MinDisc from '../components/TopDisc/MinDisc'
import TopDisc from '../components/TopDisc/TopDisc'
import './about/services.css'
import trucking from './trucking.jpg'

const services = () => {
    return (
        <div>
        <TopDisc />

        <div className='trucking_sv'>
            <h1>Dedicated Trucking Company for Reliable Transportation Services</h1>
            <div className='truck_services'>
                <img src={trucking} alt='trucking' />
                <p1> At Supreme Transports LLC, we are known for the exceptional, reliable, and smart transportation solutions we offer. From dedicated freight transportation and real-time tracking to reliable expedited transportation, we have the perfectly tailored transport solution to fit your company’s unique needs.

                    <br /><br />Thousands of shippers and brokers across Dallas/Fort Worth Metroplex rely on us to take expert care of their high-volume, high-capacity, and time-sensitive shipping with our dedicated trucking solutions.

                    <br /><br />To learn more about our services or request a quote for your transportation needs throughout Dallas or the south, contact our trucking company online or by phone at 888-802-5722.</p1>

            </div>
            <div className='trucking_min'>
                <h2>Our Trucking Services</h2>
                <br/>
                <h3>Dedicated Trucking & Freight Transportation</h3>
                    <p>
                        Our track record in winning and sustaining dedicated freight transport opportunities is proof of our being recognized as a high-performing carrier. In this type of contracted arrangement, the carrier agrees to transport consistent truckload shipments for a fixed duration and rate in the same lane. As the “go-to” dedicated trucking provider in Dallas, we offer reliable and consistent capacity to cater to all your business shipping needs.
                        <br /><br />
                        While our dedicated trucking services are primarily available in the Dallas/Fort Worth area, we also offer these services across the south including to and from Texas, Oklahoma, Louisiana, Arkansas, Mississippi, Tennessee, Alabama, Georgia, Florida, South Carolina, and North Carolina. Here are the key benefits of our dedicated freight transportation:
                        <br />
                        <br /><strong>Consistent capacity</strong><br />
                        <strong>Long-term arrangements</strong><br />
                        <strong>Stable rates</strong><br />
                        <strong>Efficiency</strong><br />
                        <strong>Customer-centric</strong><br />
                    </p>
            </div>

        </div>
        </div>
    )
}

export default services