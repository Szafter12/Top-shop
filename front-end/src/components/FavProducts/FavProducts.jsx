import { CenterContent } from '../CenterContent/CenterContent'
import { FavProduct } from '../FavProduct/FavProduct'
import styles from './FavProducts.module.css'
export function FavProducts({ favourites }) {
	return (
		<CenterContent>
			<div className={styles.favProducts}>
				<h2>Ulubione</h2>
				{favourites.length > 0 ? (
					favourites.map(favourite => {
						return <FavProduct key={favourite.id} favourite={favourite} />
					})
				) : (
					<p className={styles.empty}>Brak produktów w ulubionych</p>
				)}
			</div>
		</CenterContent>
	)
}
