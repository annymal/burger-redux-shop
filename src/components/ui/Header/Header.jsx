import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { Heart, Home, Pizza, ShoppingBasket } from 'lucide-react'

import styles from './Header.module.scss'

const Header = () => {
	const { cartItems } = useSelector(store => store.cart)
	return (
		<nav className={styles.header}>
			<ul>
				<div className={styles.logo}>
					<Pizza />
				</div>
				<li>
					<NavLink to='/'>
						<Home />
					</NavLink>
					<NavLink to='/cart'>
						<ShoppingBasket />
						<span>{cartItems.length}</span>
					</NavLink>

					<NavLink to='/favorites'>
						<Heart />
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Header
