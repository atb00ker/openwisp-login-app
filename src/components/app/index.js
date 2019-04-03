import { connect } from 'react-redux'
import { parseOrganizations } from '../../actions/parse-organizations'
import Component from './renderer'

function mapStateToProps(state) {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
        parseOrganizations: () => {
            dispatch(parseOrganizations())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Component);