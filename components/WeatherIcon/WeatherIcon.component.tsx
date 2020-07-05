import styles from './WeatherIcon.module.scss'
import { icons } from '../../utils/icons'
export default function WeatherIcon({ condition }: { condition: string }) {
	console.log(condition)
	return <div className={styles.icon}>{icons(condition)()}</div>
}
