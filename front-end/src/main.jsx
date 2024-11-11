import './styles/theme.css'
import './styles/global.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cart } from './views/Cart/Cart'
import { FavPage } from './views/FavPage/FavPage'
import { Layout } from './components/Layout/Layout'
import { MainPage } from './views/MainPage/MainPage'
import { MainPageLoader } from './api/MainPageLoader'
import { ProductList } from './views/ProductList/ProductList'
import { ProductListLoader } from './api/ProductListLoader'
import { ProductView } from './views/ProductView/ProductView'
import { ProductLoader } from './api/ProductLoader'
import { AddToFav } from './api/AddToFav'
import { FavouritesLoader } from './api/FavouritesLoader'
import { DeleteFavProduct } from './api/DeleteFavProduct'

const router = createBrowserRouter([
	{
		path: '/add-to-favourities/:productId',
		action: AddToFav,
	},
	{
		path: '/delete-from-fav/:favouritesId',
		action: DeleteFavProduct,
	},
	{
		path: '',
		element: <Layout />,
		children: [
			{
				path: '/ulubione',
				element: <FavPage />,
				loader: FavouritesLoader,
			},
			{
				path: '/koszyk',
				element: <Cart />,
			},
			{
				path: '/:gender?',
				element: <MainPage />,
				loader: MainPageLoader,
			},
			{
				path: '/:gender/:category/:subcategory?',
				element: <ProductList />,
				loader: ProductListLoader,
			},
			{
				path: '/:gender/:category/:subcategory/:productId',
				element: <ProductView />,
				loader: ProductLoader,
			},
		],
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</StrictMode>
)
