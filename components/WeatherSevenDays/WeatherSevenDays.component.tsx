import styles from './WeatherSevenDays.module.scss'
import WeatherSingleRow from '../WeatherSingleRow/WeatherSingleRow.component'

export default function WeatherSevenDays({ sevenDaysWeather }) {
	return (
		<div className={styles.weatherSevenDays}>
			<ul>
				{sevenDaysWeather.map((day, index) => {
					return (
						<li key={index}>
							<WeatherSingleRow weather={day} />
						</li>
					)
				})}
			</ul>
		</div>
	)
}
