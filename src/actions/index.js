export const actions = {
    NEXT_CARD: 'NEXT_CARD',
    PREV_CARD: 'PREV_CARD',
    TOGGLE_FILTER: 'TOGGLE_FILTER',
    TOGGLE_FAVE: 'TOGGLE_FAVE'
}

export const actionCreators = {
    nextCard: () => ({
        type: actions.NEXT_CARD
    }),
    prevCard: () => ({
        type: actions.PREV_CARD
    }),
    toggleFilter: (category) => ({
        type: actions.TOGGLE_FILTER,
        category
    }),
    toggleFave: (id) => ({
        type: actions.TOGGLE_FAVE,
        id
    })
}
