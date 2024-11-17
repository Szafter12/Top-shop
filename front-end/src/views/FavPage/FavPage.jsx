import { useLoaderData } from 'react-router-dom'
import { FavProducts } from '../../components/FavProducts/FavProducts'
import { HeadContent } from '../../components/HeadContent/HeadContent'

export function FavPage() {
	const favourites = useLoaderData()

	return (
		<>
			<HeadContent description='Zobacz produkty które dodałeś do ulubionych'>Ulubione</HeadContent>
			<FavProducts favourites={favourites} />
		</>
	)
}
