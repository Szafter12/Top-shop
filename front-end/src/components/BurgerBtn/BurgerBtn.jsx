import styles from './BurgerBtn.module.css'
import BURGER from '../../assets/menu.svg'

export function BurgerBtn({ click }) {
	return (
		<button
			className={styles.burgerBtn}
			onClick={() => {
				click(prev => !prev)
			}}>
			<img width='25' height='25' src={BURGER} alt='mobile menu button' />
		</button>
	)
}
