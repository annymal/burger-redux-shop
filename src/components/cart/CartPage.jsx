import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Trash2 } from 'lucide-react'

import { calculateTotals, removeItem } from '../../features/cart/cartSlice'
import CartItems from './CartItems'
import styles from './CartPage.module.scss'

const CartPage = () => {
	const { cartItems, totals } = useSelector(store => store.cart)
	// const [checked, setChecked] = useState(false)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(calculateTotals())
	}, [cartItems])

	if (cartItems.length < 1) {
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
			<div className={styles.deleteBlock}>
				<button
					className={styles.btnDelete}
					onClick={() => dispatch(removeItem())}
				>
					<Trash2 size={28} />
				</button>
			</div>

			{cartItems.map((item, index) => (
				<CartItems key={index} {...item} />
			))}

			<hr />
			<footer className={styles.cartFooter}>
				<div className={styles.cartTotal}>
					<h4>
						Итого: <span>{totals.total} RUB</span>
					</h4>
				</div>
				<button className={styles.btnBuy}>Перейти к оформлению</button>
			</footer>
		</section>
	)
}
export default CartPage
