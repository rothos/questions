export const actions = {
    NEXT_CARD: 'NEXT_CARD',
    TOGGLE_FILTER: 'TOGGLE_FILTER'
}

export const actionCreators = {
    nextCard: () => ({
        type: actions.NEXT_CARD
    }),
    toggleFilter: (category) => ({
        type: actions.TOGGLE_FILTER,
        category
    })
}
