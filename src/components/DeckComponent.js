import React from 'react'
import { categories } from '../data/questions'
import Filter from '../containers/Filter'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const DeckComponent = ({text, category, onClick}) => (
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
                <Button onClick={onClick}>Next question</Button>
            </CardActions>
        </Card>


        <Filter category={categories.GENERIC}>Generic</Filter>
        <Filter category={categories.THOUGHTFUL}>Thoughtful</Filter>

    </div>
)

export default DeckComponent
