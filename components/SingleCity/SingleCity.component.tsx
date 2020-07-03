import styles from './SingleCity.module.scss'
import WeatherNow from '../WeatherNow/WeatherNow.component'
import WeatherFiveDays from '../WeatherFiveDays/WeatherFiveDays.component'

export default function SingleCity({ weatherToday }) {
	return (
		<div className={styles.singleCity}>
			<WeatherNow weatherToday={weatherToday} />
			<WeatherFiveDays />
		</div>
	)
}
