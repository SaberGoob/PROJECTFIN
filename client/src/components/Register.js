import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { userRegister } from '../js/userSlice/userSlice';

const Register = () => {

    const [register, setRegister] = useState({
        name:"",
        lastname:"",
        email:"",
        password:""
    });
    const dispatch = useDispatch();
    let navigate = useNavigate();
  return (
    <div>   <div className="wrapper">
    <div className="form-signin" onSubmit={(e) => e.preventDefault()}>       
      <h2 className="form-signin-heading">Please Register</h2>
      <input 
      type="text" 
      className="form-control" 
      name="name" 
      placeholder="Please Write your name" 
      required="" 
      autofocus=""
      onChange={(e) => setRegister({...register, name:e.target.value})} />
        <input 
      type="text" 
      className="form-control" 
      name="lastname" 
      placeholder="Please write your lastname" 
      required="" 
      autofocus=""
      onChange={(e) => setRegister({...register, lastname:e.target.value})}
      />
        <input 
      type="text" 
      className="form-control" 
      name="username" 
      placeholder="Email Address" 
      required="" 
      autofocus="" 
      onChange={(e) => setRegister({...register, email:e.target.value})}
      />
      <input type="password"
      class="form-control" 
      name="password"
       placeholder="Password" 
       required=""
       onChange={(e) => setRegister({...register, password:e.target.value})}
       />   

      <button className="btn btn-lg btn-primary btn-block"
       onClick={() =>{ dispatch(userRegister(register)
        );
        setTimeout(() => {
          navigate("/profil");
        }, 400);
        }}>Register</button>

       <h5>you Already have account</h5><Link to="/login"> sign in</Link>   
    </div>
  </div></div>
  )
}

export default Register