import { type } from '../actions'
export const WeatherReducer = (state, action) => {
	switch (action.type) {
		case type.GET_CURRENT_WEATHER:
			return { ...state, currentWeather: action.payload }
		case type.GET_HOURLY_WEATHER:
			return { ...state, hourlyWeather: action.payload }
		case type.SEVEN_DAYS_WEATHER:
			return { ...state, sevenDaysWeather: action.payload }
		case type.ADD_CITY:
			if (
				!state.citiesList.find((city) => {
					return city.name === action.payload.name
				})
			) {
				return {
					...state,
					citiesList: [...state.citiesList, action.payload],
				}
			}
			return { ...state }
		case type.LOADING:
			return { ...state, loading: true }
		case type.LOADED:
			return { ...state, loading: false }
		default:
			return { ...state }
	}
}
