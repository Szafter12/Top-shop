import { BACKEND_URL } from '../constants/api'

export function ProductLoader({ params: { productId } }) {
	return fetch(`${BACKEND_URL}/products/${productId}`)
}
