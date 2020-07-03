import styles from './WeatherFiveDays.module.scss'
import WeatherSingleRow from '../WeatherSingleRow/WeatherSingleRow.component'

const weatherFive = [
	{
		day: 'Sabado',
		minTemperature: 4,
		maxTemperature: 9,
		today: false,
	},
	{
		day: 'Domingo',
		minTemperature: 4,
		maxTemperature: 9,
		today: false,
	},
	{
		day: 'Lunes',
		minTemperature: 4,
		maxTemperature: 9,
		today: false,
	},
	{
		day: 'Martes',
		minTemperature: 4,
		maxTemperature: 9,
		today: false,
	},
	{
		day: 'Miercoles',
		minTemperature: 4,
		maxTemperature: 9,
		today: false,
	},
]

export default function WeatherFiveDays() {
	return (
		<div className={styles.weatherFiveDays}>
			<ul>
				{weatherFive.map((day, index) => {
					return (
						<li key={index}>
							<WeatherSingleRow {...day} />
						</li>
					)
				})}
			</ul>
		</div>
	)
}
