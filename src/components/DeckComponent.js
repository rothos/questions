import React from 'react'
import { categories } from '../data/questions'
import { toProperCase } from '../utils'
import Filter from '../containers/Filter'
import QuestionCard from '../containers/QuestionCard'

const DeckComponent = ({ question }) => {

    return (
        <div>

            {
                [...Array(Object.keys(categories).length)].map((x, i) =>
                    <Filter
                        category={Object.keys(categories)[i]}
                        key={i}
                    >
                        {toProperCase(Object.keys(categories)[i])}
                    </Filter>
                )
            }

            <QuestionCard question={question}/>

        </div>
    )
}

export default DeckComponent
