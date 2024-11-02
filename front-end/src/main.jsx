import './styles/theme.css'
import './styles/global.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { FavPage } from './views/FavPage/FavPage.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <FavPage />,
	},
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</StrictMode>
)
