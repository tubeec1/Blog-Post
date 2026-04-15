import { createSlice } from "@reduxjs/toolkit";
let initialState ={
    user:null,
    token:null
}

let authSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUsers:( state ,action)=>{
         state.user=action.payload.user
         state.token=action.payload.token
        },
        logout:(state )=>{
            state.user=null
            state.token=null
           localStorage.removeItem("user");
           localStorage.removeItem("token");
        }
    }
})

export let {setUsers , logout}=authSlice.actions

export default authSlice.reducer