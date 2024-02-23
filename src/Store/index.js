import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./Slices/counterSlice"

const Store = configureStore({
    reducer: { counterSliceReducer }
})

export default Store