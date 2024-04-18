import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
	calculateTotals,
	decreaseItem,
	increaseItem,
	removeItem
} from '../../features/cart/cartSlice'
import styles from './CartItems.module.scss'

const CartItems = ({ price, title, image, amount, id }) => {
	const dispatch = useDispatch()

	return (
		<>
			<div className={styles.container}>
				<div className={styles.foodItem}>
					<img src={image} alt='food-img' />
					<h3>{title}</h3>
					<h3>RUB {price * amount}</h3>
					<div>
						<div className={styles.quantityBlock}>
							<button
								className={styles.quantityBtn}
								onClick={() => dispatch(increaseItem({ id }))}
							>
								+
							</button>
							<input
								className={styles.quantityNum}
								value={amount}
								type='number'
							/>
							<button
								className={styles.quantityBtn}
								onClick={() => {
									if (amount === 1) {
										dispatch(removeItem(id))
									}
									dispatch(decreaseItem({ id }))
								}}
							>
								-
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartItems
