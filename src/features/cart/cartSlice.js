import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cartItems: [],
	totals: 0
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			console.log(action)
			state.cartItems.push(action.payload)
		},
		increaseItem: (state, { payload }) => {
			console.log({ payload })
			const cartItem = state.cartItems.find(
				item => item.id === payload.id
			)
			if (cartItem) {
				cartItem.amount = cartItem.amount + 1
			}
		},

		decreaseItem: (state, { payload }) => {
			const cartItem = state.cartItems.find(
				item => item.id === payload.id
			)
			cartItem.amount = cartItem.amount - 1
		},
		removeItem: (state, action) => {
			const itemId = action.payload
			state.cartItems = state.cartItems.filter(item => item.id !== itemId)
		},
		calculateTotals: state => {
			let total = 0
			let amount = 0
			state.cartItems.forEach(item => {
				amount += item.amount
				total += item.amount * item.price
				console.log(amount)
			})
			state.cartItems.amount = amount
			state.cartItems.total = total
		}
	}
})
export default cartSlice.reducer
export const {
	addToCart,
	increaseItem,
	decreaseItem,
	removeItem,
	calculateTotals
} = cartSlice.actions
