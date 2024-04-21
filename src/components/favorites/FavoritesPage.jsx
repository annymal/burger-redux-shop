import React from 'react'
import { useSelector } from 'react-redux'

import { Heart } from 'lucide-react'

import FavoriteItems from './FavoriteItems'
import styles from './FavoritesPage.module.scss'

const FavoritesPage = () => {
	const { favoriteItems } = useSelector(store => store.favorite)

	if (favoriteItems.length < 1) {
		return (
			<section>
				<header>
					<h2>В избранном пусто</h2>
					<h4>
						Добавляйте товары с помощью <Heart />
					</h4>
				</header>
			</section>
		)
	}

	return (
		<section className={styles.basket_container}>
			<header>
				<h2>Избранное</h2>
			</header>
			<div className={styles.favorites_container}>
				{favoriteItems.map((item, index) => (
					<FavoriteItems key={index} {...item} />
				))}
			</div>
		</section>
	)
}

export default FavoritesPage
