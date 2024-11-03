import { CenterContent } from '../CenterContent/CenterContent'
import { CartProduct } from '../CartProduct/CartProduct'
import styles from './CartList.module.css'
import { Summary } from '../Summary/Summary'

export function CartList({ cartProducts }) {
	return (
		<CenterContent>
			<div className={styles.dFlex}>
				<div className={styles.cartList}>
					<h2>Koszyk</h2>
					{cartProducts.map(product => {
						return <CartProduct key={product.id} product={product} />
					})}
				</div>
                <Summary products={cartProducts} />
			</div>
		</CenterContent>
	)
}
