import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './usersubmit.css'

const UserSubmit = () => {
  const user=useSelector(state=>state.user?.user)
  console.log(user)

  return (
    <div className='userName'>
   <Link to='/userinformation'>
<h1>
User Name <span>{user?.name}</span></h1></Link>
</div>
  )
}

export default UserSubmit

