import { createSlice } from "@reduxjs/toolkit"
import { loginUser, registerUser } from "../../thunks/auth"

const initialState = {
    isLoading: false,
    user: {
        token: '',
        user: {}
    },
    isLogged: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogged = true
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLogged = true
            state.isLoading = false
        })
        .addCase(registerUser.rejected, (state) => {
            state.isLogged = false
            state.isLoading = false
        })
    }
    }
)


export default authSlice.reducer;

