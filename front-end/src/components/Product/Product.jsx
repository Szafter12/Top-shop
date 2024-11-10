import styles from './Product.module.css'
import { Link, Form } from 'react-router-dom'

const MAP_GENDERS = {
	men: 'mezczyzna',
	women: 'kobieta',
	children: 'dziecko',
}

export function Product({ product }) {
	return (
		<Link to={`/${MAP_GENDERS[product.gender]}/${product.category}/${product.subcategory}/${product.id}`}>
			<div className={styles.product}>
				<img src={product.photos[0]} />
				<p className={styles.productName}>{product.productName}</p>
				<p className={styles.price}>{product.pricePLN} zł</p>
				<Form onClick={(e) => {
					e.stopPropagation()
				}}
					method='POST'
					action={`/add-to-favourities/${product.id}`}
				>
					<button className={styles.heart}></button>
				</Form>
			</div>
		</Link>
	)
}
