import { useState } from 'react'
import styles from './Photos.module.css'

export function Photos({ photos }) {
	const [mainPhoto, setMainPhoto] = useState(photos[0])
	const [position, setPosition] = useState({ x: 0, y: 0 })

	const handleMouseMove = e => {
		const { left, top, width, height } = e.target.getBoundingClientRect()
		const x = ((e.clientX - left) / width) * 100
		const y = ((e.clientY - top) / height) * 100

		setPosition({ x, y })
	}

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
			<div className={styles.imageContainer}>
				<img
					className={styles.mainPhoto}
					src={mainPhoto}
					onMouseMove={handleMouseMove}
					style={{ transformOrigin: `${position.x}% ${position.y}%` }}
					alt=''
				/>
			</div>
		</div>
	)
}
