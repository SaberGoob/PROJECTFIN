import React from 'react';
import { useSelector } from 'react-redux';
import icon_profil from '../images/icon_profil.png';
import './profil.css';
import PopUpOrder from './PopUpOrder';

const Profile = () => {
  const user = useSelector ((state) => state.user.user);
  const ship=useSelector(state=>state.ship?.ship)


  return (
    <div className='profil'>
          {/* <h1>Company {ship? ship.company: <h1>Loading...</h1>} </h1>
      <h1>this my profile {user? user.name: <h1>Loading...</h1>}</h1> */}
      <div className='profil_colum'>
      <img  className='logoTop' src={icon_profil} alt='logo'/> 
      <h3>User Information</h3>
      <div className='userInformation'>
        <p2>Name:Saber</p2>
        <p2>Last name:Goob</p2>
        <p2>Email:saber.goob14@gmail.com</p2>
        <p1>Do you Want to change your Password?</p1>
        <button>Update</button>

      </div>
       
      </div>


      <div className='ship_colum'>
       <div className='infoOrder'>
        <p1><b>Company: Super Delivery</b></p1>
        <p1>Phone: 21873599</p1>
        <p1>Date: 20/21/2019</p1>
        <p1>Etat: Pending</p1>
       </div>
       <PopUpOrder/>
      </div>
      
      
      
      
      </div>
  )
}

export default Profile