import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './profil.css';
import {  updateShip } from '../../js/userSlice/shipSlice';

const CardUpdate = ({ship,show,setShow,setUpdate,ping,setPing}) => {

    const [newShip, setNewShip] = useState({})
    const dispatch = useDispatch()

    const handleChange = (id) => {
      dispatch(updateShip({ id, ship: newShip }));
      setPing(!ping);
      setUpdate(false);
  };
  


  console.log(ship.pickup)

  return (
    <div>
    <div className='ship_colum'>
    <div className='infoOrder'  onClick={()=> setShow(!show)}>
     
    <p1>Company:<input
      onChange={(e) => setNewShip({ ...newShip, company: e.target.value })} defaultValue={ship?.company}
     
     />
    </p1>
     <p1>Phone: <input
      onChange={(e) => setNewShip({ ...newShip, phone: e.target.value })} defaultValue={ship?.phone}
     
     /></p1>
     <p1>Date: 20/21/2019</p1>
     <p1>Etat: {ship?.etat}</p1>
    </div>
    {show?
    <div className='ship-section hide'>
    <div className='popinformation'>
    <p>Adress: <input
      onChange={(e) => setNewShip({ ...newShip, adress: e.target.value })} defaultValue={ship?.adress}
     
     /></p>
    <div className='info4'>
    <p>Demensions: <input
      onChange={(e) => setNewShip({ ...newShip, demensions: e.target.value })} defaultValue={ship?.demensions}
     
     /></p>
    <p>Weight: <input
      onChange={(e) => setNewShip({ ...newShip, weight: e.target.value })} defaultValue={ship?.weight}
     
     /></p>
    <p>Methode: <input
      onChange={(e) => setNewShip({ ...newShip, methode: e.target.value })} defaultValue={ship?.methode}
     
     /></p>
    <p>Material: <input
      onChange={(e) => setNewShip({ ...newShip, material: e.target.value })} defaultValue={ship?.material}
     
     /></p>
    </div>
    <p>Message: <input
      onChange={(e) => setNewShip({ ...newShip, message: e.target.value })} defaultValue={ship?.message}
     />
     </p>
    <p>Date Pick Up: {ship?.pickup}</p>
    <div className='btn_profil'>
     <button>Delete</button>
     <button onClick={() =>
      handleChange(ship?._id)} >Update</button>
     </div>
     </div>
   </div>
   :null}
   </div>
    {/* )} */}

    </div>
  )
}

export default CardUpdate;