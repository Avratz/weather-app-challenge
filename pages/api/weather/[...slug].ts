import { NextApiRequest, NextApiResponse } from 'next'
import { getWeather } from '../../../controller/weather'

export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const {
			query: { slug },
		} = req
		const data = await getWeather(slug[0], slug[1], slug[2])
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ error: err })
	}
}
