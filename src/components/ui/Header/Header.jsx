import styles from './Header.module.scss'
import { Heart, Home, Pizza, ShoppingBasket } from 'lucide-react'

const Header = () => {
	return (
		<header>
			<ul>
				<li className={styles.logo}>
					<Pizza />
				</li>
				<li>
					<a>
						<Home />
					</a>
					<a>
						<ShoppingBasket />
					</a>
					<a>
						<Heart />
					</a>
				</li>
			</ul>
		</header>
	)
}

export default Header
