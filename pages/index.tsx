import { GetServerSideProps } from 'next'

import Layout from '../components/Layout'
import SingleCity from '../components/SingleCity/SingleCity.component'
import Menu from '../components/Menu/Menu.component'

import axios from 'axios'

import { getWeather } from '../controller/weather'
import { CurrentWeather } from '../model/weather.model'

export default function Home({ localWeather, hourlyWeather }) {
	//check localWeather is not empty
	if (
		Object.keys(localWeather).length === 0 ||
		Object.keys(hourlyWeather).length === 0
	) {
		return null
	}
	return (
		<Layout title='Weather App' background='grey'>
			<SingleCity
				currentWeather={localWeather}
				hourlyWeather={hourlyWeather.hourly}
			/>
			<Menu />
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		let localWeather = {} // Current weather
		let hourlyWeather = {}
		let fullWeather = {} // hourly weather and for the next 7 days
		let geoLocalization:
			| {
					status: string
					country: string
					countryCode: string
					city: string
					zip: string
					lat: number
					lon: number
			  }
			| {} = {}

		const { data: getGeoLocalization } = await axios.get(
			'http://ip-api.com/json/?fields=status,message,country,countryCode,city,zip,lat,lon'
		)
		geoLocalization = getGeoLocalization

		//check geoLocalization has the properties that we need
		if (
			geoLocalization.hasOwnProperty('lat') &&
			geoLocalization.hasOwnProperty('lon')
		) {
			localWeather = await getWeather(
				geoLocalization['lat'],
				geoLocalization['lon'],
				'current'
			)
			hourlyWeather = await getWeather(
				geoLocalization['lat'],
				geoLocalization['lon'],
				'hourly'
			)
		}

		return { props: { localWeather, hourlyWeather } }
	} catch (err) {
		console.error(err)
	}
}
