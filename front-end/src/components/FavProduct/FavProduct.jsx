import styles from './FavProduct.module.css'
import removeBtn from '../../assets/remove.svg'
import cartBtn from '../../assets/favCart.svg'
import { Price } from '../Price/Price'
import { useFetcher } from 'react-router-dom'

export function FavProduct({ favourite }) {
	const product = favourite.product
	const { Form } = useFetcher()

	return (
		<div className={styles.favProduct}>
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
				<div className={styles.buttons}>
					<Form method='DELETE' action={`/delete-from-fav/${favourite.id}`}>
						<button>
							<img src={removeBtn} alt='' />
							Usuń
						</button>
					</Form>
					<button>
						<img src={cartBtn} alt='' />
						Dodaj do koszyka
					</button>
				</div>
			</div>
		</div>
	)
}
