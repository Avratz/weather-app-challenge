import axios from 'axios'
import { translateWeatherCondition } from '../utils/translate'
import { getHour } from '../utils/conversion'
import { CurrentWeather } from '../model/weather.model'
const endPoint = 'https://api.openweathermap.org/data/2.5'

export async function getWeather(
	lat: number,
	lon: number,
	periodOfTime: string
) {
	//This function calls to whe openweathermap API and gets the weather for any given latitude and longitud and period of time.
	//arguments are required and must be of type number
	try {
		let weather: CurrentWeather | {} = {}
		switch (periodOfTime) {
			case 'current':
				{
					const { data: getWeather } = await axios.get(
						`${endPoint}/weather?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&APPID=${process.env.APP_ID}`
					)
					if (getWeather.hasOwnProperty('cod') && getWeather['cod'] === 200) {
						weather = {
							condition: translateWeatherCondition(
								getWeather?.weather[0]?.main ?? ''
							),
							clouds: getWeather?.clouds?.all,
							temperature: Math.round(getWeather?.main?.temp),
							feelsLike: Math.round(getWeather?.main?.feels_like),
							city: getWeather?.name,
						}
					}
				}
				return weather
			case 'hourly':
				{
					const { data: getWeather } = await axios.get(
						`${endPoint}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current,daily&units=metric&APPID=${process.env.APP_ID}`
					)

					if (
						getWeather.hasOwnProperty('hourly') &&
						getWeather['hourly'].length > 0
					) {
						const hourly = getWeather.hourly.slice(0, 25).map((day, index) => {
							return {
								hour: index === 0 ? 'Ahora' : getHour(day.dt),
								condition: translateWeatherCondition(
									day?.weather[0]?.main ?? ''
								),
								clouds: day?.clouds,
								temperature: Math.round(day?.temp),
							}
						})
						weather = {
							hourly,
						}
					}
				}
				console.log(weather)
				return weather
		}
	} catch (err) {
		console.error(err)
	}
}

export async function getCurrentWeather(lat: number, lon: number) {
	//This function calls to whe openweathermap API and gets the current weather for any given latitude and longitud.
	//arguments are required and must be of type number
	try {
		let currentWeather: CurrentWeather | {} = {}

		const { data: getWeather } = await axios.get(
			`${endPoint}/weather?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&APPID=${process.env.APP_ID}`
		)
		if (getWeather.hasOwnProperty('cod') && getWeather['cod'] === 200) {
			currentWeather = {
				condition: translateWeatherCondition(
					getWeather?.weather[0]?.main ?? ''
				),
				clouds: getWeather?.clouds?.all,
				temperature: Math.round(getWeather?.main?.temp),
				feelsLike: Math.round(getWeather?.main?.feels_like),
				city: getWeather?.name,
			}
		}
		return currentWeather
	} catch (err) {
		console.error(err)
	}
}

export async function getHourlyWeather(lat: number, lon: number) {
	//This function calls to whe openweathermap API and gets the hourly weather for any given latitude and longitud.
	//arguments are required and must be of type number
	try {
		let hourlyWeather: { any } | {} = {}

		const { data: getWeather } = await axios.get(
			`${endPoint}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current,daily&units=metric&APPID=${process.env.APP_ID}`
		)
		hourlyWeather = getWeather

		return hourlyWeather
	} catch (err) {
		console.error(err)
	}
}

export async function getDailyWeather(lat: number, lon: number) {
	//This function calls to whe openweathermap API and gets the daily weather for any given latitude and longitud.
	//arguments are required and must be of type number
	try {
		let dailyWeather: { any } | {} = {}

		const { data: getWeather } = await axios.get(
			`${endPoint}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current,daily&units=metric&APPID=${process.env.APP_ID}`
		)
		hourlyWeather = getWeather

		return hourlyWeather
	} catch (err) {
		console.error(err)
	}
}
