import { useEffect } from 'react'

export const useResize = (setIsMobile, mobileSize) => {
	useEffect(() => {
		let timeoutId = null

		const handleResize = () => {
			clearTimeout(timeoutId)
			timeoutId = setTimeout(() => {
				setIsMobile(window.innerWidth < mobileSize)
			}, 150) // Opóźnienie 150ms
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			clearTimeout(timeoutId)
			window.removeEventListener('resize', handleResize)
		}
	}, [setIsMobile, mobileSize])
}
