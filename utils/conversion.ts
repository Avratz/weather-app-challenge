export function getHour(dt: number) {
	return new Date(dt * 1000).toLocaleString(undefined, { hour: 'numeric' })
}

export function getDay(dt: number) {
	const daysOfTheWeek = {
		Mon: 'Lunes',
		Tue: 'Martes',
		Wed: 'Miercoles',
		Thu: 'Jueves',
		Fri: 'Viernes',
		Sat: 'Sábado',
		Sun: 'Domingo',
	}

	return daysOfTheWeek[
		new Date(dt * 1000).toLocaleString(undefined, { weekday: 'long' })
	]
}
