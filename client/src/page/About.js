import React from 'react';
import about1 from './about1.jpg';
import about2 from './about2.jpg';
import about3 from './about3.jpg';
import about4 from './about4.jpg';
import './about.css'
import TopDisc from '../components/TopDisc/TopDisc';




const About = () => {
    return (
        <div className='bgabout'>
        <TopDisc/>

        <div className='about'>
            <div>
            <h2>Expedited Trucking Company in USA</h2>
            <p>Supreme Transports LLC, has many years of experience in providing exceptional expected trucking and transportation services in Dallas/Fort Worth. We also cover Texas, and the southeast including Oklahoma, Louisiana, Arkansas, Mississippi, Tennessee, Alabama, Georgia, Florida, South Carolina, and North Carolina. Since its inception, Supreme Transports LLC has grown stronger, expanding its fleet and crew of highly trained drivers.

                Our success lies in not only our state-of-the-art transport vehicles but in our loyal drivers and committed staff. With a client-centric approach, we are dedicated to offering superior fleet management, differentiated transportation solutions, and excellent customer service.

                By constantly focusing on enhancing equipment utilization, optimizing operating efficiency, and adopting best practices in transportation, we are confident of continuing our pace of growth in the future. From power-only transport and drop and hook services, to dedicated transport and expedited trucking, our services are known for being easy, affordable, fast, and efficient.

                Contact our trucking company online or by phone at 888-802-5722 to learn more about our trucking services and request a quote.</p>

            <h3>Our Specialized Services: Dedicated & Expedited Trucking Solutions</h3>
            <p>
                From efficient expedited trucking services to dedicated freight transportation, we offer a comprehensive range of solutions for shippers. We specialize in:<br />
                <br />

                Dedicated Freight Transportation<br />
                Expedited Trucking<br />
                Power Only Services<br />
                Drop and Hook Services<br />
                <br />
                Our unwavering focus is on transporting your freight on time and safely. We feature competitive rates and superior customer service. A live customer representative is available 24 hours a day to answer all our customers’ queries while we offer real-time live tracking to ensure you stay updated on the status of any shipment.
            </p>
            </div>
            <div className='about_img'>
                <div>
            <img src={about1}/>
            <img src={about2}/>
            </div>
            <div>
            <img src={about3}/>
            <img src={about4}/>
</div>

            </div>
        </div>
        </div>
    )
}

export default About