import React from 'react'
import { categories } from '../data/questions'
import Filter from '../containers/Filter'

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

export default DeckComponent
