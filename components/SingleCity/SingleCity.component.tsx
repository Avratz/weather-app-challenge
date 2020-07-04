import styles from './SingleCity.module.scss'
import WeatherNow from '../WeatherNow/WeatherNow.component'
import WeatherSevenDays from '../WeatherSevenDays/WeatherSevenDays.component'

export default function SingleCity({
	currentWeather,
	hourlyWeather,
	sevenDaysWeather,
}) {
	const currentWeatherWithMinMax = {
		...currentWeather,
		day: sevenDaysWeather[0].day,
		minTemperature: sevenDaysWeather[0].minTemperature,
		maxTemperature: sevenDaysWeather[0].maxTemperature,
		today: sevenDaysWeather[0].today,
	}
	return (
		<div className={styles.singleCity}>
			<WeatherNow
				currentWeather={currentWeatherWithMinMax}
				hourlyWeather={hourlyWeather}
			/>
			<WeatherSevenDays sevenDaysWeather={sevenDaysWeather.slice(1)} />
		</div>
	)
}
