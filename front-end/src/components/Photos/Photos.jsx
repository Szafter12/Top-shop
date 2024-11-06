import { useState } from 'react'
import styles from './Photos.module.css'

export function Photos({ photos }) {
	const [mainPhoto, setMainPhoto] = useState(photos[0])

	return (
		<div className={styles.photos}>
			<div className={styles.photosMin}>
				{photos.map((photo, index) => {
					return (
						<button key={index} onClick={() => setMainPhoto(photo)}>
							<img src={photo} />
						</button>
					)
				})}
			</div>
			<img className={styles.mainPhoto} src={mainPhoto} alt='' />
		</div>
	)
}
