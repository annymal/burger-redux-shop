import { useSelector } from 'react-redux'

import FoodItems from '../../food/FoodItems'
import styles from './Layout.module.scss'

const Layout = () => {
	const { foodItems } = useSelector(store => store.food)

	return (
		<section className={styles.layout}>
			<h2>Menu</h2>
			<div className={styles.food_container}>
				{foodItems.map((item, index) => (
					<FoodItems key={index} {...item} />
				))}
			</div>
		</section>
	)
}

export default Layout
