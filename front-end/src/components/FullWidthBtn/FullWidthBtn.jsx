import styles from './FullWidthBtn.module.css'

export function FullWidthBtn({ children, bgc, onClick }) {
	return (
		<button onClick={onClick} className={styles.fullWidthBtn} style={{ backgroundColor: bgc }}>
			{children}
		</button>
	)
}
