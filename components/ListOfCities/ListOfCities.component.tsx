import styles from './ListOfCities.module.scss'
import CityCompact from '../CityCompact/CityCompact.component'

export default function ListOfCities({
	cities,
	setCoord,
	showScreen,
	actualCoord,
	dispatch,
}) {
	return (
		<div className={styles.listOfCities}>
			{cities.map((city) => {
				return (
					<CityCompact
						key={city.id}
						city={city}
						setCoord={setCoord}
						actualCoord={actualCoord}
						showScreen={showScreen}
						dispatch={dispatch}
					/>
				)
			})}
		</div>
	)
}
