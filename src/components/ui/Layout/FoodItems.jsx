import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Heart, ShoppingBasket } from 'lucide-react'

import { addToCart, increaseItem } from '../../../features/cart/cartSlice'
import styles from './Layout.module.scss'

const FoodItems = ({ price, image, title, id, amount }) => {
	const dispatch = useDispatch()

	const onClickAdd = () => {
		console.log(amount)
		const item = {
			id,
			title,
			price,
			image,
			amount
		}
		dispatch(addToCart(item))
		if (item.amount > 0) {
			console.log(item)
			dispatch(increaseItem({ id }))
		}
	}

	return (
		<article className={styles.food_item}>
			<img className={styles.img} src={image} alt='food' />
			<h2>{title}</h2>
			<span className={styles.price}>RUB {price}</span>
			<div className={styles.actions}>
				<button onClick={onClickAdd}>
					<ShoppingBasket size={32} />
					<span></span>
				</button>
				<Heart size={32} />
			</div>
		</article>
	)
}

export default FoodItems
