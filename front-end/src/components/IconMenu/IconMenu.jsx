import BAG_ICON from '../../assets/bag.svg'
import HEART from '../../assets/heart.png'
import styles from './IconMenu.module.css'
import { Link } from 'react-router-dom'

export function IconMenu() {
	return (
		<ul className={styles.iconMenu}>
			<li>
				<Link to={'/ulubione'}>
					<img className={styles.heart} src={HEART} alt='' />
				</Link>
			</li>
			<li>
				<Link to={'/koszyk'}>
					<img src={BAG_ICON} alt='' />
					<div className={styles.numbersOfItems}>2</div>
				</Link>
			</li>
		</ul>
	)
}
