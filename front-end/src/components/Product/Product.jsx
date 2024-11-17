import { Link, useFetcher } from 'react-router-dom'
import { Price } from '../Price/Price'
import styles from './Product.module.css'

const MAP_GENDERS = {
	men: 'mezczyzna',
	women: 'kobieta',
	children: 'dziecko',
}

export function Product({ product, setIsModalActive }) {
	const { Form } = useFetcher()

	const handleModalActive = () => {
		setIsModalActive(true)
		setTimeout(() => {
			setIsModalActive(false)
		}, 2000)
	}

	return (
		<Link to={`/${MAP_GENDERS[product.gender]}/${product.category}/${product.subcategory}/${product.id}`}>
			<div className={styles.product}>
				<img src={product.photos[0]} />
				<p className={styles.productName}>{product.productName}</p>
				<p className={styles.price}>
					<Price product={product} />
				</p>
				<Form
					onClick={e => {
						e.stopPropagation()
						handleModalActive()
					}}
					method='POST'
					action={`/add-to-favourities/${product.id}`}>
					<button className={styles.heart}></button>
				</Form>
			</div>
		</Link>
	)
}
