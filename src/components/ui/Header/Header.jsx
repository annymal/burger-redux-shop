import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { Heart, Home, Pizza, ShoppingBasket } from 'lucide-react'

import styles from './Header.module.scss'

const Header = () => {
	const { cartItems } = useSelector(store => store.cart)
	const { favoriteItems } = useSelector(store => store.favorite)

	const [animationOnCart, setAnimationOnCart] = useState(false)
	const [animationOnFavorite, setAnimationOnFavorite] = useState(false)

	useEffect(() => {
		setAnimationOnCart(true)
		setTimeout(() => {
			setAnimationOnCart(false)
		}, 300)
	}, [cartItems.length])

	useEffect(() => {
		setAnimationOnFavorite(true)
		setTimeout(() => {
			setAnimationOnFavorite(false)
		}, 300)
	}, [favoriteItems.length])

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
							in={animationOnCart}
							classNames='cartItem'
							timeout={300}
						>
							<span
								className={
									cartItems.length > 0 ? styles.indicator : ''
								}
							>
								{cartItems.length > 0 ? cartItems.length : ''}
							</span>
						</CSSTransition>
					</NavLink>

					<NavLink to='/favorites'>
						<Heart />
						<CSSTransition
							in={animationOnFavorite}
							classNames='cartItem'
							timeout={300}
						>
							<span
								className={
									favoriteItems.length > 0
										? styles.indicator
										: ''
								}
							>
								{favoriteItems.length > 0
									? favoriteItems.length
									: ''}
							</span>
						</CSSTransition>
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Header
