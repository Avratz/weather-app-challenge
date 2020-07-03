import styles from './WeatherNow.module.scss'
import Hero from '../Hero/Hero.component'
import WeatherByHours from '../WeatherByHours/WeatherByHours.component'
import WeatherSingleRow from '../WeatherSingleRow/WeatherSingleRow.component'

import { daysOfTheWeek } from '../../constants/daysOfTheWeek'

export default function WeatherNow({ weatherToday }) {
	console.log(weatherToday)
	const datos = {
		city:
			weatherToday.name.charAt(0).toUpperCase() +
			weatherToday.name.toLowerCase().slice(1),
		condition: weatherToday.weather[0].main,
		temperature: Math.round(weatherToday.main.temp),
	}
	const weatherByHours = [
		{
			hour: 'Ahora',
			condition: 'Nublado',
			temperature: 8,
		},
		{
			hour: '12',
			condition: 'Nublado',
			temperature: 9,
		},
		{
			hour: '13',
			condition: 'Nublado',
			temperature: 10,
		},
		{
			hour: '15',
			condition: 'Nublado',
			temperature: 10,
		},
		{
			hour: '16',
			condition: 'Nublado',
			temperature: 10,
		},
		{
			hour: '16',
			condition: 'Nublado',
			temperature: 10,
		},
		{
			hour: '17',
			condition: 'Nublado',
			temperature: 9,
		},
	]

	const todayDate = new Date()

	const weatherMinMax = {
		day: daysOfTheWeek[todayDate.getDay()],
		minTemperature: Math.round(weatherToday.main.temp_min),
		maxTemperature: Math.round(weatherToday.main.temp_max),
		today: true,
	}
	return (
		<div className={styles.weatherNow}>
			<Hero {...datos} />
			<>
				<WeatherSingleRow {...weatherMinMax} />
				<WeatherByHours weatherByHours={weatherByHours} />
			</>
		</div>
	)
}
