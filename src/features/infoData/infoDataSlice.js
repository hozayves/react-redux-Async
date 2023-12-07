import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchInfo = createAsyncThunk("info/fetchInfo", async () => {
    try {
        const result = await axios("api/users");
        return result.data.users
    } catch (error) {
        console.log(error.message)
    }
})


const infoDataSlice = createSlice({
    name: "info",
    initialState: {
        data: [],
        status: 'idle',
        error: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchInfo.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchInfo.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.data = state.data.concat(action.payload)
        })
        .addCase(fetchInfo.rejected, (state, action) => {
            state.error = action.payload
            state.status = 'failed'
        })

    }
})

export default infoDataSlice.reducer