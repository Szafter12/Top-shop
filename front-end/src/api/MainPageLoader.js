import { BACKEND_URL, PATH_TO_ENDPOINT_MAPPING } from '../constants/api'
import { redirect } from 'react-router-dom'

export const MainPageLoader = ({ params }) => {
	const backendPath = PATH_TO_ENDPOINT_MAPPING[params.gender]

	if (backendPath) {
		return fetch(`${BACKEND_URL}/${backendPath}`)
	} else {
		return redirect('/kobieta')
	}
}
