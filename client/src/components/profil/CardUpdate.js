import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import './profil.css';
import { deleteShip } from '../../js/userSlice/shipSlice';

const CardUpdate = ({ship}) => {
  const [show, setShow]= useState(false)
  

    const [newShip, setNewShip] = useState({})

  console.log(ship.pickup)

  return (
    <div>
  {/* {ships?.filter(el=>el?.userId===user?._id).map((ship,i)=> */}
    <div className='ship_colum'onClick={()=> setShow(!show)}>
    <div className='infoOrder'>
     
    <p1>Company:<input
      onChange={(e) => setNewShip({ ...newShip, company: e.target.value })} defaultValue={ship?.company}
     
     />
    </p1>
     <p1>Phone: <input
      onChange={(e) => setNewShip({ ...newShip, phone: e.target.value })} defaultValue={ship?.phone}
     
     /></p1>
     <p1>Date: 20/21/2019</p1>
     <p1>Etat: <input
      onChange={(e) => setNewShip({ ...newShip, etat: e.target.value })} defaultValue={ship?.etat}
     
     /></p1>
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
     <button>Update</button>
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