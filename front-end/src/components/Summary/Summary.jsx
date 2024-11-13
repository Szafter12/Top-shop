import { FullWidthBtn } from '../FullWidthBtn/FullWidthBtn'
import styles from './Summary.module.css'
import CAR from '../../assets/car.svg'
import { CURRENCIES, CURRENCIES_SIGN } from '../../constants/currencies'
import { useContext } from 'react'
import { CurrencyContext } from '../../contexts/CurrencyContext'

export function Summary({ products }) {
	const [currency] = useContext(CurrencyContext)

	const deliveryCosts = {
		[CURRENCIES.USD]: 10,
		[CURRENCIES.PLN]: 49,
	}
	const freeDeliveryFroms = {
		[CURRENCIES.USD]: 100,
		[CURRENCIES.PLN]: 500,
	}

	const deliveryCost = deliveryCosts[currency]
	const freeDeliveryFrom = freeDeliveryFroms[currency]

	const itemSumPrice = products.reduce(
		(acc, current) => (currency === CURRENCIES.PLN ? acc + current.pricePLN : acc + current.priceUSD),
		0
	)
	const finalPrice = itemSumPrice < freeDeliveryFrom ? itemSumPrice + deliveryCost : itemSumPrice

	return (
		<div className={styles.summary}>
			<h3>Podsumowanie</h3>
			<div className={styles.productInfo}>
				<p>Wartość produktów:</p>
				<p>
					{itemSumPrice}
					{CURRENCIES_SIGN[currency]}
				</p>
			</div>
			<div className={styles.productInfo}>
				<p>Koszt dostawy:</p>
				<p>
					{itemSumPrice < freeDeliveryFrom ? deliveryCost : 0}
					{CURRENCIES_SIGN[currency]}
				</p>
			</div>
			<div className={`${styles.productInfo} ${styles.finalPrice}`}>
				<p>Do zapłaty:</p>
				<p>
					{finalPrice}
					{CURRENCIES_SIGN[currency]}
				</p>
			</div>
			<FullWidthBtn bgc={'var(--color-text-default )'}>Do kasy</FullWidthBtn>
			<div className={styles.delivery}>
				<img src={CAR} alt='' />
				<p>
					Darmowa dostawa od {freeDeliveryFrom}
					{CURRENCIES_SIGN[currency]}
				</p>
			</div>
		</div>
	)
}
