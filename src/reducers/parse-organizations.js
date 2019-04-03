
import { PARSE_ORGANIZATIONS } from '../constants/action-types'

const parseOrganizations = (state = [], action) => {
    switch (action.type) {
        case PARSE_ORGANIZATIONS:
            return action.payload
        default:
            return state
    }
}
export default parseOrganizations;