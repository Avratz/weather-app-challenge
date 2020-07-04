import styles from './WeatherNow.module.scss'
import Hero from '../Hero/Hero.component'
import WeatherByHours from '../WeatherByHours/WeatherByHours.component'
import WeatherSingleRow from '../WeatherSingleRow/WeatherSingleRow.component'

import { daysOfTheWeek } from '../../constants/daysOfTheWeek'
import { CurrentWeather } from '../../model/weather.model'

export default function WeatherNow({
	currentWeather,
	hourlyWeather,
}: {
	currentWeather: CurrentWeather
	hourlyWeather: CurrentWeather[]
}) {
	const heroProps = {
		city: currentWeather.city,
		condition: currentWeather.condition,
		temperature: currentWeather.temperature,
	}

	return (
		<div className={styles.weatherNow}>
			<Hero {...heroProps} />
			<>
				<WeatherSingleRow weather={currentWeather} />
				<WeatherByHours hourlyWeather={hourlyWeather} />
			</>
		</div>
	)
}
