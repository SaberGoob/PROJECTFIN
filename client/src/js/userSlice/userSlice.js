import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const userRegister = createAsyncThunk("user/register", async (user)=>{
    try {
        let response = await axios.post(
            "http://localhost:5000/user/register",
            user);
            return  response.data;

    } catch (error) {
        console.log(error);
    }
});

export const userLogin = createAsyncThunk("user/login", async (user)=>{
    try {
        let response = await axios.post(
            "http://localhost:5000/user/login",
            user);
            return  response.data;

    } catch (error) {
        console.log(error);
    }
});

export const userCurrent = createAsyncThunk("user/Current", async ()=>{
    try {
        let response = await axios.get(
            "http://localhost:5000/user/current",
            {headers:{Authorization:localStorage.getItem("token"),},
        
        });
            return  response.data;

    } catch (error) {
        console.log(error);
    }
});

const initialState={
    user:null,
    status:null,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout:(state,action) => {
        SVGMarkerElement.user = null;
        localStorage.removeItem("token");
    }
  },
  extraReducers:{
    [userRegister.pending]:(state)=>{
        state.status= "pending";
    },
    [userRegister.fulfilled]:(state,action)=>{
        state.status="succes";
        state.user = action.payload.user;
        localStorage.setItem("token",action.payload.token);
    },
    [userLogin.rejected]:(state) => {
        state.status = "fail";
    },


    [userLogin.pending]:(state)=>{
        state.status= "pending";
    },
    [userLogin.fulfilled]:(state,action)=>{
        state.status="succes";
        state.user = action.payload.user;
        localStorage.setItem("token",action.payload.token);
    },
    [userLogin.rejected]:(state) => {
        state.status = "fail";
    },

    
    [userCurrent.pending]:(state)=>{
        state.status= "pending";
    },
    [userCurrent.fulfilled]:(state,action)=>{
        state.status="succes";
        state.user = action.payload?.user;
    },
    [userCurrent.rejected]:(state) => {
        state.status = "fail";
    },
  },
})

   
 export const { logout} = userSlice.actions;

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default userSlice.reducer