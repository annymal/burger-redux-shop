import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	decreaseItem,
	increaseItem,
	removeItem,
	toggleChecked
} from '../../features/cart/cartSlice'
import styles from './CartItems.module.scss'

const CartItems = ({ price, title, image, amount, id, isChecked }) => {
	const dispatch = useDispatch()
	const handleCheckboxChange = () => {
		dispatch(toggleChecked({ id }))
	}

	return (
		<>
			<div className={styles.container}>
				<div className={styles.foodItem}>
					<div>
						<label>
							<input
								className={styles.input}
								onChange={handleCheckboxChange}
								type='checkbox'
							/>
						</label>
					</div>
					<img src={image} alt='food-img' />
					<h3>{title}</h3>
					<h3>RUB {price * amount}</h3>
					<div>
						<div className={styles.quantityBlock}>
							<button
								className={styles.quantityBtn}
								onClick={() => {
									dispatch(decreaseItem({ id }))
								}}
								disabled={amount === 1}
							>
								-
							</button>
							<input
								className={styles.quantityNum}
								value={amount}
								type='number'
							/>

							<button
								className={styles.quantityBtn}
								onClick={() => dispatch(increaseItem({ id }))}
							>
								+
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartItems
