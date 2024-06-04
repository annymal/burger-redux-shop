import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'login',
    async ({email, password}, {rejectWithValue}) => {
        try {
            const response = await axios.get(`http://localhost:3000/users?email=${email}&password=${password}`)
            if (response.data.length === 0) {
                return rejectWithValue('Пользователь не найден')
            }
            return response.data.length[0];
        } catch(e) {
            return rejectWithValue("Произошла ошибка при авторизации")
            
        }
       
    }
)

export const registerUser = createAsyncThunk(
    'register',
    async (data, {rejectWithValue}) => {
        try {
            const response = await axios.post('http://localhost:3000/users', data)
            const user = response.data
            sessionStorage.setItem('token', user.token)
            return user
        } catch(e) {
            if (e.response && e.response.data.message) {
                return rejectWithValue(e.response.data.message)
            } else {
                return rejectWithValue(e.message)
            }
        }
       
    }
)