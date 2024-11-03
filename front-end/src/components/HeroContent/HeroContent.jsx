import { FullWidthBtn } from '../FullWidthBtn/FullWidthBtn'
import styles from './HeroContent.module.css'

export function HeroContent() {
	return <div className={styles.heroContent}>
        <h2>Letnie promocje do -70%</h2>
        <p>Tylko najlepsze okazje</p>
        <FullWidthBtn>Sprawdź produkty</FullWidthBtn>
    </div>
}
