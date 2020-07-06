import styles from './AddCity.module.scss'
import { useState } from 'react'

import { searchByKeyword } from '../../controller/search'

export default function AddCity({ setCoord, showScreen, cities }) {
	const [searchData, setSearchData] = useState([])
	const [keyWord, setKey] = useState('')
	const handleChange = async (event) => {
		event.preventDefault()
		setKey(event.target.value)
		const searchD = await searchByKeyword(event.target.value)
		setSearchData(searchD)
	}

	return (
		<div className={styles.addCity}>
			<input
				type='text'
				name='search'
				id='search'
				className={styles.search}
				onChange={(event) => handleChange(event)}
				placeholder='Buscar...'
			/>

			<div className={styles.results}>
				{keyWord && <h3>Resultados para {keyWord}</h3>}
				{searchData.map((city) => {
					return (
						<p
							key={city.id}
							onClick={() => {
								if (!cities.find((cityState) => cityState.name === city.name)) {
									setCoord({ ...city.coord })
								}
								showScreen('ListOfCities')
							}}
						>
							{city.name}, {city.country}
						</p>
					)
				})}
			</div>
		</div>
	)
}
