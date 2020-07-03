import styles from './WeatherIcon.module.scss'
import { IoIosCloudy } from 'react-icons/io'

export default function WeatherIcon({ condition }: { condition: string }) {
	return (
		<div className={styles.icon}>
			{condition.toLowerCase() === 'nublado' ? (
				<IoIosCloudy />
			) : (
				<IoIosCloudy />
			)}
		</div>
	)
}
