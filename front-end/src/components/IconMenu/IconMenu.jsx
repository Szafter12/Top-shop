import BAG_ICON from '../../assets/bag.svg'
import HEART from '../../assets/heart.svg'
import styles from './IconMenu.module.css'
import { Link } from 'react-router-dom'

export function IconMenu() {
	return (
		<ul className={styles.iconMenu}>
			<li>
				<Link>
					<img src={HEART} alt='' />
				</Link>
			</li>
			<li>
				<Link>
					<img src={BAG_ICON} alt='' />
                    <div className={styles.numbersOfItems}>2</div>
				</Link>
			</li>
		</ul>
	)
}
