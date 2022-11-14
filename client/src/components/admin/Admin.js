import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icon_profil from '../images/icon_profil.png';
import './admin.css';
import { allShip, deleteShip } from '../../js/userSlice/shipSlice';


import { userCurrent } from '../../js/userSlice/userSlice';
import CardShip from '../profil/CardShip';
import UserCard from './UserCard';

const Profile = () => {
  const user = useSelector ((state) => state.user?.user);
const isAuth=localStorage.getItem("token");

const dispatch =useDispatch()
  useEffect(()=> {
    if (isAuth) {
  dispatch(userCurrent());
  }
  dispatch(allShip())
},[])
const ships = useSelector(state=>state.ship?.ship)
console.log(ships)

    const [ping, setPing] = useState(false);

const handleDelete = (_id) => {
  dispatch(deleteShip(_id));
  setPing(!ping);
};

  // let usersSection = document.querySelector(".ship-section");
  // function showHideUsers(){
  //   usersSection.classList.toggle("hide");
  // }

  return (
    <div className='profilship'>
    <div className='profil'>
        {/* <h1>Company {ship ? ship.company: <h1>Loading...</h1>} </h1> */}
      {/* <h1>this my profile {ship? ship.company: <h1>Loading...</h1>}</h1>  */}
      <div className='profil_colum'>
      <img  className='logoTop' src={icon_profil} alt='logo'/> 
      <h3>User Information</h3>
      <div className='userInformation'>
        {/* <p2>Name:{user?.name}</p2>
        <p2>Last name:{user?.lastname}</p2>
        <p2>Email:{user?.email}</p2>
        <p1>Do you Want to change your Password?</p1>
        <button>Update</button> */}
<div>
  <UserCard user={user}/>
</div>


      </div>
       
      </div>
      <div className='shipcard'>
      {ships?.filter(el=>el?.userId===user?._id).map((ship,i)=>
      <div>
      <CardShip ship={ship}/>
      
      </div>
      )}
      </div>
      </div>

      </div>
  )
}

export default Profile