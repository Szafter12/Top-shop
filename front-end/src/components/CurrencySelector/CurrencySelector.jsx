import { CURRENCIES } from "../../constants/currencies";
import styles from './CurrencySelector.module.css'
export function CurrencySelector() {
    return <select name="currency" className={styles.currencySelector}>
        <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
        <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
}