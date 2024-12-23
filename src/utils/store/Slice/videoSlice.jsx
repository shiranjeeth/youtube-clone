import { createSlice } from "@reduxjs/toolkit";

const videosData = createSlice({
    name : "videosData",
    initialState : {
        isVideoData : null
    },
    reducers:{
     getVideodata : (state,action)=>{
        state.isVideoData = action.payload
     }
    }
})
export const {getVideodata} = videosData.actions
export default videosData.reducer
