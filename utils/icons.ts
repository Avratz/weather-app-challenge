import { IoIosCloudy, IoIosRainy, IoIosHelpCircle } from 'react-icons/io'

export function icons(condition: string): () => JSX.Element {
	const icons = {
		Nublado: IoIosCloudy,
		Lluvia: IoIosRainy,
	}
	return Object.keys(icons).includes(condition)
		? icons[condition]
		: IoIosHelpCircle
}
