import { PARSE_ORGANIZATIONS } from '../constants/action-types'
import config from '../config'

export const parseOrganizations = () => {
    return dispatch => {
        dispatch({
            type: PARSE_ORGANIZATIONS,
            payload: config
        })
    }
}