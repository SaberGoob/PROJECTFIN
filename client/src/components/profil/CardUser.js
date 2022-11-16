import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import CardUserUpdate from './CardUserUpdate';



const CardUser = ({user}) => {
  const [show, setShow]= useState(false)


  const [updateUser, setUpdateUser] = useState(false);
  
  return (
    show ? <CardUserUpdate show={show} setShow={setShow}  setUpdate={setUpdateUser} user={user}/> : <div> 
    <div className='userInformation'>
        <p2>Name:{user?.name}</p2>
            <p2>Last name:{user?.lastname}</p2>
            <p2>Email:{user?.email}</p2>
            <p1>Do you Want to change your Password?</p1>
            <button onClick={()=>setShow(true) }>Update</button> 
    </div>
    </div>
  )
}

export default CardUser;