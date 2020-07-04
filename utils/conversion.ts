export function getHour(dt: number) {
	return new Date(dt * 1000).toLocaleString('es-ES', { hour: 'numeric' })
}
