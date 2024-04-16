import React from 'react'

import styles from './CartItems.module.scss'

const CartItems = ({ price, title, image }) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.foodItem}>
					<img src={image} alt='food-img' />
					<h3>{title}</h3>
					<h3>RUB {price}</h3>
					<input type='number' />
				</div>
			</div>
		</>
	)
}

export default CartItems
