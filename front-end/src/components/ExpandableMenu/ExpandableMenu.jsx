import ARROW_WHITE_ICON from '../../assets/arrow-white.svg'
import styles from './ExpandableMenu.module.css'
import { ProductListMenu } from '../ProductListMenu/ProductListMenu'
import { useDisableScroll } from '../../hooks/useDisableScroll'
import { useState } from 'react'
import { useResize } from '../../hooks/useResize'

export function ExpandableMenu() {
	const mobileWidth = 500
	const [isMobile, setIsMobile] = useState(window.innerWidth < mobileWidth)

	const [isMobileShown, setIsMobileShown] = useState(false)

	useResize(setIsMobile, mobileWidth)

	useDisableScroll(isMobileShown, isMobile, setIsMobileShown)

	return (
		<>
			<ProductListMenu isMobile={isMobile} isMobileShown={isMobileShown} setIsMobileShown={setIsMobileShown} />
			{isMobile && (
				<button className={styles.arrowMenu} onClick={() => setIsMobileShown(true)}>
					<img src={ARROW_WHITE_ICON} alt='' />
				</button>
			)}
		</>
	)
}
