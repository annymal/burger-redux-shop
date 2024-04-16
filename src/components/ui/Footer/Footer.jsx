import { Link } from 'react-router-dom'

import { Facebook, Instagram, Twitter } from 'lucide-react'

import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer>
			<p>Связаться с нами</p>
			<ul className={styles.socials}>
				<li>
					<Instagram />
				</li>
				<li>
					<Facebook />
				</li>
				<li>
					<Twitter />
				</li>
			</ul>
		</footer>
	)
}

export default Footer
