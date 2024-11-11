import { Footer } from '../Footer/Footer'
import { MainMenu } from '../MainMenu/MainMenu'
import { Logo } from '../Logo/Logo'
import { CurrencySelector } from '../CurrencySelector/CurrencySelector'
import { IconMenu } from '../IconMenu/IconMenu'
import { TopBar } from '../TopBar/TopBar'
import { CategoryMenu } from '../CategoryMenu/CategoryMenu'
import { MainContent } from '../MainContent/MainContent'
import { BurgerBtn } from '../BurgerBtn/BurgerBtn'
import { MobileMenu } from '../MobileMenu/MobileMenu'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { CURRENCIES } from '../../constants/currencies'

export function Layout() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 800)
	const [isMobileShown, setIsMobileShown] = useState(false)
	const [currency, setCurrency] = useState(localStorage['selected_currency'] || CURRENCIES.PLN)

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 800)

		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		isMobileShown && isMobile ? (document.body.style.overflowY = 'hidden') : (document.body.style.overflowY = 'auto')
		if (!isMobile) {
			setIsMobileShown(false)
		}

		return () => (document.body.style.overflowY = 'auto')
	}, [isMobileShown, isMobile])

	return (
		<>
			<CurrencyContext.Provider value={[currency, setCurrency]}>
				<MainContent>
					<TopBar>
						{!isMobile && <MainMenu />}
						<Logo />
						{!isMobile && (
							<div>
								<CurrencySelector />
								<IconMenu />
							</div>
						)}
						{isMobile && <BurgerBtn click={setIsMobileShown} />}
					</TopBar>
					<CategoryMenu />
					<Outlet />
				</MainContent>
				<Footer />
				{isMobile && <MobileMenu setIsMobileShown={setIsMobileShown} isMobileShown={isMobileShown} />}
			</CurrencyContext.Provider>
		</>
	)
}
