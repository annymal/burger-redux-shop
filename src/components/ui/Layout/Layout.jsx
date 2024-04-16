import { useSelector } from 'react-redux'

import FoodItems from './FoodItems'
import styles from './Layout.module.scss'

const Layout = () => {
	const { foodItems } = useSelector(store => store.food)

	return (
		<section className={styles.layout}>
			<div className={styles.food_container}>
				{foodItems.map((item, index) => (
					<FoodItems key={index} {...item} />
				))}
			</div>
		</section>
	)
}

export default Layout
