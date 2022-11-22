import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icon_profil from '../images/icon_profil.png';
import './profil.css';
import { deleteShip } from '../../js/userSlice/shipSlice';
import CardShip from './CardShip';

import CradUser from './CardUser';

const Profile = ({ping,setPing}) => {
  const user = useSelector((state) => state.user?.user);
  const isAuth = localStorage.getItem("token");
  
  const ships = useSelector(state => state.ship?.ship)
  console.log(ships)


  return (
    <div className='profilship'>
      <div className='profil'>
        
        <div className='profil_colum'>
          <img className='logoTop' src={icon_profil} alt='logo' />
          <h3>User Information</h3>
          <div >
      

            <CradUser user={user}/>

          </div>

        </div>
        <div className='shipcard'>
          {ships?.filter(el => el?.userId === user?._id).map((ship, i) =>
            <div>
              <CardShip ship={ship} ping={ping} setPing={setPing} />

            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Profile