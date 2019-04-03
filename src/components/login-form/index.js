import { connect } from 'react-redux'
import { setOrganization } from '../../actions/set-organization'
import { login } from '../../actions/login'
import Component from './renderer'

function mapStateToProps(state) {
    return {
        organizations: state.organizations,
        organization: state.organization
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setOrganization: (slug, organizations) => {
            dispatch(setOrganization(slug, organizations))
        },
        login: (url, data) => {
            dispatch(login(url, data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Component);