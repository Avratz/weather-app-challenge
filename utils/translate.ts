export function translateWeatherCondition(condition: string) {
	const conditionLower = condition.toLowerCase()
	const conditions = {
		clouds: 'Nublado',
		rain: 'Lluvia',
	}
	return Object.keys(conditions).includes(conditionLower)
		? conditions[conditionLower]
		: conditionLower
}
