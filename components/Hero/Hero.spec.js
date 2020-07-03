import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Hero from './Hero.component'

describe('Hero', () => {
	let expectedProps

	beforeEach(() => {
		expectedProps = {
			city: 'test city',
			condition: 'sunny',
			temperature: 55,
		}
	})

	test('should render the city, condition and temperature', () => {
		const { getByText } = render(<Hero {...expectedProps} />)

		const city = getByText(expectedProps.city)
		const condition = getByText(expectedProps.condition)
		const temperature = getByText(expectedProps.temperature.toString() + '°')

		expect(city).toBeVisible()
		expect(condition).toBeVisible()
		expect(temperature).toBeVisible()
	})
})
