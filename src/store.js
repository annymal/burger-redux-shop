import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './features/cart/cartSlice'
import foodReducer from './features/food/foodSlice'

export const store = configureStore({
	reducer: {
		food: foodReducer,
		cart: cartReducer
	}
})
