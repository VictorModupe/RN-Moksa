import { FOOD_TRUCKS_MENU_SUCCESS, FOOD_TRUCKS_MENU_LOADING } from './types'
import { setError, processException } from './errors'
import axios from 'axios'


const FOOD_TRUCKS_MENU_ENDPOINT = '/v1/gsmfoodtrucks'

export const getFoodTrucks = (selectedSort) => {
    return async (dispatch) => {
        try {
            dispatch({ type : FOOD_TRUCKS_MENU_LOADING })
            const { data } = await axios.get(`${FOOD_TRUCKS_MENU_ENDPOINT}?all_events=${selectedSort}`)
            let { results, total } = data

            setTimeout(() => {
                dispatch({ type : FOOD_TRUCKS_MENU_SUCCESS, payload :  { results, total, selectedSort } })
            }, 500);
        } catch (error) {
            const { message, status } = processException(error, dispatch)

            dispatch(setError(message))
        }
    }
}