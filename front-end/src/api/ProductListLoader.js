import { redirect } from 'react-router-dom'
import { PATH_TO_ENDPOINT_MAPPING, BACKEND_URL } from '../constants/api'
import { CATEGORIES } from '../constants/category'

export const ProductListLoader = ({ params: { gender, category, subcategory } }) => {
	const foundCategory = CATEGORIES.find(c => c.path === category)
	const foundGender = PATH_TO_ENDPOINT_MAPPING[gender]

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

		return fetch(url)
	} else {
		return redirect('/kobieta')
	}
}
