import {
	IoIosCloudy,
	IoIosRainy,
	IoIosHelpCircle,
	IoMdSunny,
} from 'react-icons/io'

export function icons(condition: string): () => JSX.Element {
	const icons = {
		Nublado: IoIosCloudy,
		Lluvia: IoIosRainy,
		Despejado: IoMdSunny,
	}

	return Object.keys(icons).includes(condition)
		? icons[condition]
		: IoIosHelpCircle
}
