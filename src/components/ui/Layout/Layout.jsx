import { useSelector } from 'react-redux'
import styles from './Layout.module.scss'
import FoodItems from './FoodItems'

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
