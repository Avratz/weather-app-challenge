export interface CurrentWeather {
	condition: string
	clouds: number
	temperature: number
	feelsLike?: number
	city?: string
	hour?: string
}
