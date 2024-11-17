import { Link, useParams } from 'react-router-dom'
import styles from './Logo.module.css'

export function Logo() {
	const params = useParams()

	return (
		<h1 className={styles.logo}>
			<Link to={`/${params.gender}`}> TopSklep® </Link>
		</h1>
	)
}
