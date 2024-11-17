import { useEffect } from 'react'

export const useDisableScroll = (isDisabled, isMobile, setIsMobileShown) => {
	useEffect(() => {
		const preventDefault = e => e.preventDefault()

		if (isDisabled && isMobile) {
			document.body.style.overflowY = 'hidden'
			document.documentElement.style.overflowY = 'hidden'
			document.addEventListener('touchmove', preventDefault, { passive: false })
		} else {
			document.body.style.overflowY = 'auto'
			document.documentElement.style.overflowY = 'auto'
			document.removeEventListener('touchmove', preventDefault)
		}
		if (!isMobile) {
			setIsMobileShown(false)
		}

		return () => {
			document.body.style.overflowY = 'auto'
			document.documentElement.style.overflowY = 'auto'
			document.removeEventListener('touchmove', preventDefault)
		}
	}, [isDisabled, isMobile, setIsMobileShown])
}
