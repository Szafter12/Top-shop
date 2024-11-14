import styles from './CartProduct.module.css'
import removeBtn from '../../assets/remove.svg'
import { Price } from '../Price/Price'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function CartProduct({ product }) {
	const [, , removeFromCart, updateQuantity] = useContext(CartContext)

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
					<div className={styles.quantity}>
						<label htmlFor='quantity'>Ilość:</label>
						<input
							type='number'
							id='quantity'
							min={1}
							max={99}
							defaultValue={product.quantity}
							onChange={e => updateQuantity(product, e.target.value)}
						/>
					</div>
				</div>
				<button onClick={() => removeFromCart(product)}>
					<img src={removeBtn} alt='' />
					Usuń
				</button>
			</div>
		</div>
	)
}
