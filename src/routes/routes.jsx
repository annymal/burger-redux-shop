import { Layout } from 'lucide-react'
import { createBrowserRouter } from 'react-router-dom'
import CartPage from '../components/cart/CartPage'
import FavoritesPage from '../components/favorites/FavoritesPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/favorites',
				element: <FavoritesPage />
			},
			{ path: 'cart', element: <CartPage /> }
		]
	}
])
