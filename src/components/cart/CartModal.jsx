import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './CartModal.module.scss'
import { addToCart } from '../../features/cart/cartSlice'
import CartItems from './CartItems'

const CartModal = () => {
	const { cart } = useSelector(store => store.cart)

	let amount = 1
	if (amount < 1) {
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
		<section className={styles.modal_container}>
			<header className={styles.modal}>
				<h2>Корзина</h2>
			</header>
			{cart.map((item, index) => (
				<CartItems key={index} price={item.price} title={item.title} />
			))}
			<footer className={styles.cartFooter}>
				<div className={styles.cartTotal}>
					<h4>
						total: <span>RUB</span>
					</h4>
				</div>
				<button className={styles.clearBtn}>clear cart</button>
			</footer>
		</section>
	)
}
export default CartModal
