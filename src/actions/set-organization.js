import { SET_ORGANIZATION } from '../constants/action-types'

export const setOrganization = (slug, organizations) => {
    let organization = {}
    organizations.map(org => {
        if (org.slug === slug) {
            organization = org
            return
        }
    })
    return dispatch => {
        dispatch({
            type: SET_ORGANIZATION,
            payload: organization
        })
    }
}