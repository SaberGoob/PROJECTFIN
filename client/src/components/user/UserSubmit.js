import React from 'react'
import { useSelector } from 'react-redux'
import './usersubmit.css'

const UserSubmit = () => {
  const user=useSelector(state=>state.user?.user)
  console.log(user)

  return (
    <div className='userSubmit'>
   
<h1>
User Name <span>{user?.name}</span>!
</h1>
<h3>Email: {user?.email}</h3>
<h3>PhoneNumber: {user?.PhoneNumber}</h3>
<h3>ZipCode: {user?.ZipCode}</h3>
<h3>DropOffZip: {user?.DropOffZip}</h3>
<h3>weight: {user?.weight}</h3>
<h3>Marterial: {user?.material}</h3>
<h3>Message: {user?.message}</h3>

</div>
  )
}

export default UserSubmit


/*import React from 'react'
import { connect } from 'react-redux'
const UserSubmit = () => {
  return (
    <div>UserSubmit</div>
  )

function mapStateToProps(state) {
    const { user } = state
    return { todoList: user.allIds }
  }
  user.map(company=>{
    return(
        <div>
            <h1>{user.company}</h1>
        </div>
    )
  })
  
};
  export default connect(mapStateToProps)(UserSubmit)*/