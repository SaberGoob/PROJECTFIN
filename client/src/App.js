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
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import MinDisc from './components/TopDisc/MinDisc';
import UserTopDisc from './components/user/TopDiscUser';
import Home from './components/view/home/Home';
import UserName from './components/user/UserName';
import TopLogin from './components/combination/TopLogin'






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
        <header>
          {isAuth?<button onClick={()=>{dispatch(logout());
          navigate("/");
          }}>logout</button>:null}
        </header>


        <Navbar />

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/userName" element={<UserName />} />
  <Route path="/userinformation" element={<UserTopDisc/>} />
  <Route path="submit" element={ <TopLogin />} />
  <Route  path="/register" element={<Register/>}/>
        <Route  path="/login" element={<Login/>} />
        
        <Route element={<PrivateRoute/>} >
        <Route   path="/profil" element={<Profil/>} />
        </Route> {""}

</Routes>
<MinDisc />
<Footer />


      </div>
  );
}

export default App;
