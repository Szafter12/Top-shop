import styles from './AddModal.module.css'

export default function AddModal({ isModalActive, children }) {
	const modalActive = isModalActive ? styles.active : ''

	return (
		<div className={styles.modalBox}>
			<div className={`${styles.modal} ${modalActive}`}>
				<p>Pomyślnie dodano produkt do {children}</p>
			</div>
		</div>
	)
}
