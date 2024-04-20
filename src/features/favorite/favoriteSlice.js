import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	favoriteItems: []
}
const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addToFavorites: (state, action) => {
			state.favoriteItems = state.favoriteItems.push(action.payload)
		},
		removeFavoriteItem: (state, { payload }) => {
			state.favoriteItems = state.favoriteItems.filter(
				item => item.id !== payload.id
			)
		}
	}
})
export default favoriteSlice.reducer
export const { addToFavorites, removeFavoriteItem } = favoriteSlice.actions
