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

export function Layout() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 800)
	const [isMobileShown, setIsMobileShown] = useState(false)

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
			{isMobile && <MobileMenu isMobileShown={isMobileShown} />}
		</>
	)
}
