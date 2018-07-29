import { connect } from 'react-redux';
import FilterComponent from '../components/FilterComponent'
import { actionCreators } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filters[ownProps.category]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: () => dispatch(actionCreators.toggleFilter(ownProps.category))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterComponent)
