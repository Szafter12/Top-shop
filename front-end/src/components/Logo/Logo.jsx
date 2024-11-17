import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

export function Logo() {
	return (
		<h1 className={styles.logo}>
			<Link to={'/'}> TopSklep® </Link>
		</h1>
	)
}
