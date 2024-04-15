import React from 'react'
import styles from './Layout.module.scss'
import { Heart, ShoppingBasket } from 'lucide-react'

const FoodItems = ({ price, image, title }) => {
	return (
		<article className={styles.food_item}>
			<img className={styles.img} src={image} alt='food' />
			<h2>{title}</h2>
			<span className={styles.price}>RUB {price}</span>
			<div className={styles.actions}>
				<ShoppingBasket size={32} />
				<Heart size={32} />
			</div>
		</article>
	)
}

export default FoodItems
