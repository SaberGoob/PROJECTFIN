import React from "react";
import { useSelector } from "react-redux";
import {Outlet , Navigate} from "react-router-dom";
const AdminRoute=() =>{
    const user = useSelector(store=>store.user?.user)
    console.log(user)
    return user?.isAdmin ? <Outlet /> : <Navigate to="/profil" />;
}

export default AdminRoute