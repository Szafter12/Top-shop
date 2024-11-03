import { CenterContent } from '../CenterContent/CenterContent'
import { FavProduct } from '../FavProduct/FavProduct'
import styles from './FavProducts.module.css'
export function FavProducts({ favourites }) {
	return (
		<CenterContent>
			<div className={styles.favProducts}>
				<h2>Ulubione</h2>
				{favourites.map(product => {
					return <FavProduct key={product.id} product={product} />
				})}
			</div>
		</CenterContent>
	)
}
