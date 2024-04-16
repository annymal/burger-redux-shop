import { createSlice } from '@reduxjs/toolkit'
import foodItems from '../../foodItems'

const initialState = {
	foodItems: foodItems,
	amount: 1,
	total: 0
}

const foodSlice = createSlice({
	name: 'food',
	initialState,
	reducers: {
		// addFood: (state, action) => {
		// 	state.push({ ...action.payload })
		// }
	}
})
export default foodSlice.reducer
export const { addFood } = foodSlice.actions
