import { MainMenu } from '../MainMenu/MainMenu'
import { CurrencySelector } from '../CurrencySelector/CurrencySelector'
import styles from './MobileMenu.module.css'
import { IconMenu } from '../IconMenu/IconMenu'

export function MobileMenu({ isMobileShown, setIsMobileShown }) {
	const handleMobile = () => {
		if (setIsMobileShown) {
			setIsMobileShown(false)
		} else {
			return
		}
	}

	return (
		<nav className={`${styles.mobileMenu} ${isMobileShown ? styles.active : ''}`}>
			<MainMenu handleMobile={handleMobile} />
			<IconMenu handleMobile={handleMobile} isMobileShown={isMobileShown} />
			<CurrencySelector />
		</nav>
	)
}
