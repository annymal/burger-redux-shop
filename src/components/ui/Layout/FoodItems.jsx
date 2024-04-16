import React, { useState } from 'react'
import styles from './Layout.module.scss'
import { Heart, ShoppingBasket } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../features/cart/cartSlice'
// import CartBtn from '../../cart/CartBtn'

const FoodItems = ({ price, image, title, id }) => {
	const dispatch = useDispatch()

	const onClickAdd = () => {
		const item = {
			id,
			title,
			price,
			image
		}
		dispatch(addToCart(item))
		console.log(item)
	}

	return (
		<article className={styles.food_item}>
			<img className={styles.img} src={image} alt='food' />
			<h2>{title}</h2>
			<span className={styles.price}>RUB {price}</span>
			<div className={styles.actions}>
				{/* <CartBtn /> */}
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
