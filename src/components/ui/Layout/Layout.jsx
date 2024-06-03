import { useSelector } from 'react-redux'

import FoodItems from '../../food/FoodItems'
import styles from './Layout.module.scss'

const Layout = () => {
	const { foodItems } = useSelector(store => store.food)

	return (
		<section className={styles.layout}>
			<div className={styles.aboutBlock}>
				<div className={styles.aboutBlockImg}></div>
				<div className={styles.aboutLogo}>
					<div><h2>The ultimate</h2></div>
					<div className={styles.logoName}><h1>Burger Club</h1></div>
					<p>Savor the Flavor, Join the Club!</p>
					<div className={styles.demonstration}>
						<img className={styles.foodPhoto} src="/img/beefburg.jpg" alt="beefburg" />
						<img className={styles.foodPhoto} src="/img/bigmac.jpg" alt="bigmac" />
						<img className={styles.foodPhoto} src="/img/cheeseburg.jpg" alt="cheeseburg" />
					</div>
				</div>
			</div>
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
