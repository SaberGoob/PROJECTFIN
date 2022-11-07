import logo from './logo.svg';
import './App.css';
import {Routes,Route, Navigate,useNavigate} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout, userCurrent } from './js/userSlice/userSlice';
import Profil from './components/Profil';
import PrivateRoute from './routes/PrivateRoute';


function App() {
   

const navigate=useNavigate();
  const isAuth=localStorage.getItem("token");
  const dispatch = useDispatch ();
  useEffect(()=> {
    if (isAuth) {
  dispatch(userCurrent());
  }
},[])
  return (
    <div className="App">
      <div className='header'>
        <header>
          <h1> RED MAMBA</h1>
          {isAuth?<button onClick={()=>{dispatch(logout());
          navigate("/");
          }}>logout</button>:null}
        </header>
      <Routes>
        <Route  path="/" element={<Register/>}/>
        <Route  path="/login" element={<Login/>} />

        <Route element={<PrivateRoute/>} >
        <Route   path="/profil" element={<Profil/>} />
        </Route> {""}

  
      </Routes>

      </div>
    </div>
  );
}

export default App;
