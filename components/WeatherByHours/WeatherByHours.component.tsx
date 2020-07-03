import styles from './WeatherByHours.module.scss'
import WeatherIcon from '../WeatherIcon/WeatherIcon.component'

type weatherSingle = {
	hour: string
	condition: string
	temperature: number
}

export default function WeatherByHours({
	weatherByHours,
}: {
	weatherByHours: weatherSingle[]
}) {
	if (weatherByHours.length <= 0) {
		return <p>Cargando...</p>
	}
	return (
		<div className={styles.weatherByHours}>
			<ul>
				{weatherByHours.map((weather: weatherSingle, index: number) => {
					return (
						<li key={index}>
							<p>{weather.hour}</p>
							<WeatherIcon condition={weather.condition} />
							<p>{weather.temperature}</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
