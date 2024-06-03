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
			state.cartItems.push(action.payload)
		},
		increaseItem: (state, { payload }) => {
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
		removeItem: state => {
			state.cartItems = state.cartItems.filter(item => !item.isChecked) //фильтруем, оставляем все, где isChecked == false. isChecked==true -убираем
		},
		calculateTotals: state => {
			let total = 0
			let amount = 0
			state.cartItems.forEach(item => {
				amount += item.amount
				total += item.amount * item.price
			})
			state.totals = {
				amount: amount,
				total: total
			}
		},
		toggleChecked: (state, { payload }) => {
			const cartItem = state.cartItems.find(
				item => item.id === payload.id
			)
			cartItem.isChecked = !cartItem.isChecked
		}
	}
})

export default cartSlice.reducer
export const {
	addToCart,
	increaseItem,
	decreaseItem,
	removeItem,
	toggleChecked,
	calculateTotals
} = cartSlice.actions
