import axios from 'axios'
import { translateWeatherCondition } from '../utils/translate'
import { getHour, getDay } from '../utils/conversion'
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
				return weather
			case 'sevenDays':
				{
					const { data: getWeather } = await axios.get(
						`${endPoint}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current,hourly&units=metric&APPID=${process.env.APP_ID}`
					)

					if (
						getWeather.hasOwnProperty('daily') &&
						getWeather['daily'].length > 0
					) {
						const sevenDays = getWeather.daily.map((day, index) => {
							return {
								today: index === 0 ? true : false,
								day: getDay(day.dt),
								condition: translateWeatherCondition(
									day?.weather[0]?.main ?? ''
								),
								minTemperature: Math.round(day?.temp?.min),
								maxTemperature: Math.round(day?.temp?.max),
								clouds: day?.clouds,
							}
						})
						weather = {
							sevenDays,
						}
					}
				}
				return weather
		}
	} catch (err) {
		console.error(err)
	}
}
