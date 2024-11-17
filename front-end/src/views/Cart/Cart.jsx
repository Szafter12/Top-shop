import { useContext } from 'react'
import { CartList } from '../../components/CartList/CartList'
import { CartContext } from '../../contexts/CartContext'
import { HeadContent } from '../../components/HeadContent/HeadContent'

export function Cart() {
	const [cartItems] = useContext(CartContext)

	return (
		<>
			<HeadContent description='Zobacz produkty w koszyku'>Koszyk</HeadContent>
			<CartList cartProducts={cartItems} />
		</>
	)
}
