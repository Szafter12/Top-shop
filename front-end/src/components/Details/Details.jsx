import { FullWidthBtn } from '../FullWidthBtn/FullWidthBtn'
import styles from './Details.module.css'
import CAR from '../../assets/car.svg'
import RETURN from '../../assets/return.svg'
import { Acordion } from '../Acordion/Acordion'

export function Details({ product }) {
	const acordionInfo = [
		{
			title: 'Opis produktu',
			text: product.description,
		},
		{
			title: 'Wskazówki pielęgnacyjne',
			text: product.maintenanceInfo,
		},
	]

	return (
		<div className={styles.details}>
			<div className={styles.info}>
				<h2>{product.productName}</h2>
				<p className={styles.brand}>{product.brand}</p>
				<p className={styles.price}>{product.pricePLN} zł</p>
			</div>
			<FullWidthBtn bgc='var(--color-text-default)'>Dodaj do koszyka</FullWidthBtn>
			<ul>
				<li>
					<img src={CAR} alt='' />
					<p>Dostawa do 24h!</p>
				</li>
				<li>
					<img src={RETURN} alt='' />
					<p>Zwrot do 100 dni!</p>
				</li>
			</ul>
			<Acordion items={acordionInfo} />
		</div>
	)
}
