import { FullWidthBtn } from '../FullWidthBtn/FullWidthBtn'
import styles from './Summary.module.css'
import CAR from '../../assets/car.svg'

export function Summary({ products }) {
	const deliveryCost = 49
	const freeDeliveryFrom = 500
	const itemSumPrice = products.reduce((acc, current) => acc + current.pricePLN, 0)
	const finalPrice = itemSumPrice < freeDeliveryFrom ? itemSumPrice + deliveryCost : itemSumPrice

	return (
		<div className={styles.summary}>
			<h3>Podsumowanie</h3>
			<div className={styles.productInfo}>
				<p>Wartość produktów:</p>
				<p>{itemSumPrice}zł</p>
			</div>
			<div className={styles.productInfo}>
				<p>Koszt dostawy:</p>
				<p>{itemSumPrice < freeDeliveryFrom ? deliveryCost : 0}zł</p>
			</div>
			<div className={`${styles.productInfo} ${styles.finalPrice}`}>
				<p>Do zapłaty:</p>
				<p>{finalPrice}zł</p>
			</div>
			<FullWidthBtn bgc={'var(--color-text-default )'}>Do kasy</FullWidthBtn>
			<div className={styles.delivery}>
				<img src={CAR} alt='' />
				<p>Darmowa dostawa od 500zł</p>
			</div>
		</div>
	)
}
