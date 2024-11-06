import { FullWidthBtn } from '../FullWidthBtn/FullWidthBtn'
import styles from './Details.module.css'

export function Details({ product }) {
	return (
		<div className={styles.details}>
			<div className={styles.info}>
				<h2>{product.productName}</h2>
				<p className={styles.brand}>{product.brand}</p>
				<p className={styles.price}>{product.pricePLN} zł</p>
			</div>
			<FullWidthBtn bgc='var(--color-text-default)'>Dodaj do koszyka</FullWidthBtn>
			<div>
				<div>
					<img src='' alt='' />
					Dostawa do 24h
				</div>
				<div>
					<img src='' alt='' />
					Zwrot do 100 dni!
				</div>
			</div>
		</div>
	)
}
