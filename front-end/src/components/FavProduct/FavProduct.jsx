import styles from './FavProduct.module.css'
import removeBtn from '../../assets/remove.svg'
import cartBtn from '../../assets/favCart.svg'

export function FavProduct({ product }) {
	return (
		<div className={styles.favProduct}>
			<img className={styles.productPhoto} src={product.photos[0]} />
			<div className={styles.productBody}>
				<div className={styles.top}>
					<p className={styles.productName}>{product.productName}</p>
					<p className={styles.priceContent}>
						Cena: <span className={styles.price}>{product.pricePLN}zł</span>
					</p>
				</div>
				<div className={styles.buttons}>
					<button>
						<img src={removeBtn} alt='' />
						Usuń
					</button>
					<button>
						<img src={cartBtn} alt='' />
						Dodaj do koszyka
					</button>
				</div>
			</div>
		</div>
	)
}
