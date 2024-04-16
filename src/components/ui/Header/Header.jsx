import styles from './Header.module.scss'
import { Heart, Home, Pizza, ShoppingBasket } from 'lucide-react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {
	const { cart } = useSelector(store => store.cart)
	return (
		<header>
			<div className={styles.logo}>
				<Pizza />
			</div>
			<ul>
				<li>
					<NavLink to='/'>
						<Home />
					</NavLink>
					<NavLink to='/cart'>
						<ShoppingBasket />
						<span>{cart.length}</span>
					</NavLink>

					<NavLink to='/favorites'>
						<Heart />
					</NavLink>
				</li>
			</ul>
		</header>
	)
}

export default Header
