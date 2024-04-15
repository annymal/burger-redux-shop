import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'

const Footer = () => {
	return (
		<footer>
			<p>Связаться с нами</p>
			<ul className={styles.socials}>
				<li>
					<Instagram />
				</li>
			</ul>
		</footer>
	)
}

export default Footer
