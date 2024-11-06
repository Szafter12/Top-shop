import { MainMenu } from '../MainMenu/MainMenu'
import { CurrencySelector } from '../CurrencySelector/CurrencySelector'
import styles from './MobileMenu.module.css'
import { IconMenu } from '../IconMenu/IconMenu'

export function MobileMenu({isMobileShown, setIsMobileShown}) {
	return <nav className={`${styles.mobileMenu} ${isMobileShown ? styles.active : ''}`}>
        <MainMenu setIsMobileShown={setIsMobileShown} />
        <IconMenu  />
        <CurrencySelector />
    </nav>
}
