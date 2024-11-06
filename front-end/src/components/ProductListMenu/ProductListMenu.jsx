import { CATEGORIES } from '../../constants/category'
import ARROW_ICON from '../../assets/arrow.svg'
import ARROW_WHITE_ICON from '../../assets/arrow-white.svg'
import { NavLink, useParams } from 'react-router-dom'
import styles from './ProductListMenu.module.css'

export function ProductListMenu({ isMobile, isMobileShown, setIsMobileShown }) {
	const params = useParams()
	const activePath = params.category

	const MAPPING_GENDER = {
		kobieta: 'Kobieta',
		mezczyzna: 'Mężczyzna',
		dziecko: 'Dziecko',
	}

	return (
		<div
			className={`${isMobile ? styles.expandableMenuMobile : styles.expandableMenu} ${
				isMobileShown ? styles.active : ''
			}`}>
			<div className={styles.content}>
				<p>{MAPPING_GENDER[params.gender]}</p>
				<ul>
					{CATEGORIES.map(category => {
						return (
							<li key={`${category.path}-${category.categoryName}`}>
								<NavLink to={`/${params.gender}/${category.path}`}>
									{category.categoryName}
									<img
										src={isMobile ? ARROW_WHITE_ICON : ARROW_ICON}
										alt=''
										className={category.path === activePath ? styles.expanded : ''}
									/>
								</NavLink>
								{activePath === category.path && (
									<ul>
										{category.subcategories.map(subcategory => (
											<li key={`${category.path}-${subcategory.path}`}>
												<NavLink to={`/${params.gender}/${params.category}/${subcategory.path}`}>
													{subcategory.categoryName}
												</NavLink>
											</li>
										))}
									</ul>
								)}
							</li>
						)
					})}
				</ul>
				{isMobile && (
					<button className={styles.closeBtn} onClick={() => setIsMobileShown(false)}>
						<img src={ARROW_ICON} alt='' />
					</button>
				)}
			</div>
		</div>
	)
}
