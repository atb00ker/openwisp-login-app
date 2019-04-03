
import { combineReducers } from 'redux'
import parseOrganizations from './parse-organizations'
import setOrganization from './set-organization'

const rootReducer = combineReducers({
    organizations: parseOrganizations,
    organization: setOrganization
})
export default rootReducer;