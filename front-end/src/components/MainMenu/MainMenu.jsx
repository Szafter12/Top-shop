import { NavLink } from 'react-router-dom'
import { GENDERS } from '../../constants/category'
import styles from './MainMenu.module.css'

export function MainMenu() {
	return (
		<nav>
			<ul className={styles.mainMenu}>
				{GENDERS.map((gender, id) => {
					return (
						<li key={id}>
							<NavLink to={gender.path}>{gender.categoryName}</NavLink>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
