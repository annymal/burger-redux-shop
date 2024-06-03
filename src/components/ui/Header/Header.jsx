import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import styles from './Header.module.scss'
import { calculateTotals } from '../../../store/reducers/cart/cartSlice'

const Header = () => {
	const { cartItems, totals } = useSelector(store => store.cart)
	const { favoriteItems } = useSelector(store => store.favorite)
	const dispatch= useDispatch()

	useEffect(() => {
		dispatch(calculateTotals())
	}, [cartItems])

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
		<header className={styles.headerMenu}>
			<ul className={styles.headerList}>
				<div className={styles.logo}>
					<h2 className={styles.logo_header}>Burgur</h2>
				</div>
				<li className={styles.headerLi}>
					<NavLink to='/'>
						Home
					</NavLink>
					<NavLink to='/cart'>
						Basket
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
								{cartItems.length > 0 ? totals.amount : ''}
							</span>
						</CSSTransition>
					</NavLink>

					<NavLink to='/favorites'>
						Favorites
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
		</header>
	)
}

export default Header
