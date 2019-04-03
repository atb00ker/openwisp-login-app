import { connect } from 'react-redux'
import Component from './renderer'

function mapStateToProps(state) {
    return {
        organization: state.organization,
        organizations: state.organizations
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Component);