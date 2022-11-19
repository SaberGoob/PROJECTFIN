import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout, userCurrent } from './js/userSlice/userSlice';
import Profil from './components/profil/Profil';
import PrivateRoute from './routes/PrivateRoute';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import MinDisc from './components/TopDisc/MinDisc';
import UserTopDisc from './components/user/TopDiscUser';
import Home from './components/view/home/Home';
import UserName from './components/user/UserName';
import TopLogin from './components/combination/TopLogin'
import { allShip } from './js/userSlice/shipSlice';
import Admin from './components/admin/Admin'
import AdminRoute from './routes/AdminRoute';
import About from './page/About';
import Thanks from './components/contact/Thanks';
import TopDisc from './components/user/TopDiscUser';


function App() {


  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
    dispatch(allShip())
  }, [])
  return (
    <div className="App">


      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userName" element={<UserName />} />
        
        <Route path="/userinfomation" element={<TopDisc />} />

        <Route path="/thanks" element={<Thanks />} />
        <Route path="submit" element={<TopLogin />} />


        <Route path="about" element={<About />} />




        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />} >
          <Route element={<AdminRoute />} >
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="/profil" element={<Profil />} />
        </Route> {""}

      </Routes>
      <MinDisc />
      <Footer />


    </div>
  );
}

export default App;
