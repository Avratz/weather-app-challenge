import styles from './ListOfCities.module.scss'
import CityCompact from '../CityCompact/CityCompact.component'

export default function ListOfCities({
	cities,
	setCoord,
	setVisible,
	actualCoord,
}) {
	return (
		<div className={styles.listOfCities}>
			{cities.map((city, index) => {
				return (
					<CityCompact
						key={index}
						{...city}
						setCoord={setCoord}
						actualCoord={actualCoord}
						setVisible={() => setVisible()}
					/>
				)
			})}
		</div>
	)
}
