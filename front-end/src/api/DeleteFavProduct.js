import { BACKEND_URL } from '../constants/api'

export function DeleteFavProduct({ params }) {
	return fetch(`${BACKEND_URL}/favourites/${params.favouritesId}`, {
		method: 'DELETE',
	})
}
