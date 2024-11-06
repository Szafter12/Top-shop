import ARROW_WHITE_ICON from '../../assets/arrow-white.svg'
import styles from './ExpandableMenu.module.css'
import { ProductListMenu } from '../ProductListMenu/ProductListMenu'
import { useEffect, useState } from 'react'

export function ExpandableMenu() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 500)
	const [isMobileShown, setIsMobileShown] = useState(false)

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 500)

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		isMobileShown && isMobile ? (document.body.style.overflowY = 'hidden') : (document.body.style.overflowY = 'auto')
		if (!isMobile) {
			setIsMobileShown(false)
		}

		return () => (document.body.style.overflowY = 'auto')
	}, [isMobileShown, isMobile])

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
