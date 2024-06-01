import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

import { ShoppingBasket } from 'lucide-react'

import { calculateTotals, removeItem } from '../../features/cart/cartSlice'
import CartItems from './CartItems'
import styles from './CartPage.module.scss'

const CartPage = () => {
	const { cartItems, totals } = useSelector(store => store.cart)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(calculateTotals())
	}, [cartItems])

	if (cartItems.length < 1) {
		return (
			<section className={styles.modal_container}>
				<header className={styles.cartHeader}>
					<h2>Корзина пуста</h2>
					<h3 className='empty-cart'>
						Добавляйте товары с помощью <ShoppingBasket />
					</h3>
					<h4>
						Перейти в <NavLink to='/'>главное меню</NavLink>
					</h4>
				</header>
			</section>
		)
	}

	return (
		<section className={styles.basket_container}>
			<header>
				<h2>Корзина</h2>
			</header>
			<div className={styles.deleteBlock}>
				<button
					className={styles.btnDelete}
					onClick={() => dispatch(removeItem())}
				>
					Удалить выбранные
				</button>
			</div>

			{cartItems.map((item, index) => (
				<CartItems key={index} {...item} />
			))}

			<hr />
			<footer className={styles.cartFooter}>
				<div className={styles.cartTotal}>
					<h3>
						Итого: <strong>{totals.total} RUB</strong>
					</h3>
				</div>
				<button
					onClick={() => navigate('/order')}
					className='btn-primary'
				>
					<NavLink to='/order'>Перейти к оформлению</NavLink>
				</button>
			</footer>
		</section>
	)
}
export default CartPage
