import styles from './WeatherIcon.module.scss'
import { icons } from '../../utils/icons'
export default function WeatherIcon({ condition }: { condition: string }) {
	return <div className={styles.icon}>{icons(condition)()}</div>
}
