import styles from './WeatherFiveDays.module.scss'
import WeatherSingleRow from '../WeatherSingleRow/WeatherSingleRow.component'

const weatherFive = [
	{
		day: 'Sabado',
		minTemperature: 4,
		maxTemperature: 9,
		today: false,
		condition: 'Nublado',
	},
	{
		day: 'Domingo',
		minTemperature: 4,
		maxTemperature: 9,
		today: false,
		condition: 'Nublado',
	},
	{
		day: 'Lunes',
		minTemperature: 4,
		maxTemperature: 9,
		today: false,
		condition: 'Nublado',
	},
	{
		day: 'Martes',
		minTemperature: 4,
		maxTemperature: 9,
		today: false,
		condition: 'Nublado',
	},
	{
		day: 'Miercoles',
		minTemperature: 4,
		maxTemperature: 9,
		today: false,
		condition: 'Nublado',
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
