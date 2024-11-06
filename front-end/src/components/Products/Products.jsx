import { Link } from 'react-router-dom'
import { Product } from '../Product/Product'
import styles from './Products.module.css'

const MAP_GENDERS = {
	men: 'mezczyzna',
	women: 'kobieta',
	children: 'dziecko',
}

export function Products({ heading, products }) {
	return (
		<div className={styles.products}>
			<h2>{heading}</h2>
			<div className={styles.product}>
				{products.map(product => {
					return (
						<Link
							to={`/${MAP_GENDERS[product.gender]}/${product.category}/${product.subcategory}/${product.id}`}
							key={product.id}>
							<Product product={product} />
						</Link>
					)
				})}
			</div>
		</div>
	)
}
