import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slice/appSlice.jsx"
import videoData from "./Slice/videoSlice.jsx"
import searchSlice from "./Slice/searchSlice.jsx"
const store = configureStore({
    reducer : {
    // {name of slice} and {pathname of slice}
    app: appSlice,
    videosData : videoData,
    search : searchSlice
    }
})

export default store