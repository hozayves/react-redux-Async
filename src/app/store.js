import { configureStore } from "@reduxjs/toolkit"
import infoDataSlice from "../features/infoData/infoDataSlice"


export const store = configureStore({
    reducer: {
        info: infoDataSlice
    }
})