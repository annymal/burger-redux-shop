import App from './App.jsx'
import './index.css'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { store } from './store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
)
