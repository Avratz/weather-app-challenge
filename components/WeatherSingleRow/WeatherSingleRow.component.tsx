import styles from './WeatherSingleRow.module.scss'
import WeatherIcon from '../WeatherIcon/WeatherIcon.component'
import { CurrentWeather } from '../../model/weather.model'
export default function WeatherSingleRow({
	weather,
}: {
	weather: CurrentWeather
}) {
	const { day, today, condition, minTemperature, maxTemperature } = weather
	return (
		<div className={styles.weatherSingleRow}>
			<h5>
				{day} {today && 'HOY'}
			</h5>
			{!today && <WeatherIcon condition={condition} />}
			<div className={styles.temperature}>
				<span>{maxTemperature}</span>
				<span>{minTemperature}</span>
			</div>
		</div>
	)
}
