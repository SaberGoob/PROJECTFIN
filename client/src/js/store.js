import {configureStore} from "@reduxjs/toolkit";
import shipSlice from "./userSlice/shipSlice";
import userSlice from "./userSlice/userSlice";


export const store = configureStore({
    reducer:{
        user: userSlice,
        ship: shipSlice,
    },
});