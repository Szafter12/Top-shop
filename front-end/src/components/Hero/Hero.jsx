import { HeroContent } from '../HeroContent/HeroContent'
import styles from './Hero.module.css'

export function Hero({url}) {
    return <div className={styles.hero} style={{backgroundImage: `url(${url})`}}>
        <HeroContent />
    </div>
}