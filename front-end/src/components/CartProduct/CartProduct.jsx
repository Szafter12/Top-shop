import styles from './CartProduct.module.css'
import removeBtn from '../../assets/remove.svg'
import { Price } from '../Price/Price'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function CartProduct({ product }) {
	const [, , removeFromCart] = useContext(CartContext)

	return (
		<div className={styles.cartProduct}>
			<img className={styles.productPhoto} src={product.photos[0]} />
			<div className={styles.productBody}>
				<div className={styles.top}>
					<p className={styles.productName}>{product.productName}</p>
					<p className={styles.priceContent}>
						Cena:{' '}
						<span className={styles.price}>
							<Price product={product} />
						</span>
					</p>
				</div>
				<button onClick={() => removeFromCart(product)}>
					<img src={removeBtn} alt='' />
					Usuń
				</button>
			</div>
		</div>
	)
}
