export function translateWeatherCondition(condition: string) {
	const conditionLower = condition.toLowerCase()
	const conditions = {
		clouds: 'Nublado',
		rain: 'Lluvia',
		clear: 'Despejado',
	}
	return Object.keys(conditions).includes(conditionLower)
		? conditions[conditionLower]
		: conditionLower
}
