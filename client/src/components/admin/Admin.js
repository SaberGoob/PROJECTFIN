import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icon_profil from '../images/icon_profil.png';
import './admin.css';
import { allShip, deleteShip } from '../../js/userSlice/shipSlice';


import { deleteUser, getUser, userCurrent } from '../../js/userSlice/userSlice';
import CardShip from '../profil/CardShip';
import UserCard from './UserCard';

const Profile = () => {
  const isAuth = localStorage.getItem("token");

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [])
  const ships = useSelector(state => state.ship?.ship)
  const users = useSelector((state) => state.user?.users);
  console.log(ships)
  const [selectedUser, setSelectedUser] = useState(users[0]?._id)

  const [ping, setPing] = useState(false);

  const handleDelete = (_id) => {
    dispatch(deleteUser(_id));
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
        <div className='profil_columAdmin'>
          <div className='userInformationAdmin'>
            {/* <p2>Name:{user?.name}</p2>
        <p2>Last name:{user?.lastname}</p2>
        <p2>Email:{user?.email}</p2>
        <p1>Do you Want to change your Password?</p1>
        <button>Update</button> */}
            <div>
             {users?.map((user,i)=><UserCard setSelectedUser={setSelectedUser} key={i} user={user} />)} 
            </div>


          </div>

        </div>
        <div className='shipcard'>
          <div className='deleteoj'> 
          <h4>Do you want to Delete this User?</h4> 
           <button className='deleteuser' onClick={() => 
                handleDelete(users?._id) }>Delete</button>
          </div>

          <div className='user_name_email'> 
          

          </div>
      
          {ships?.filter(el => el?.userId === selectedUser).map((ship, i) =>
            <div>
              <CardShip ship={ship} />

            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Profile