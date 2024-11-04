import { CATEGORIES } from '../../constants/category'
import { NavLink } from 'react-router-dom'
import ARROW_ICON from '../../assets/arrow.svg'
import styles from './ExpandableMenu.module.css'
export function ExpandableMenu() {
	const activePath = 'odziez'

	return (
		<div className={styles.expandableMenu}>
			<p>Kobieta</p>
			<ul>
				{CATEGORIES.map(category => {
					return (
						<li key={category.path}>
							<NavLink to={category.path}>
								{category.categoryName}
								<img src={ARROW_ICON} alt='' className={category.path === activePath ? styles.expanded : ''} />
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
		</div>
	)
}
