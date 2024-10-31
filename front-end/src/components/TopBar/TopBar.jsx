import styles from './TopBar.module.css'

export function TopBar({ children }) {
	return <header className={styles.topBar}>{children}</header>
}
