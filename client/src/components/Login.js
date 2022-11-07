import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../js/userSlice/userSlice';

const Login = () => {
    const [login, setLogin] = useState({
        email:"",
        password:"",
    });

    const dispatch = useDispatch();
    let navigate = useNavigate();
  return (
    <div>
          <div className="wrapper">
    <form className="form-signin"
    onSubmit={(e)=>e.preventDefault}>       
      <h2 className="form-signin-heading">Please login</h2>
      <input 
      type="text" 
      className="form-control" 
      name="username" 
      placeholder="Email Address" 
      required="" 
      autofocus="" 
      onChange={(e) => setLogin({...Login, email:e.target.value})}
      />
      <input type="password"
      class="form-control" 
      name="password"
       placeholder="Password" 
       required=""
       onChange={(e) => setLogin({...Login, password:e.target.value})}
       />      
      <label className="checkbox">
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
      </label>
      <button className="btn btn-lg btn-primary btn-block" type="submit"
      onClick={()=> {
        dispatch(userLogin(login))
        navigate("/profil");
      }}>Login</button> 
      <h5>you dont have account ?</h5><Link to="/"> Register Now</Link>   
  
    </form>
  </div>
    </div>
  )
}

export default Login