import { RESTAURANTS_MENU_SUCCESS, RESTAURANTS_MENU_LOADING } from './types'
import { setError, processException } from './errors'
import axios from 'axios'


const RESTAURANTS_MENU_ENDPOINT = '/v1/gsmrestaurants'

export const getRestaurants = () => {
    return async (dispatch) => {
        try {
            dispatch({ type : RESTAURANTS_MENU_LOADING })
            const { data } = await axios.get(RESTAURANTS_MENU_ENDPOINT)
            let { results, total } = data

            setTimeout(() => {
                dispatch({ type : RESTAURANTS_MENU_SUCCESS, payload :  { results, total } })
            }, 500);
        } catch (error) {
            const { message, status } = processException(error, dispatch)

            dispatch(setError(message))
        }
    }
}