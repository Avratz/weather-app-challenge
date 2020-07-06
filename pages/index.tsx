import dynamic from 'next/dynamic'
import { useState, useEffect, useRef, useReducer } from 'react'
import axios from 'axios'

import Layout from '../components/Layout'
import SingleCity from '../components/SingleCity/SingleCity.component'
import Loading from '../components/Loading/Loading.component'
const ListOfCities = dynamic(
	import('../components/ListOfCities/ListOfCities.component')
)
const AddCity = dynamic(import('../components/AddCity/AddCity.component'))
import Menu from '../components/Menu/Menu.component'
import { getWeather } from '../controller/weather'

import { WeatherReducer } from '../store/reducers/Weather.reducer'
import { type } from '../store/actions'

export default function Home() {
	const initialState = {
		currentWeather: {},
		hourlyWeather: {},
		sevenDaysWeather: {},
		citiesList: [],
		loading: true,
	}
	const [state, dispatch] = useReducer(WeatherReducer, initialState)

	const [time, setTime] = useState(Date.now())
	const prevTime = useRef(time)

	const [screen, showScreen] = useState('SingleCity')
	const [coord, setCoord] = useState({ lat: null, lon: null })
	const geoCoords = useRef({ lat: null, lon: null })

	useEffect(() => {
		console.log('Component refreshed')
		let refreshWeatherInterval
		const fetchGeoLocalization = async () => {
			let { data: getGeoLocalization } = await axios.get(
				'http://ip-api.com/json/?fields=status,lat,lon'
			)
			if (getGeoLocalization.status !== 'success') {
				getGeoLocalization = {
					status: 'success',
					lat: -34.603722,
					lon: -58.381592,
				} //if fails to load the GeoLocalization, show this as default.
			}
			setCoord({
				lat: getGeoLocalization.lat,
				lon: getGeoLocalization.lon,
			})
		}

		if (coord.lat === null) {
			fetchGeoLocalization() //run only the first time
		}

		const fetchCurrentWeather = async () => {
			const { data: localWeather } = await axios(
				`/api/weather/${coord.lat}/${coord.lon}/current`
			)
			dispatch({
				type: type.GET_CURRENT_WEATHER,
				payload: localWeather,
			})
			dispatch({
				type: type.ADD_CITY,
				payload: {
					name: localWeather.city,
					condition: localWeather.condition,
					temperature: localWeather.temperature,
					coords: { lat: coord.lat, lon: coord.lon },
					id: Date.now(),
				},
			})
		}

		const fetchData = async () => {
			geoCoords.current = {
				lat: coord.lat,
				lon: coord.lon,
			}

			const { data: hourlyWeather } = await axios(
				`/api/weather/${coord.lat}/${coord.lon}/hourly`
			)
			const { data: sevenDaysWeather } = await axios(
				`/api/weather/${coord.lat}/${coord.lon}/sevenDays`
			)

			dispatch({
				type: type.GET_HOURLY_WEATHER,
				payload: hourlyWeather,
			})
			dispatch({
				type: type.SEVEN_DAYS_WEATHER,
				payload: sevenDaysWeather,
			})

			dispatch({
				type: type.LOADED,
			})

			refreshWeatherInterval = setInterval(() => setTime(Date.now()), 600000) // every 10 minutes
			prevTime.current = time
		}
		if (
			(geoCoords.current.lat !== coord.lat &&
				geoCoords.current.lon !== coord.lon) ||
			prevTime.current !== time
		) {
			if (
				geoCoords.current.lat !== coord.lat &&
				geoCoords.current.lon !== coord.lon
			) {
				//reset the state
			}
			fetchCurrentWeather()
			fetchData()
		}

		return () => {
			clearInterval(refreshWeatherInterval)
		}
	}, [coord, time])

	console.log(screen)
	if (state.loading) {
		return <Loading />
	}

	return (
		<Layout
			title='Weather App'
			className={screen === 'SingleCity' ? state.currentWeather.condition : ''}
		>
			{screen === 'SingleCity' && (
				<SingleCity
					currentWeather={state.currentWeather}
					hourlyWeather={state.hourlyWeather['hourly']}
					sevenDaysWeather={state.sevenDaysWeather['sevenDays']}
				/>
			)}
			{screen === 'ListOfCities' && (
				<ListOfCities
					cities={state.citiesList}
					setCoord={setCoord}
					actualCoord={coord}
					showScreen={showScreen}
					dispatch={dispatch}
				/>
			)}
			{screen === 'AddCity' && (
				<AddCity
					setCoord={setCoord}
					cities={state.citiesList}
					showScreen={showScreen}
				/>
			)}

			<Menu showScreen={showScreen} screen={screen} />
		</Layout>
	)
}
