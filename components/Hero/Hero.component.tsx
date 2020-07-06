import styles from './Hero.module.scss'
import WeatherIcon from '../WeatherIcon/WeatherIcon.component'

export default function Hero({
	city,
	condition,
	temperature,
}: {
	city: string
	condition: string
	temperature: number
}) {
	return (
		<div className={styles.hero}>
			<div className={styles.city}>
				{city && <h1>{city}</h1>}
				{condition && <h4>{condition}</h4>}
			</div>
			<div className={styles.temperature}>
				<div className={styles.icon}>
					<WeatherIcon className='font-medium' condition={condition} />
				</div>
				{temperature !== undefined ? <h2>{temperature}°</h2> : ''}
			</div>
		</div>
	)
}
