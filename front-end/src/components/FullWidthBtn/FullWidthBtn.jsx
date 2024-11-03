import styles from './FullWidthBtn.module.css'

export function FullWidthBtn({children, bgc}) {
    return <button className={styles.fullWidthBtn} style={{backgroundColor: bgc}}>{children}</button>
}