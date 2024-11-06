import './styles/theme.css'
import './styles/global.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cart } from './views/Cart/Cart'
import { FavPage } from './views/FavPage/FavPage'
import { Layout } from './components/Layout/Layout'
import { MainPage } from './views/MainPage/MainPage'
import { mainPageApi } from './api/mainPageApi'

const router = createBrowserRouter([
	{
		path: '',
		element: <Layout />,
		children: [
			{
				path: '/ulubione',
				element: <FavPage />,
			},
			{
				path: '/koszyk',
				element: <Cart />,
			},
			{
				path: '/:gender?',
				element: <MainPage />,
				loader: mainPageApi,
			},
		],
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</StrictMode>
)
