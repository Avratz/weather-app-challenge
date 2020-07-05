import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

import Layout from '../components/Layout'
import SingleCity from '../components/SingleCity/SingleCity.component'
import Loading from '../components/Loading/Loading.component'
const ListOfCities = dynamic(
	import('../components/ListOfCities/ListOfCities.component')
)
import Menu from '../components/Menu/Menu.component'

import axios from 'axios'

import { getWeather } from '../controller/weather'
import { CurrentWeather } from '../model/weather.model'

export default function Home({ geoLocalization }) {
	const [visible, setVisible] = useState(false)
	const [coord, setCoord] = useState({
		lat: geoLocalization.lat,
		lon: geoLocalization.lon,
	})

	const [cities, setCities] = useState([])
	const [stateCurrentWeather, setCurrentWeather] = useState({})
	const [stateHourlyWeather, setHourlyWeather] = useState({})
	const [stateSevenDaysWeather, setSevenDaysWeather] = useState({})
	useEffect(() => {
		setCurrentWeather({})
		const fetchData = async () => {
			const { data: localWeather } = await axios(
				`/api/weather/${coord.lat}/${coord.lon}/current`
			)
			const { data: hourlyWeather } = await axios(
				`/api/weather/${coord.lat}/${coord.lon}/hourly`
			)
			const { data: sevenDaysWeather } = await axios(
				`/api/weather/${coord.lat}/${coord.lon}/sevenDays`
			)
			setCurrentWeather(localWeather)
			setHourlyWeather(hourlyWeather)
			setSevenDaysWeather(sevenDaysWeather)
			setCities([
				...cities,
				{
					city: localWeather.city,
					temperature: localWeather.temperature,
					coords: { lat: coord.lat, lon: coord.lon },
				},
			])
		}
		fetchData()
	}, [coord])

	//check localWeather is not empty
	if (
		Object.keys(stateCurrentWeather).length === 0 ||
		Object.keys(stateHourlyWeather).length === 0 ||
		Object.keys(stateSevenDaysWeather).length === 0
	) {
		return <Loading />
	}

	return (
		<Layout title='Weather App' background='grey'>
			{!visible && (
				<SingleCity
					currentWeather={stateCurrentWeather}
					hourlyWeather={stateHourlyWeather['hourly']}
					sevenDaysWeather={stateSevenDaysWeather['sevenDays']}
				/>
			)}
			{visible && (
				<ListOfCities
					cities={cities}
					setCoord={setCoord}
					actualCoord={coord}
					setVisible={() => setVisible(!visible)}
				/>
			)}

			<Menu
				handleClick={() => {
					setVisible(!visible)
				}}
			/>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		let geoLocalization:
			| {
					status: string
					lat: number
					lon: number
			  }
			| {} = {}

		const { data: getGeoLocalization } = await axios.get(
			'http://ip-api.com/json/?fields=status,lat,lon'
		)
		geoLocalization = getGeoLocalization

		return {
			props: { geoLocalization },
		}
	} catch (err) {
		console.error(err)
	}
}
