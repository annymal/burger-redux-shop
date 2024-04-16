import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart } from '../../features/cart/cartSlice'
import CartItems from './CartItems'
import styles from './CartPage.module.scss'

const CartPage = () => {
	const { cart } = useSelector(store => store.cart)

	if (cart.length < 1) {
		return (
			<section className={styles.modal_container}>
				<header className={styles.modal}>
					<h2>your bag</h2>
					<h4 className='empty-cart'> is currently empty</h4>
				</header>
			</section>
		)
	}

	return (
		<section className={styles.basket_container}>
			<header>
				<h2>Корзина</h2>
			</header>
			{cart.map((item, index) => (
				<CartItems key={index} {...item} />
			))}
			<hr />
			<footer className={styles.cartFooter}>
				<div className={styles.cartTotal}>
					<h4>
						Итого: <span>RUB</span>
					</h4>
				</div>
				<button className={styles.clearBtn}>clear cart</button>
			</footer>
		</section>
	)
}
export default CartPage
