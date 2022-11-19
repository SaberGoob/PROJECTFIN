import React from 'react'
import TopDisc from '../components/TopDisc/TopDisc';
import career from './career.jpg'

const Driveforus = () => {
  return (
    <div>
<TopDisc/>
        <div className='trucking_lv'>
            <h1>Drive for Us</h1>
            <div className='truck_services_lv'>
                <img src={career} alt='trucking' />
                <p1> We are currently looking for truck drivers to join our Dallas trucking company. Complete our online quick driver application to show your interest or download our full driver application using email to apply.
<br/> <strong>saber.goob14@gmail.com</strong>
                    <br /><br />To learn more about our services or request a quote for your transportation needs throughout Dallas or the south, contact our trucking company online or by phone at 888-802-5722.</p1>
              </div>

        </div>
    </div>
  )
}

export default Driveforus