import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../Slice/counter.slice"

export const store = configureStore({
    reducer: {
        counter:counterReducer
    }
})