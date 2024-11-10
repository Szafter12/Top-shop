import { Product } from '../Product/Product'
import styles from './Products.module.css'

export function Products({ heading, products }) {
	return (
		<div className={styles.products}>
			<h2>{heading}</h2>
			<div className={styles.product}>
				{products.map(product => {
					return <Product key={product.id} product={product} />
				})}
			</div>
		</div>
	)
}
