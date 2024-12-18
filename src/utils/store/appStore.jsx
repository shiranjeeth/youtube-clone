import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slice/appSlice.jsx"
const store = configureStore({
    reducer : {
    // {name of slice} and {pathname of slice}
    app: appSlice,
    }
})

export default store