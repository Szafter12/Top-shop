import { BACKEND_URL } from '../constants/api'

export function AddToFav({ params: { productId } }) {
	return fetch(`${BACKEND_URL}/favourites`, {
		method: 'POST',
		body: JSON.stringify({
			productId: Number(productId),
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
