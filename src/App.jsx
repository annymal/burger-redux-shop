import './App.css'
import Footer from './components/ui/Footer/Footer'
import Header from './components/ui/Header/Header'
import Layout from './components/ui/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import CartModal from './components/cart/CartModal'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Layout />} />
				<Route path='/cart' element={<CartModal />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
