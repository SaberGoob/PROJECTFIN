import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './profil.css';
import { deleteShip } from '../../js/userSlice/shipSlice';

const CardShip = ({ship}) => {
  const [show, setShow]= useState(false)
  
  const dispatch =useDispatch()
      const [ping, setPing] = useState(false);
  
  const handleDelete = (_id) => {
    dispatch(deleteShip(_id));
    setPing(!ping);
  };
console.log(ship)
  return (
    <div>
  {/* {ships?.filter(el=>el?.userId===user?._id).map((ship,i)=> */}
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
    <p>Date Pick Up : {ship?.pickup}</p>
    <div className='btn_profil'>
     <button onClick={() => 
                handleDelete(ship?._id) }>Delete</button>
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

export default CardShip