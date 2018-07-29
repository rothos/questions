export const actions = {
    NEXT_CARD: 'NEXT_CARD',
    PREV_CARD: 'PREV_CARD',
    TOGGLE_FILTER: 'TOGGLE_FILTER'
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
    })
}
