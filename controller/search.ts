import { citiesArray } from '../constants/cities'

export async function searchByKeyword(searchByKeyword) {
	let query = searchByKeyword.toLowerCase()
	return citiesArray
		.filter((city) => city.name.toLowerCase().indexOf(query) >= 0)
		.slice(0, 3)
}
