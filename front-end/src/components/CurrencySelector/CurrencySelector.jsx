import styles from './CurrencySelector.module.css'
import { CURRENCIES } from '../../constants/currencies'
import { useContext } from 'react'
import { CurrencyContext } from '../../contexts/CurrencyContext'

export function CurrencySelector() {
	const [currency, setCurrency] = useContext(CurrencyContext)

	return (
		<select
			value={currency}
			onChange={e => {
				const currentCurrency = e.currentTarget.value
				setCurrency(currentCurrency)
				localStorage['selected_currency'] = currentCurrency
			}}
			name='currency'
			className={styles.currencySelector}>
			<option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
			<option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
		</select>
	)
}
