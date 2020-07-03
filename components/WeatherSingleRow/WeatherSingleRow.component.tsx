import styles from './WeatherSingleRow.module.scss'
import WeatherIcon from '../WeatherIcon/WeatherIcon.component'

export default function WeatherSingleRow({
	day,
	minTemperature,
	maxTemperature,
	today,
}: {
	day: string
	minTemperature: number
	maxTemperature: number
	today: boolean
}) {
	return (
		<div className={styles.weatherSingleRow}>
			<h5>
				{day} {today && 'HOY'}
			</h5>
			{!today && <WeatherIcon condition='nublado' />}
			<div className={styles.temperature}>
				<span>{maxTemperature}</span>
				<span>{minTemperature}</span>
			</div>
		</div>
	)
}
