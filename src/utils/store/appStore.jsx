import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slice/appSlice.jsx"
import videoData from "./Slice/videoSlice.jsx"
import searchSlice from "./Slice/searchSlice.jsx"
import chatSlice from "./Slice/chatSlice.jsx"
const store = configureStore({
    reducer : {
    // {name of slice} and {pathname of slice}
    app: appSlice,
    videosData : videoData,
    search : searchSlice,
    chat : chatSlice
    }
})

export default store