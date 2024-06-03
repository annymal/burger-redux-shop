import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    users: [],
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: { 
        }
    }
)

export default authSlice.reducer;

