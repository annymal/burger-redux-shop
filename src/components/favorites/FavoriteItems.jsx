import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

import { Heart, ShoppingBasket, Trash2 } from 'lucide-react'

import { removeFavoriteItem } from '../../features/favorite/favoriteSlice'
import styles from './FavoriteItems.module.scss'

const FavoriteItems = ({ image, title, price, id }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	return (
		<article className={styles.favorite_item}>
			<img src={image} alt='food' />
			<span>
				<Heart />
			</span>
			<h3>{title}</h3>
			<h3>RUB {price}</h3>
			<div className={styles.actions}>
				<button
					onClick={() => navigate('/cart')}
					className={styles.btnBuy}
				>
					<ShoppingBasket />
					Купить
				</button>
				<button onClick={() => dispatch(removeFavoriteItem({ id }))}>
					<Trash2 />
					Удалить
				</button>
			</div>
		</article>
	)
}

export default FavoriteItems
