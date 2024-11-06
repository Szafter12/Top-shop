import styles from './Product.module.css'

export function Product({ product }) {
	return (
		<div className={styles.product}>
			<img src={product.photos[0]} />
			<p className={styles.productName}>{product.productName}</p>
			<p className={styles.price}>{product.pricePLN} zł</p>
			<button className={styles.heart}></button>
		</div>
	)
}
