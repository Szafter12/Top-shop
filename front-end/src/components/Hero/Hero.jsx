import { HeroContent } from '../HeroContent/HeroContent'
import styles from './Hero.module.css'

export function Hero() {
    return <div className={styles.hero}>
        <HeroContent />
    </div>
}