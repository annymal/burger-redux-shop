import { createSlice } from '@reduxjs/toolkit'
import foodItems from '../../foodItems'

const initialState = {
	foodItems: foodItems
}

const foodSlice = createSlice({
	name: 'food',
	initialState,
	reducers: {}
})
export default foodSlice.reducer
