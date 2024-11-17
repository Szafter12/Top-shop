import { FullWidthBtn } from '../FullWidthBtn/FullWidthBtn'
import { Link, useParams } from 'react-router-dom'
import styles from './HeroContent.module.css'

export function HeroContent() {
	const params = useParams()

	return (
		<div className={styles.heroContent}>
			<h2>Letnie promocje do -70%</h2>
			<p>Tylko najlepsze okazje</p>
			<Link to={`/${params.gender}/odziez`}>
				<FullWidthBtn>Sprawdź produkty</FullWidthBtn>
			</Link>
		</div>
	)
}
