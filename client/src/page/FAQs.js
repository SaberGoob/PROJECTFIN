import React from 'react'
import TopDisc from '../components/TopDisc/TopDisc';
import faqs from './faqs.jpg'
import './faqs.css'

const FAQs = () => {
  return (
    <div>
        <TopDisc/>
        <div className='trucking_sv'>
            <h1>Get Answers to Your Dedicated and Power Only Trucking Questions</h1>
            <div className='truck_services'>
                <img  className='faqsimage' src={faqs} alt='trucking' />
                <p1> At Supdelivery Transports LLC, we strive to provide our customers with the best trucking services to meet their needs. From providing power only trucking and drop and hook service throughout the south to save you time and money, to specialized dedicated trucking and freight transportation delivered on your schedule, we aim to deliver just the services you need. We can even provide expedited transportation solutions, including same day or overnight delivery throughout Dallas-Fort Worth and the state of Texas. Read on to learn more about the services we offer.
<br/>
<br/>
If you are looking for a Dallas trucking company to offer dedicated and power only trucking solutions on your schedule, contact us by phone at 888-802-5722 or request a quote online.</p1>

            </div>
            </div>

    </div>
  )
}

export default FAQs