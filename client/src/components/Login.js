import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../js/userSlice/userSlice';
import './login.css'
const Login = () => {
    const [login, setLogin] = useState({

    });

    const dispatch = useDispatch();
    let navigate = useNavigate();
  return (
    <div className='login_pad'>
          <div className="wrapper">
    <div className="form-signin"
    onSubmit={(e)=>e.preventDefault}>       
      <h2 className="form-signin-heading">Please login</h2>
      <input 
      type="text" 
      className="form-control" 
      name="email" 
      placeholder="Email Address" 
      required="" 
      autofocus="" 
      onChange={(e) => setLogin({...login, email:e.target.value})}
      />
      <input type="password"
      class="form-control" 
      name="password"
       placeholder="Password" 
       required=""
       onChange={(e) => setLogin({...login, password:e.target.value})}
       />   
          <p>You dont have Account register Now!</p>

   <div className='btn_log_reg'>
      <button className="btn btn-lg btn-primary btn-block" type="submit"
      onClick={()=> {
        dispatch(userLogin(login));
        setTimeout(() => {
          navigate("/profil");
        }, 800);
      }}>Login</button> 

      
      <Link to="/register"><button>Register</button> </Link></div>   
  
    </div>
  </div>
    </div>
  )
}

export default Login