import React from 'react'

import './usercard.css'

const UserCard = ({user,setSelectedUser}) => {
    console.log(user)

  return (
    <div className='userAdminName'
    onClick={()=>setSelectedUser(user._id)}>
        <p2>{user?.name}</p2>
    
    </div>
  )
}

export default UserCard