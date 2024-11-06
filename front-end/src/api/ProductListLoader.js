import { redirect } from 'react-router-dom'
import { PATH_TO_ENDPOINT_MAPPING, BACKEND_URL } from '../constants/api'
import { CATEGORIES } from '../constants/category'

export const ProductListLoader = ({ params: { gender, category } }) => {
	const foundCategory = CATEGORIES.find(c => c.path === category)
	const foundGender = PATH_TO_ENDPOINT_MAPPING[gender]
	console.log(foundCategory)
	if (foundCategory && foundGender) {
		return fetch(`${BACKEND_URL}/products/?gender=${foundGender}&category=${foundCategory.path}`)
	} else {
		return redirect('/kobieta')
	}
}
