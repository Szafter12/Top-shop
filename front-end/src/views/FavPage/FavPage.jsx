import { useLoaderData } from 'react-router-dom'
import { FavProducts } from '../../components/FavProducts/FavProducts'

export function FavPage() {
	const favourites = useLoaderData()

	return <FavProducts favourites={favourites} />
}
