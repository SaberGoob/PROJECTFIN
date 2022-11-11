import React from 'react';
import { useSelector } from 'react-redux';
import icon_profil from '../images/icon_profil.png';
import './profil.css';
import PopUpOrder from './PopUpOrder';

const Profile = () => {
  const user = useSelector ((state) => state.user?.user);
  const ships = useSelector(state=>state.ship?.ship)
  

  return (
    <div className='profil'>
        {/* <h1>Company {ship ? ship.company: <h1>Loading...</h1>} </h1> */}
      {/* <h1>this my profile {ship? ship.company: <h1>Loading...</h1>}</h1>  */}
      <div className='profil_colum'>
      <img  className='logoTop' src={icon_profil} alt='logo'/> 
      <h3>User Information</h3>
      <div className='userInformation'>
        <p2>Name:{user?.name}</p2>
        <p2>Last name:{user?.lastname}</p2>
        <p2>Email:{user?.email}</p2>
        <p1>Do you Want to change your Password?</p1>
        <button>Update</button>

      </div>
       
      </div>

    {ships?.filter(el=>el?.userId===user?._id).map((ship,i)=>
    <div className='ship_colum'>
    <div className='infoOrder'>
     <p1><b>Company: {ship?.company}</b></p1>
     <p1>Phone: {ship?.phone}</p1>
     <p1>Date: 20/21/2019</p1>
     <p1>Etat: Pending</p1>
    </div>
    <PopUpOrder/>
   </div>
    )}
      
      
      
      
      
      </div>
  )
}

export default Profile