import Layout from '../components/Layout'
import SingleCity from '../components/SingleCity/SingleCity.component'
import axios from 'axios'

import { GetServerSideProps } from 'next'
export default function Home({ localWeather, geoLocalization }) {
	return (
		<Layout title={'Weather App'}>
			<SingleCity weatherToday={localWeather} />
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { data: geoLocalization } = await axios.get(
		'http://ip-api.com/json/?fields=status,message,country,countryCode,city,zip,lat,lon'
	)
	const { data: localWeather } = await axios.get(
		`http://api.openweathermap.org/data/2.5/weather?zip=${geoLocalization.zip},${geoLocalization.countryCode}&units=metric&APPID=${process.env.APP_ID}`
	)

	return { props: { localWeather, geoLocalization } }
}
