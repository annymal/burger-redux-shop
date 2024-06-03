import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/cart/cartSlice'
import favoriteReducer from './reducers/favorite/favoriteSlice'
import foodReducer from './reducers/food/foodSlice'

export const store = configureStore({
	reducer: {
		food: foodReducer,
		cart: cartReducer,
		favorite: favoriteReducer
	}
})
