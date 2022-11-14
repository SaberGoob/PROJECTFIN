import React from 'react'

const UserCard = ({user}) => {
    console.log(user)

  return (
    <div>
        <p2>Name:{user?.name}</p2>
        <p2>Last name:{user?.lastname}</p2>
        <p2>Email:{user?.email}</p2>
        <p1>Do you Want to change your Password?</p1>
        <button>Update</button>
    </div>
  )
}

export default UserCard