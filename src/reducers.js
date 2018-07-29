import { actions, categories } from './Deck'
import { questions } from './questions';
import { shuffle } from './utils'


const getFilteredQuestions = (questionsArray, filtersObj) => {
    return questionsArray.filter(q => filtersObj[q.category])
}

const getStack = state => {
    var filteredQuestions = getFilteredQuestions(state.questions, state.filters)
    return shuffle(filteredQuestions)
}

const initialFiltersState = Object.assign({},
    ...Object.keys(categories).map(
        k => ({[k]: true})
    )
)

const preStackState = {
    questions: questions,
    counter: 0,
    filters: initialFiltersState
}
const initialState = Object.assign({},
    preStackState,
    { stack: getStack(preStackState) }
)

function deck(state = initialState, action) {
    switch (action.type) {
        case actions.NEXT_CARD:
            return Object.assign({}, state, {
                counter: (state.counter + 1) % state.stack.length
            })
        case actions.TOGGLE_FILTER:
            var newState = Object.assign({}, state)
            newState.filters[action.category] = !state.filters[action.category]
            newState.stack = getStack(newState)
            newState.counter = 0
            return newState
        default:
            return state
    }
}

export default deck
