import styles from './SingleCity.module.scss'
import WeatherNow from '../WeatherNow/WeatherNow.component'
import WeatherFiveDays from '../WeatherFiveDays/WeatherFiveDays.component'

export default function SingleCity({ currentWeather, hourlyWeather }) {
	return (
		<div className={styles.singleCity}>
			<WeatherNow
				currentWeather={currentWeather}
				hourlyWeather={hourlyWeather}
			/>
			<WeatherFiveDays />
		</div>
	)
}
