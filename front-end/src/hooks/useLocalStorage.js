import { useState } from 'react'

export const useLocalStorage = (key, defaultValue) => {
	const getJSONToLocalStorage = () => {
		if (localStorage[key]) {
			return JSON.parse(localStorage[key])
		} else {
			return defaultValue
		}
	}

	const [data, setData] = useState(getJSONToLocalStorage)

	const setJSONToLocalStorage = newData => {
		setData(newData)
		localStorage[key] = JSON.stringify(newData)
	}

	return [data, setJSONToLocalStorage]
}
