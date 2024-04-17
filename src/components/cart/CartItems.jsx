import React from 'react'
import { useDispatch } from 'react-redux'

import {
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
					<h3>RUB {price}</h3>
					<div>
						<button onClick={() => dispatch(increaseItem({ id }))}>
							+
						</button>
						<input value={amount} type='number' />
						<button
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
		</>
	)
}

export default CartItems
