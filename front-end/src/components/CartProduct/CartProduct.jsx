import styles from './CartProduct.module.css'
import removeBtn from '../../assets/remove.svg'

export function CartProduct({ product }) {
	return (
		<div className={styles.cartProduct}>
			<img className={styles.productPhoto} src={product.photos[0]} />
			<div className={styles.productBody}>
				<div className={styles.top}>
					<p className={styles.productName}>{product.productName}</p>
					<p className={styles.priceContent}>
						Cena: <span className={styles.price}>{product.pricePLN}zł</span>
					</p>
				</div>
				<button>
					<img src={removeBtn} alt='' />
					Usuń
				</button>
			</div>
		</div>
	)
}
