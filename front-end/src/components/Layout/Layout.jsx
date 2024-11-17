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
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { CurrencyContext } from '../../contexts/CurrencyContext'
import { CURRENCIES } from '../../constants/currencies'
import { CartContext } from '../../contexts/CartContext'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useDisableScroll } from '../../hooks/useDisableScroll'
import { useResize } from '../../hooks/useResize'

export function Layout() {
	const mobileWidth = 800
	const [isMobile, setIsMobile] = useState(window.innerWidth < mobileWidth)

	const [isMobileShown, setIsMobileShown] = useState(false)

	const [currency, setCurrency] = useLocalStorage('selected_currency', CURRENCIES.PLN)

	const [cartItems, setCartItems] = useState(() => {
		const savedCart = localStorage.getItem('cart_products')
		return savedCart ? JSON.parse(savedCart) : []
	})

	useResize(setIsMobile, 800)

	useDisableScroll(isMobileShown, isMobile, setIsMobileShown)

	const addToCart = product => {
		const ProductInCart = cartItems.find(prod => prod.id === product.id)

		if (ProductInCart) {
			ProductInCart.quantity += 1
			const newCart = cartItems.filter(el => el.id !== product.id)
			const newState = [...newCart, ProductInCart]
			setCartItems(newState)
		} else {
			const newState = [...cartItems, { ...product, quantity: 1 }]
			setCartItems(newState)
		}
	}

	const updateQuantity = (product, newQuantity) => {
		setCartItems(prevCartItems => {
			const updatedCart = prevCartItems.map(item =>
				item.id === product.id ? { ...item, quantity: newQuantity } : item
			)

			localStorage.setItem('cart_products', JSON.stringify(updatedCart))
			return updatedCart
		})
	}

	const removeFromCart = product => {
		const newState = cartItems.filter(el => el.id !== product.id)
		setCartItems(newState)
	}

	return (
		<>
			<CartContext.Provider value={[cartItems, addToCart, removeFromCart, updateQuantity]}>
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
			</CartContext.Provider>
		</>
	)
}
