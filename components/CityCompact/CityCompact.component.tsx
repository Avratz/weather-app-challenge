import styles from './CityCompact.module.scss'

export default function CityCompact({
	city,
	temperature,
	setCoord,
	coords,
	setVisible,
	actualCoord,
}: {
	city: string
	temperature: number
	setCoord: any
	coords: { lat: number; lon: number }
	setVisible: any
	actualCoord: { lat: number; lon: number }
}) {
	return (
		<div
			className={styles.cityCompact}
			onClick={() => {
				if (actualCoord.lat !== coords.lat || actualCoord.lon !== coords.lon) {
					setCoord({ ...coords })
				}

				setVisible()
			}}
		>
			<h3>{city}</h3>
			<h2>{temperature}°</h2>
		</div>
	)
}
