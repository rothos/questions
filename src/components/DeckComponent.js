import React from 'react'
import { categories } from '../data/questions'
import { toProperCase } from '../utils'
import Filter from '../containers/Filter'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const DeckComponent = ({text, category, onClickPrev, onClickNext}) => {

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography component="p">
                        {text}
                    </Typography>
                    <Typography color="textSecondary">
                        {category}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={onClickPrev}>Previous card</Button>
                    <Button onClick={onClickNext}>Next question</Button>
                </CardActions>
            </Card>

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

        </div>
    )
}

export default DeckComponent
