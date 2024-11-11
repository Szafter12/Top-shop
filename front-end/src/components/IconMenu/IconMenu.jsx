import BAG_ICON from '../../assets/cart.png'
import HEART from '../../assets/heart.png'
import HEART_WHITE from '../../assets/white-heart.png'
import BAG_ICON_WHITE from '../../assets/white-cart.png'
import styles from './IconMenu.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function IconMenu({ isMobileShown, handleMobile }) {
	const [cartItems] = useContext(CartContext)

	return (
		<ul className={styles.iconMenu}>
			<li>
				<Link to={'/ulubione'} onClick={handleMobile}>
					<img className={styles.heart} src={isMobileShown ? HEART_WHITE : HEART} alt='' />
				</Link>
			</li>
			<li>
				<Link to={'/koszyk'} onClick={handleMobile}>
					<img src={isMobileShown ? BAG_ICON_WHITE : BAG_ICON} alt='' />
					<div className={styles.numbersOfItems}>{cartItems.length}</div>
				</Link>
			</li>
		</ul>
	)
}
