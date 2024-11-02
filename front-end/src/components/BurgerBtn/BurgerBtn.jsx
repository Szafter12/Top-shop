import styles from './BurgerBtn.module.css'

export function BurgerBtn({ click }) {
	return (
		<button
			className={styles.burgerBtn}
			onClick={() => {
				click(prev => !prev)
			}}>
			<img width='50' height='50' src='https://img.icons8.com/ios/50/xbox-menu.png' alt='mobile menu button' />
		</button>
	)
}
