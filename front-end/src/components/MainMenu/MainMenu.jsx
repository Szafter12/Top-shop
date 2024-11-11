import { NavLink } from 'react-router-dom'
import { GENDERS } from '../../constants/category'
import styles from './MainMenu.module.css'

export function MainMenu({ handleMobile }) {
	return (
		<nav>
			<ul className={styles.mainMenu}>
				{GENDERS.map((gender, index) => {
					return (
						<li key={index}>
							<NavLink onClick={handleMobile} to={gender.path}>
								{gender.categoryName}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
