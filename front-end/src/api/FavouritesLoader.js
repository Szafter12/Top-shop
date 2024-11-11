import { BACKEND_URL } from '../constants/api'

export function FavouritesLoader() {
	return fetch(`${BACKEND_URL}/favourites?_expand=product`)
}
