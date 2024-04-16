import { Route, Routes } from 'react-router-dom'

import './App.css'
import CartPage from './components/cart/CartPage'
import Footer from './components/ui/Footer/Footer'
import Header from './components/ui/Header/Header'
import Layout from './components/ui/Layout/Layout'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Layout />} />
				<Route path='/cart' element={<CartPage />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
