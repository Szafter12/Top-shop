import { CATEGORIES } from '../../constants/category'
import { NavLink } from 'react-router-dom'
import styles from './CategoryMenu.module.css'
export function CategoryMenu() {
	return (
		<div className={styles.categoryMenu}>
			<ul>
				{CATEGORIES.map((category,id) => {
					return <li key={id}>
                        <NavLink>{category.categoryName}</NavLink>
                    </li> 
				})}
			</ul>
		</div>
	)
}
