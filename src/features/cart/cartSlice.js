import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cart: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cart.push(action.payload)
		},
		increaseItem: (state, { payload }) => {
			const cartItem = state.cart.find(item => item.id === payload.id)
			cartItem.amount = cartItem.amount + 1
		},
		decreaseItem: (state, { payload }) => {
			const cartItem = state.cart.find(item => item.id === payload.id)
			cartItem.amount = cartItem.amount - 1
		},
		removeItem: (state, action) => {
			const itemId = action.payload
			state.cart = state.cart.filter(item => item.id !== itemId)
		}
	}
})
export default cartSlice.reducer
export const { addToCart, increaseItem, decreaseItem, removeItem } =
	cartSlice.actions
