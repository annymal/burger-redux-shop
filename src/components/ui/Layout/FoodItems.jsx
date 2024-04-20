import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Heart, ShoppingBasket } from 'lucide-react'

import { addToCart, increaseItem } from '../../../features/cart/cartSlice'
import { addToFavorites } from '../../../features/favorite/favoriteSlice'
import styles from './FoodItems.module.scss'

const FoodItems = ({ price, image, title, id, amount, isChecked }) => {
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
				amount: 1,
				isChecked: false
			}
			dispatch(addToCart(newItem))
		}
	}

	const newFavoriteItem = {
		id,
		title,
		price,
		image
	}

	return (
		<article className={styles.food_item}>
			<img src={image} alt='food' />
			<h2>{title}</h2>
			<span className={styles.price}>RUB {price}</span>
			<div className={styles.actions}>
				<button className={styles.btnBuy} onClick={onClickAdd}>
					<ShoppingBasket />
					<p>Купить</p>
				</button>
				<button
					className={styles.btnFavorite}
					onClick={() => dispatch(addToFavorites(newFavoriteItem))}
				>
					<Heart />
				</button>
			</div>
		</article>
	)
}

export default FoodItems
