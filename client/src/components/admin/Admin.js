import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './admin.css';


import { deleteUser, getUser } from '../../js/userSlice/userSlice';
import CardShipAdmin from './CardShipAdmin';
import UserCard from './UserCard';

const Profile = () => {
  const isAuth = localStorage.getItem("token");
  const [ping, setPing] = useState(false)

  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [ping])
  const ships = useSelector(state => state.ship?.ship)
  const users = useSelector((state) => state.user?.users);
  console.log(ships)
  const [selectedUser, setSelectedUser] = useState(users[0])

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    setPing(!ping);
  };

  return (
    <div className='profilship'>
      <div className='profil'>
        <div className='profil_columAdmin'>
          <div className='userInformationAdmin'>
            <div>
             {users?.map((user,i)=><UserCard setSelectedUser={setSelectedUser} key={i} user={user}  />)} 
            </div>


          </div>

        </div>
        <div className='shipcard'>
          <div className='deleteoj'> 
          <h4>Do you want to Delete this User?</h4> 
           <button className='deleteuser' onClick={() => 
                handleDelete(selectedUser?._id) }>Delete</button>
          </div>

          <div className='user_name_email'> 
          <p2>Name:{selectedUser?.name}</p2>
            <p2>Last name:{selectedUser?.lastname}</p2>
            <p2>Email:{selectedUser?.email}</p2>

          </div>
      
          {ships?.filter(el => el?.userId === selectedUser?._id).map((ship, i) =>
            <div>
              <CardShipAdmin ship={ship} ping={ping} setPing={setPing} />

            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Profile