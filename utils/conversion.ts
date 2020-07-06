export function getHour(dt: number) {
	return new Date(dt * 1000).toLocaleString('en-US', {
		hour: 'numeric',
		hour12: false,
	})
}

export function getDay(dt: number) {
	const daysOfTheWeek = {
		Monday: 'Lunes',
		Tuesday: 'Martes',
		Wednesday: 'Miercoles',
		Thursday: 'Jueves',
		Friday: 'Viernes',
		Saturday: 'Sábado',
		Sunday: 'Domingo',
	}
	console.log(new Date(dt * 1000).toLocaleString('en-US', { weekday: 'long' }))
	return daysOfTheWeek[
		new Date(dt * 1000).toLocaleString('en-US', { weekday: 'long' })
	]
}
