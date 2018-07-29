import React from 'react'
import { categories } from '../data/questions'
import { toProperCase } from '../utils'
import Filter from '../containers/Filter'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ForwardIcon from '@material-ui/icons/Forward';
import ReplyIcon from '@material-ui/icons/Reply';

const styles = {
    quote: {
        fontStyle: "italic"
    },
    question: {
    }
}


const DeckComponent = (props) => {

    const { text, category, stackIsEmpty=false, onClickPrev, onClickNext, classes } = props

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

            <Card
                style={{ padding: '1em .7em .7em' }}
            >
                <CardContent>
                    <Typography
                        paragraph={true}
                        component="p"
                        style={{ minHeight: "6em" }}
                        className={stackIsEmpty ? classes.quote : classes.question}
                        color={stackIsEmpty ? "textSecondary" : "default"}
                    >
                        {text}
                    </Typography>
                    <Typography align="right" color="textSecondary">
                        {category}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={onClickPrev}
                    >
                        <ReplyIcon style={{marginRight:"0.3em"}}/>
                        Previous card
                    </Button>
                    <Button
                        color="primary"
                        onClick={onClickNext}
                    >
                        Next card
                        <ForwardIcon style={{marginLeft:"0.3em"}}/>
                    </Button>
                </CardActions>
            </Card>

        </div>
    )
}

export default withStyles(styles)(DeckComponent)
