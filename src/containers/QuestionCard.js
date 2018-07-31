import { connect } from 'react-redux';
import { inArray } from '../utils'
import QuestionCardComponent from '../components/QuestionCardComponent'
import { actionCreators } from '../actions'

const mapStateToProps = (state, ownProps) => {
    if (!ownProps.question) {
        return {
            question: {
                text: "A question is a path; an answer is a wall.",
                category: "—Aella"
            },
            stackIsEmpty: true
        }
    }

    return {
        question: ownProps.question,
        isFavorite: inArray(state.favorites, ownProps.question.id)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClickPrev: () => dispatch(actionCreators.prevCard()),
    onClickNext: () => dispatch(actionCreators.nextCard()),
    onClickToggleFave: () => dispatch(actionCreators.toggleFave(ownProps.question.id))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionCardComponent)
