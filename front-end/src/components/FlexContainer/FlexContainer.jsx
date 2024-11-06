import { useEffect, useState } from 'react'
import styles from './FlexContainer.module.css'

export function FlexContainer({ children, column }) {
	const [isMobile, setIsMobile] = useState(window.innerWidth < column)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < column)
		}
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [column])

	return <div className={`${styles.flexContainer} ${isMobile ? styles.column : ''}`}>{children}</div>
}
