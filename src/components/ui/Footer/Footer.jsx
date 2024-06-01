import { Link } from 'react-router-dom'

import { Facebook, Instagram, Twitter } from 'lucide-react'

import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footerBlock}>
			<p>Связаться с нами</p>
			<ul className={styles.socials}>
				<li>
					<Link to=''>
						<Instagram />
					</Link>
				</li>
				<li>
					<Link to=''>
						<Facebook />
					</Link>
				</li>
				<li>
					<Link to=''>
						<Twitter />
					</Link>
				</li>
			</ul>
		</footer>
	)
}

export default Footer
