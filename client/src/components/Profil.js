import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector ((state) => state.user.user);
  return (
    <div><h1>this my profile {user? user.name: <h1>Loading...</h1>}</h1></div>
  )
}

export default Profile