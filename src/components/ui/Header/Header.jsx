import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { Heart, Home, Pizza, ShoppingBasket } from 'lucide-react'

import styles from './Header.module.scss'

const Header = () => {
	const { cartItems } = useSelector(store => store.cart)

	const [triggerAnimation, setTriggerAnimation] = useState(false)

	useEffect(() => {
		setTriggerAnimation(true)
		setTimeout(() => {
			setTriggerAnimation(false)
		}, 300)
	}, [cartItems.length])

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
						<CSSTransition
							in={triggerAnimation}
							classNames='cartItem'
							timeout={300}
						>
							<span
								className={
									cartItems.length > 0
										? styles.cartIndicator
										: ''
								}
							>
								{cartItems.length > 0 ? cartItems.length : ''}
							</span>
						</CSSTransition>
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
