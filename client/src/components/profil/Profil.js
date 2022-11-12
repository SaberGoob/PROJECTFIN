import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icon_profil from '../images/icon_profil.png';
import './profil.css';
import { deleteShip } from '../../js/userSlice/shipSlice';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const user = useSelector ((state) => state.user?.user);
  const ships = useSelector(state=>state.ship?.ship)
const [show, setShow]= useState(false)

const dispatch =useDispatch()
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
        <p2>Name:{user?.name}</p2>
        <p2>Last name:{user?.lastname}</p2>
        <p2>Email:{user?.email}</p2>
        <p1>Do you Want to change your Password?</p1>
        <button>Update</button>

      </div>
       
      </div>
      <div className='shipcard'>
      {ships?.filter(el=>el?.userId===user?._id).map((ship,i)=>
    <div className='ship_colum'onClick={()=> setShow(!show)}>
    <div className='infoOrder'>
     <p1><b>Company: {ship?.company}</b></p1>
     <p1>Phone: {ship?.phone}</p1>
     <p1>Date: 20/21/2019</p1>
     <p1>Etat: Pending</p1>
    </div>
    {show?
    <div className='ship-section hide'>
    <div className='popinformation'>
    <p>Adress: {ship?.adress}</p>
    <div className='info4'>
    <p>Demensions: {ship?.demensions}</p>
    <p>Weight: {ship?.weight}</p>
    <p>Methode: {ship?.methode}</p>
    <p>Material: {ship?.material}</p>
    </div>
    <p>Message: {ship?.message}</p>
    <div className='btn_profil'>
     <button onClick={() => 
                handleDelete(ship?._id) }>Delete</button>
     <button>Update</button>
     </div>
     </div>
   </div>
   :null}
   </div>
    )}
      </div>
      </div>

      </div>
  )
}

export default Profile