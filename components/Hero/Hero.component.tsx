import styles from './Hero.module.scss'

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
			{city && <h3>{city}</h3>}
			{condition && <h4>{condition}</h4>}
			{temperature && <h2>{temperature}°</h2>}
		</div>
	)
}
