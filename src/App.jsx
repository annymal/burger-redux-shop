import { Route, Routes } from 'react-router-dom'

import './App.scss'
import CartPage from './components/cart/CartPage'
import FavoritesPage from './components/favorites/FavoritesPage'
import OrderPage from './components/order/OrderPage'
import Footer from './components/ui/Footer/Footer'
import Header from './components/ui/Header/Header'
import Layout from './components/ui/Layout/Layout'
import CompleteOrder from './components/order/CompleteOrder'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Layout />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/favorites' element={<FavoritesPage />} />
				<Route path='/order' element={<OrderPage />} />
				<Route path='/complete' element={<CompleteOrder />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
