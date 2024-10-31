import styles from './HeroContent.module.css'

export function HeroContent() {
	return <div className={styles.heroContent}>
        <h2>Letnie promocje do -70%</h2>
        <p>Tylko najlepsze okazje</p>
        <button>Sprawdź produkty</button>
    </div>
}
