import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './features/cart/cartSlice'
import favoriteReducer from './features/favorite/favoriteSlice'
import foodReducer from './features/food/foodSlice'

export const store = configureStore({
	reducer: {
		food: foodReducer,
		cart: cartReducer,
		favorite: favoriteReducer
	}
})
