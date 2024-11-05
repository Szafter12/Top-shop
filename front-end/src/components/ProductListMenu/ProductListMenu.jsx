import { CATEGORIES } from '../../constants/category'
import ARROW_ICON from '../../assets/arrow.svg'
import ARROW_WHITE_ICON from '../../assets/arrow-white.svg'
import { NavLink } from 'react-router-dom'
import styles from './ProductListMenu.module.css'

export function ProductListMenu({ isMobile, isMobileShown, setIsMobileShown }) {
	const activePath = 'obuwie'
	return (
		<div
			className={`${isMobile ? styles.expandableMenuMobile : styles.expandableMenu} ${
				isMobileShown ? styles.active : ''
			}`}>
			<div className={styles.content}>
				<p>Kobieta</p>
				<ul>
					{CATEGORIES.map(category => {
						return (
							<li key={category.path}>
								<NavLink to={category.path}>
									{category.categoryName}
									<img src={isMobile ? ARROW_WHITE_ICON : ARROW_ICON} alt='' className={category.path === activePath ? styles.expanded : ''} />
								</NavLink>
								{category.path === activePath && (
									<ul>
										{category.subcategories.map(subcategory => {
											return (
												<li key={subcategory.path}>
													<NavLink to={subcategory.path}>{subcategory.categoryName}</NavLink>
												</li>
											)
										})}
									</ul>
								)}
							</li>
						)
					})}
				</ul>
				<button className={styles.closeBtn} onClick={() => setIsMobileShown(false)}>
					<img src={ARROW_ICON} alt='' />
				</button>
			</div>
		</div>
	)
}
