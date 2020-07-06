import styles from './CityCompact.module.scss'
import { type } from '../../store/actions'

export default function CityCompact({
	city,
	setCoord,
	actualCoord,
	showScreen,
	dispatch,
}: {
	city: {
		coords: { lat: number; lon: number }
		temperature: number
		name: string
		condition: string
	}
	setCoord: any
	actualCoord: { lat: number; lon: number }
	showScreen: any
	dispatch: any
}) {
	return (
		<div
			className={styles.cityCompact + ' ' + city.condition}
			onClick={() => {
				//if the actual coords in the state are not equal to the coords of the actual city
				if (
					actualCoord.lat !== city.coords.lat ||
					actualCoord.lon !== city.coords.lon
				) {
					setCoord({ ...city.coords }) // we update the state, this triggers useEffect and we fetch new the new data
					dispatch({
						type: type.LOADING,
					})
				}
				showScreen('SingleCity') //show the screen of the city
			}}
		>
			<h3>{city.name}</h3>
			<h2>{city.temperature}°</h2>
		</div>
	)
}
