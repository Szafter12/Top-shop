import { CURRENCIES } from "../../constants/currencies";

export function CurrencySelector() {
    return <select name="" id="">
        <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
        <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
}