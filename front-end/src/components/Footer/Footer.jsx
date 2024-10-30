import { getYear } from '../../utils/getYear'
import styles from './Footer.module.css'
export function Footer() {
	return (
		<div className={styles.footer}>
			<p>Copyright {getYear()}</p>
		</div>
	)
}
