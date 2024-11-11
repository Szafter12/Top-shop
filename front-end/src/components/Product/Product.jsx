import { Link, useFetcher } from 'react-router-dom'
import { useContext } from 'react'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import styles from './Product.module.css'
import { CURRENCIES, CURRENCIES_SIGN } from '../../constants/currencies'

const MAP_GENDERS = {
	men: 'mezczyzna',
	women: 'kobieta',
	children: 'dziecko',
}

export function Product({ product }) {
	const { Form } = useFetcher()
	const [currency] = useContext(CurrencyContext)

	return (
		<Link to={`/${MAP_GENDERS[product.gender]}/${product.category}/${product.subcategory}/${product.id}`}>
			<div className={styles.product}>
				<img src={product.photos[0]} />
				<p className={styles.productName}>{product.productName}</p>
				<p className={styles.price}>
					{currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD}
					{currency === CURRENCIES.PLN ? CURRENCIES_SIGN.PLN : CURRENCIES_SIGN.USD}
				</p>
				<Form
					onClick={e => {
						e.stopPropagation()
					}}
					method='POST'
					action={`/add-to-favourities/${product.id}`}>
					<button className={styles.heart}></button>
				</Form>
			</div>
		</Link>
	)
}
