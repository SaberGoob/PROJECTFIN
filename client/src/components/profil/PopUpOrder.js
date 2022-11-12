import React from 'react'
import './Pop.css'
import { useSelector } from 'react-redux';

const PopUpOrder = () => {
  const user = useSelector ((state) => state.user?.user);
  const ships = useSelector(state=>state.ship?.ship);

  return (
    <div className='pop'>

    {/* <p><b>Company: Super Delivery</b></p>
    <p>Phone: 21873599</p>
    <p>Date: 20/21/2019</p> */}
    {/* <p>Etat: Pending</p> */}
    {/* {ships?.filter(el=>el?.userId===user?._id).map((ship,i)=>
<div className='popinformation'>
    <p>Adress: {ship?.adress}</p>
    <p>Demensions: {ship?.demensions}</p>
    <p>Weight: {ship?.weight}</p>
    <p>Methode: {ship?.methode}</p>
    <p>Material: {ship?.material}</p>
     <button>Delete</button>
     <button>Update</button>
</div>
     )}, */}
     </div>

  )
}

export default PopUpOrder