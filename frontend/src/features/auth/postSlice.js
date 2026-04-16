import { createSlice } from "@reduxjs/toolkit";
let initialState ={
    Posts:[],
    isLoading:false
}

let postSlice =createSlice({
 name:"post",
 initialState,
 reducers:{
  readPosts:(state , action)=>{
    state.Posts = action.payload;
  }
 }
 })
 export let {readPosts} = postSlice.actions

 export default postSlice.reducer;