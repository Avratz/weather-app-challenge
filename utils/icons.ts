import { WiCloud, WiRain, WiAlien, WiDaySunny, WiSnow } from 'react-icons/wi'

export function icons(condition: string): () => JSX.Element {
	const icons = {
		Nublado: WiCloud,
		Lluvia: WiRain,
		Despejado: WiDaySunny,
		Nieve: WiSnow,
	}

	return Object.keys(icons).includes(condition) ? icons[condition] : WiAlien
}
