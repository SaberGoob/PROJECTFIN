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

 // get all users
 export const getUser = createAsyncThunk("user/getall/", async () => {
    try {
      let response = await axios.get("http://localhost:5000/user/all");
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  });

  // delete user
  export const deleteUser = createAsyncThunk("user/delete/", async (id) => {
     
    try {
   let response = await axios.delete(`http://localhost:5000/user/delete/${id}`);
   return await response.data;
 } catch (error) {
   console.log(error);
 }
});


const initialState={
    user:null,
    status:null,
    users:[],
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

    // get all users
    [getUser.fulfilled]: (state, action) => {
        state.status = "success";
        state.users = action.payload?.result;
      },
      [getUser.rejected]: (state) => {
        state.status = "failed";
      },
      [getUser.pending]: (state) => {
        state.status = "pending";
      },
       // delete user
       [deleteUser.fulfilled]: (state, action) => {
        state.status = "success";
        state.searchedUser = action.payload?.user;
      },
      [deleteUser.rejected]: (state) => {
        state.status = "failed";
      },
      [deleteUser.pending]: (state) => {
        state.status = "pending";
      },

  },
})

   
 export const { logout} = userSlice.actions;

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default userSlice.reducer