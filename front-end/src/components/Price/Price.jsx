import { useContext } from 'react'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { CURRENCIES, CURRENCIES_SIGN } from '../../constants/currencies'

export function Price({ product }) {
	const [currency] = useContext(CurrencyContext)

	return (
		<>
			{currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD}
			{currency === CURRENCIES.PLN ? CURRENCIES_SIGN.PLN : CURRENCIES_SIGN.USD}
		</>
	)
}
