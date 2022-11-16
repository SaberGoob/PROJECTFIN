import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import './profil.css';
import { deleteShip, updateShip } from '../../js/userSlice/shipSlice';
import { updateUser } from '../../js/userSlice/userSlice';

const CardUserUpdate = ({user, show,setShow}) => {

  const [ping, setPing] = useState(false);

    const [newUser, setNewUser] = useState({})
    const dispatch = useDispatch()

    const handleChange = (id) => {
      dispatch(updateUser({ id, user: newUser }));
        console.log(id)
  };
  

  return (
    <div>
  {/* {ships?.filter(el=>el?.userId===user?._id).map((ship,i)=> */}
    {show?

    <div className='userInformation'>
        
        <p2>Name:<input
      onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} defaultValue={user?.name}
     
     /> </p2>
            <p2>Last name:<input
      onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })} defaultValue={user?.lastname}
     
     /></p2>
            <p2>Email:<input
      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} defaultValue={user?.email}
     
     /></p2>
     <p2>New Password:<input
      onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} 
     
     /></p2>
     <div  >
     <button onClick={() =>{
      handleChange(user?._id) ; setShow(!show)}} >Update</button>
      </div>
     </div>
        :null}
   </div>

  )
}

export default CardUserUpdate;