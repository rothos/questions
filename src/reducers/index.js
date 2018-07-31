import { actions } from '../actions'
import { questions, categories } from '../data/questions'
import { shuffle, arrayToggleValue } from '../utils'
import Lockr from 'lockr'

const getFilteredQuestions = (questionsArray, filtersObj) => {
    return questionsArray.filter(q => filtersObj[q.category])
}

const getStack = state => {
    var filteredQuestions = getFilteredQuestions(state.questions, state.filters)
    return shuffle(filteredQuestions)
}

const preStackState = {
    questions: questions,
    counter: 0,
    filters: Object.assign({},
        ...Object.keys(categories).map( k => ({[k]: true}) )
    ),
    favorites: Lockr.get('favorites') || []
}

const initialState = Object.assign({},
    preStackState,
    { stack: getStack(preStackState) }
)

function appReducer(state = initialState, action) {
    // Lockr.flush()

    switch (action.type) {
        case actions.NEXT_CARD:
            return Object.assign({}, state, {
                counter: (state.counter + 1) % state.stack.length
            })

        case actions.PREV_CARD:
            return Object.assign({}, state, {
                counter: (state.counter - 1 + state.stack.length) % state.stack.length
            })

        case actions.TOGGLE_FILTER:
            var newState = Object.assign({}, state)
            newState.filters[action.category] = !state.filters[action.category]
            newState.stack = getStack(newState)
            newState.counter = 0
            return newState

        case actions.TOGGLE_FAVE:
            var favorites = Lockr.get('favorites')
            Lockr.set('favorites', arrayToggleValue(favorites, action.id))
            return Object.assign({}, state, {
                favorites: Lockr.get('favorites')
            })

        default:
            return state
    }
}

export default appReducer
