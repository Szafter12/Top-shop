import { getYear } from '../../utils/getYear'
import styles from './Footer.module.css'
export function Footer() {
	return (
		<div className={styles.footer}>
			<p>Copyright {getYear()}</p>
			<p>
				Icons by{' '}
				<a href='https://icons8.com/' target='_blank'>
					Icons8
				</a>
			</p>
		</div>
	)
}
