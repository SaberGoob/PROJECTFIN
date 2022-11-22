import React from 'react'

import './usercard.css'

const UserCard = ({ user, setSelectedUser,ping,setPing }) => {
  console.log(user)

  return (
    <div className='userAdminName'
      onClick={() => setSelectedUser(user)}>
      <p2>{user?.name}</p2>

    </div>
  )
}

export default UserCard