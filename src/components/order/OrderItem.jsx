import React from 'react'

import styles from './OrderItem.module.scss'

const OrderItem = ({ image, title, price, amount }) => {
	return (
		<div className={styles.orderBlock}>
			<img src={image} alt='order_img' />
			<div className={styles.orderInfo}>
				<h3>{title}</h3>
				<div className={styles.orderPrice}>
					<span>Кол-во: {amount}</span>
					<span>{price} RUB</span>
				</div>
			</div>
		</div>
	)
}

export default OrderItem
