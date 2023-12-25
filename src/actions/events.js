import { EVENTS_MENU_SUCCESS, EVENTS_MENU_LOADING } from './types'
import { setError, processException } from './errors'
import axios from 'axios'


const EVENTS_MENU_ENDPOINT = '/v1/gsmevents?calendar_id=1&active=1'

export const getEvents = () => {
    return async (dispatch) => {
        try {
            dispatch({ type : EVENTS_MENU_LOADING })
            const { data } = await axios.get(EVENTS_MENU_ENDPOINT)
            let { results, total } = data

            setTimeout(() => {
                dispatch({ type : EVENTS_MENU_SUCCESS, payload :  { results, total } })
            }, 500);
        } catch (error) {
            const { message, status } = processException(error, dispatch)

            dispatch(setError(message))
        }
    }
}