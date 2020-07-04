import styles from './WeatherSingleRow.module.scss'
import WeatherIcon from '../WeatherIcon/WeatherIcon.component'

export default function WeatherSingleRow({
	day,
	feelsLike,
	today,
	condition,
	minTemperature,
	maxTemperature,
}: {
	day: string
	feelsLike?: number
	today: boolean
	condition: string
	minTemperature?: number
	maxTemperature?: number
}) {
	return (
		<div className={styles.weatherSingleRow}>
			<h5>
				{day} {today && 'HOY'}
			</h5>
			{/*!today && <WeatherIcon condition={condition} />*/}
			<div className={styles.temperature}>
				<span>ST: {feelsLike}°</span>
			</div>
		</div>
	)
}
