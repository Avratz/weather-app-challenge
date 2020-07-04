import styles from './WeatherByHours.module.scss'
import WeatherIcon from '../WeatherIcon/WeatherIcon.component'

import { CurrentWeather } from '../../model/weather.model'

export default function WeatherByHours({
	hourlyWeather,
}: {
	hourlyWeather: CurrentWeather[]
}) {
	if (hourlyWeather.length <= 0) {
		return <p>Cargando...</p>
	}
	return (
		<div className={styles.weatherByHours}>
			<ul>
				{hourlyWeather.map((weather: CurrentWeather, index: number) => {
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
