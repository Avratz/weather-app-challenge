import Layout from '../components/Layout'
import SingleCity from '../components/SingleCity/SingleCity.component'
import axios from 'axios'

import { GetServerSideProps } from 'next'
export default function Home({ localWeather, geoLocalization }) {
	//check localWeather is not empty
	if (Object.keys(localWeather).length === 0) {
		return null
	}
	return (
		<Layout title={'Weather App'}>
			<SingleCity weatherToday={localWeather} />
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		let localWeather: { any } | {} = {}
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

		//check geoLocalization is not empty
		if (Object.keys(geoLocalization).length > 0) {
			const { data: getWeather } = await axios.get(
				`http://api.openweathermap.org/data/2.5/weather?zip=${geoLocalization['zip']},${geoLocalization['countryCode']}&units=metric&APPID=${process.env.APP_ID}`
			)
			localWeather = getWeather
		}
		return { props: { localWeather } }
	} catch (err) {
		console.error(err)
	}
}
