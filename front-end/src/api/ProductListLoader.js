import { redirect } from 'react-router-dom'
import { PATH_TO_ENDPOINT_MAPPING, BACKEND_URL } from '../constants/api'
import { CATEGORIES } from '../constants/category'

export const ProductListLoader = ({ params: { gender, category, subcategory }, request }) => {
	const foundCategory = CATEGORIES.find(c => c.path === category)
	const foundGender = PATH_TO_ENDPOINT_MAPPING[gender]
	const pageUrl = new URL(request.url)
	const page = pageUrl.searchParams.get('page') || 1

	if (foundCategory && foundGender) {
		let url = `${BACKEND_URL}/products/?gender=${foundGender}&category=${category}`

		if (subcategory) {
			const foundSubCategory = foundCategory.subcategories.find(sc => sc.path === subcategory)

			if (foundSubCategory) {
				url = `${url}&subcategory=${subcategory}`
			} else {
				return redirect('/kobieta')
			}
		}

		url = `${url}&_limit=8&_page=${page}`

		return fetch(url).then(res => {
			const numberOfPages = Math.ceil(Number(res.headers.get('X-Total-Count')) / 8)

			return res.json().then(products => {
				return {
					products,
					numberOfPages,
				}
			})
		})
	} else {
		return redirect('/kobieta')
	}
}
