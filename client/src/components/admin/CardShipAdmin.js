import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './profil.css';
import { deleteShip } from '../../js/userSlice/shipSlice';
import CardUpdateAdmin from './CardUpdateAdmin';

const CardShip = ({ship}) => {
  const [show, setShow]= useState(false)
  const [update, setUpdate] = useState(false)
  
  const dispatch =useDispatch()
      const [ping, setPing] = useState(false);
  
  const handleDelete = (id) => {
    dispatch(deleteShip(id));
    setPing(!ping);
  };
console.log(ship)
  return (
   update ? <CardUpdateAdmin show={show} setShow={setShow} setUpdate={setUpdate} ship={ship}/> : <div>
  {/* {ships?.filter(el=>el?.userId===user?._id).map((ship,i)=> */}
    <div className='ship_colum'>
    <div className='infoOrder' onClick={()=> setShow(!show)}>
     <p1><b>Company: {ship?.company}</b></p1>
     <p1>Phone: {ship?.phone}</p1>
     <p1>Date: {ship?.createdAt}</p1>
     <p1>Etat: {ship?.etat}</p1>
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
    <p>Date Update : {ship?.updatedAt}</p>

    <div className='btn_profil'>
     <button onClick={() => 
                handleDelete(ship?._id) }>Delete</button>
     <button onClick={()=>setUpdate(true)}>Update</button>
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