import React from 'react';
import { connect } from 'react-redux';


//-- ACTIONS

export const actions = {
    NEXT_CARD: 'NEXT_CARD',
    TOGGLE_FILTER: 'TOGGLE_FILTER'
}

const actionCreators = {
    nextCard: () => ({
        type: actions.NEXT_CARD
    }),
    toggleFilter: (category) => ({
        type: actions.TOGGLE_FILTER,
        category
    })
}


//-- COMPONENTS & CONTAINERS

export const categories = {
    GENERIC: 'GENERIC',
    THOUGHTFUL: 'THOUGHTFUL',
    SEXY: 'SEXY',
    EDGY: 'EDGY',
    SAD: 'SAD'
}

const FilterComponent = ({active, children, onClick}) => {
    return (
        <span onClick={onClick} class={active ? "active" : ""}>
            {children}
        </span>
    )
}
const filter_mapStateToProps = (state, ownProps) => {
    return {
        active: state.filters[ownProps.category]
    }
}

const filter_mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(actionCreators.toggleFilter(ownProps.category))
})

export const Filter = connect(
    filter_mapStateToProps,
    filter_mapDispatchToProps
)(FilterComponent)




const DeckComponent = ({text, category, onClick}) => (
    <div>
        <p style={{
            border:'1px solid #aaa',
            padding: '1em',
            margin: '1em'
        }}>
            {text}
        </p>
        <p>
            Category: {category}
        </p>
        <button onClick={onClick}>Next question</button>
        <ul>
            <li><Filter category={categories.GENERIC}>Generic</Filter></li>
            <li><Filter category={categories.THOUGHTFUL}>Thoughtful</Filter></li>
        </ul>
    </div>
)

const mapStateToProps = (state, ownProps) => {
    if (!state.stack.length) {
        return {
            text: "no questions found",
            category: "---"
        }
    }

    var question = state.stack[state.counter]
    return {
        text: question.text,
        category: question.category
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(actionCreators.nextCard())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckComponent)
