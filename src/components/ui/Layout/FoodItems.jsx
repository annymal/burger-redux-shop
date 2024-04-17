import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Heart, ShoppingBasket } from 'lucide-react'

import { addToCart, increaseItem } from '../../../features/cart/cartSlice'
import styles from './Layout.module.scss'

const FoodItems = ({ price, image, title, id, amount }) => {
	const { cartItems } = useSelector(store => store.cart)
	const dispatch = useDispatch()

	const onClickAdd = () => {
		const existingItem = cartItems.find(item => item.id === id)
		if (existingItem) {
			// Товар уже есть в корзине, увеличим его количество на 1
			dispatch(increaseItem({ id }))
		} else {
			// Товара нет в корзине, добавим его
			const newItem = {
				id,
				title,
				price,
				image,
				amount: 1
			}
			dispatch(addToCart(newItem))
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
