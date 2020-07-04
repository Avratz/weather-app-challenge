export interface CurrentWeather {
	condition: string
	clouds: number
	temperature: number
	feelsLike?: number
	city?: string
	day?: string
	minTemperature?: number
	maxTemperature?: number
	hour?: string
	today?: boolean
}
