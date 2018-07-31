import { connect } from 'react-redux';
import DeckComponent from '../components/DeckComponent'

const mapStateToProps = (state, ownProps) => {
    var question = state.stack[state.counter]
    return {
        question: question
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckComponent)
