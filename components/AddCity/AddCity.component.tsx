import styles from './AddCity.module.scss'
import { useState } from 'react'
import { IoIosList } from 'react-icons/io'

import { searchByKeyword } from '../../controller/search'

export default function AddCity({
	setCoord,
	actualCoord,
	handleAddCity,
	handleClick,
	newCity,
	visible,
}) {
	const [searchData, setSearchData] = useState([])
	const [keyWord, setKey] = useState('')
	const handleChange = async (event) => {
		event.preventDefault()
		setKey(event.target.value)
		const searchData = await searchByKeyword(event.target.value)
		setSearchData(searchData)
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

			<div className=''>
				{keyWord && <h3>Resultados para {keyWord}</h3>}
				{searchData.map((city) => {
					return (
						<p
							key={city.id}
							onClick={() => {
								if (
									actualCoord.lat !== city.coord.lat ||
									actualCoord.lon !== city.coord.lon
								) {
									setCoord({ ...city.coord })
								}
								handleAddCity(!newCity)
								handleClick(!visible)
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
