import styles from './WeatherIcon.module.scss'
import { icons } from '../../utils/icons'
export default function WeatherIcon({
	condition,
	className,
}: {
	condition: string
	className?: string
}) {
	return (
		<div className={styles.icon + ' ' + className}>{icons(condition)()}</div>
	)
}
