import { useContext } from 'react'
import { CartList } from '../../components/CartList/CartList'
import { CartContext } from '../../contexts/CartContext'

export function Cart() {
	const [cartItems] = useContext(CartContext)

	return <CartList cartProducts={cartItems} />
}
