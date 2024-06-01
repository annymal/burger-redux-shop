import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Heart, ShoppingBasket } from 'lucide-react'

import { addToCart, increaseItem } from '../../features/cart/cartSlice'
import { addToFavorites } from '../../features/favorite/favoriteSlice'
import styles from './FoodItems.module.scss'

const FoodItems = ({ price, image, title, id, amount, isChecked }) => {
	const { cartItems } = useSelector(store => store.cart)
	const { favoriteItems } = useSelector(store => store.favorite)
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
	const onClickFavorite = () => {
		const existingFavoriteItem = favoriteItems.find(item => item.id === id)
		if (!existingFavoriteItem) {
			const newFavoriteItem = {
				id,
				title,
				price,
				image
			}
			dispatch(addToFavorites(newFavoriteItem))
		}
	}

	return (
		<article className={styles.food_item}>
			<img className={styles.food_img} src={image} alt='food' />
			<h3>{title}</h3>
			<h3>RUB {price}</h3>
			<div className={styles.actions}>
				<button className={styles.btnBuy} onClick={onClickAdd}>
					<ShoppingBasket />
					Купить
				</button>
				<button
					className={styles.btnFavorite}
					onClick={onClickFavorite}
				>
					<Heart />
				</button>
			</div>
		</article>
	)
}

export default FoodItems
