import './styles/theme.css'
import './styles/global.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainPage } from './views/MainPage/MainPage.jsx'
import { Cart } from './views/Cart/Cart.jsx'
import { FavPage } from './views/FavPage/FavPage.jsx'
import { ProductList } from './views/ProductList/ProductList.jsx'
import { ProductView } from './views/ProductView/ProductView.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: 'favProducts',
		element: <FavPage />,
	},
	{
		path: 'cart',
		element: <Cart />,
	},
	{
		path: 'productlist',
		element: <ProductList />,
	},
	{
		path: 'product',
		element: <ProductView />,
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</StrictMode>
)
