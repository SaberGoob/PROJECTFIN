// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios';




// export const shipAdd = createAsyncThunk("ship/add", async (ship)=>{
//     try {
//         let response = await axios.post(
//             "http://localhost:5000/ship/add",
//             ship);
//             return  response.data;

//     } catch (error) {
//         console.log(error);
//     }
// });


// const initialState={
//     user:null,
//     status:null,
// };
// export const shipSlice = createSlice({
//   name: 'ship',
//   initialState,
//   reducers: {
//     ship:(state,action) => {
//         SVGMarkerElement.ship = null;
//     }
//   },
//   extraReducers:{
//     [shipAdd.pending]:(state)=>{
//         state.status= "pending";
//     },
//     [shipAdd.fulfilled]:(state,action)=>{
//         state.status="succes";
//         state.ship = action.payload.ship;
//         localStorage.setItem("token",action.payload.token);
//     },
   

//   },
// })

   
//  export const { ship} = shipSlice.actions;

// // Action creators are generated for each case reducer function
// // export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default shipSlice.reducer




import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
// add a new ship

export const addShip = createAsyncThunk("ship/add",async(ship)=> {
    try {
        let response = await axios.post("http://localhost:5000/ship/add",ship);
  
        return await response.data;
    } catch (error) {
        console.log(error);
    }
});
// get all ship
export const allShip = createAsyncThunk("ship/all", async () => {
    try {
      let response = await axios.get("http://localhost:5000/ship/Ship");
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  });
  // get ship by filter
  // export const shipFilter = createAsyncThunk("ship/shipfilter", async (text) => {
  //   try {
  //     let response = await axios.post("http://localhost:5000/ship/allShip",text) 
  //       return response.data;
  //   } catch (error) {
  //       console.log(error)
  //   }
  // });
  // update ship
  export const updateShip = createAsyncThunk("ship/update/:id", async ({id,ship}) => {
    try {
      let response = await axios.put(`http://localhost:5000/ship/update/${id}`,ship) 
        return response.data;
    } catch (error) {
        console.log(error)
    }
  });
   // delete ship
   export const deleteShip = createAsyncThunk("ship/delete/:id", async (id) => {
    try {
      let response = await axios.delete(`http://localhost:5000/ship/delete/${id}`) 
        return response.data;
    } catch (error) {
        console.log(error)
    }
  });
const initialState = {
    ship: null,
    status:null,
    ship: null,
  }
  
  const ShipSlice = createSlice({
    name: 'ship',
    initialState,
    reducers: {
      
    },
    extraReducers:{
        //add a new ship
        [addShip.pending]: (state) => {
            state.status = "pending";
          },
          [addShip.fulfilled]: (state,action) => {
            state.status = "success";
            state.ship = action.payload?.ship;
          },
          [addShip.rejected]: (state) => {
            state.status = "failed";
          },
          //get all ship
          [allShip.pending]: (state) => {
            state.status = "pending";
          },
          [allShip.fulfilled]: (state, action) => {
            state.status = "success";
            state.ship = action.payload?.searchedShip;
          },
          [allShip.rejected]: (state) => {
            state.status = "failed";
          },
          //  //get ship by filter
          // [shipFilter.pending]: (state) => {
          //   state.status = "pending";
          // },
          // [shipFilter.fulfilled]: (state, action) => {
          //   state.status = "success";
          //   state.ship = action.payload?.allShip;
          // },
          // [shipFilter.rejected]: (state) => {
          //   state.status = "failed";
          // },
          // update ship
          [updateShip.pending]: (state) => {
            state.status = "pending";
          },
          [updateShip.fulfilled]: (state, action) => {
            state.status = "success";
            state.ship = action.payload?.ship;
          },
          [updateShip.rejected]: (state) => {
            state.status = "failed";
          },
           // delete ship
           [deleteShip.pending]: (state) => {
            state.status = "pending";
          },
          [deleteShip.fulfilled]: (state, action) => {
            state.status = "success";
            state.ship = action.payload?.ship;
          },
          [deleteShip.rejected]: (state) => {
            state.status = "failed";
          },
    },
  })
  

  export default ShipSlice.reducer