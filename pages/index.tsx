import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

import axios from 'axios'

import Layout from '../components/Layout'
import SingleCity from '../components/SingleCity/SingleCity.component'
import Loading from '../components/Loading/Loading.component'
const ListOfCities = dynamic(
	import('../components/ListOfCities/ListOfCities.component')
)
const AddCity = dynamic(import('../components/AddCity/AddCity.component'))
import Menu from '../components/Menu/Menu.component'

export default function Home({ geoLocalization }) {
	const [visible, setVisible] = useState(false)
	const [newCity, addNewCity] = useState(false)
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

			if (!cities.find((city) => city.city === localWeather.city)) {
				setCities([
					...cities,
					{
						city: localWeather.city,
						temperature: localWeather.temperature,
						coords: { lat: coord.lat, lon: coord.lon },
					},
				])
			}
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
			{!visible && !newCity && (
				<SingleCity
					currentWeather={stateCurrentWeather}
					hourlyWeather={stateHourlyWeather['hourly']}
					sevenDaysWeather={stateSevenDaysWeather['sevenDays']}
				/>
			)}
			{visible && !newCity && (
				<ListOfCities
					cities={cities}
					setCoord={setCoord}
					actualCoord={coord}
					setVisible={() => setVisible(!visible)}
				/>
			)}
			{newCity && (
				<AddCity
					setCoord={setCoord}
					actualCoord={coord}
					handleClick={setVisible}
					visible={visible}
					handleAddCity={addNewCity}
					newCity={newCity}
				/>
			)}

			<Menu
				handleClick={setVisible}
				visible={visible}
				handleAddCity={addNewCity}
				newCity={newCity}
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
		if (getGeoLocalization.status === 'success') {
			geoLocalization = getGeoLocalization
		} else {
			geoLocalization = { status: 'success', lat: -34.603722, lon: -58.381592 } //if fails to load the GeoLocalization, show this as default.
		}

		return {
			props: { geoLocalization },
		}
	} catch (err) {
		console.error(err)
	}
}
