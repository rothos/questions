import React from 'react'
import { categories } from '../data/questions'
import { toProperCase } from '../utils'
import Filter from '../containers/Filter'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ReplyIcon from '@material-ui/icons/Reply'

const styles = {
    quote: {
        fontStyle: "italic"
    },
    question: {
    }
}


const DeckComponent = (props) => {

    function stopProp(eventFunction) {
        return (e) => {
            e.stopPropagation()
            eventFunction()
        }
    }

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
                onClick={onClickNext}
                style={{
                    padding: "1em .7em 1.2em",
                    cursor: "pointer"
                }}
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
                </CardContent>
                <CardActions align="end" style={{ width: '100%' }}>
                    <Button
                        onClick={stopProp(onClickPrev)}
                        variant="fab"
                    >
                        <ReplyIcon/>
                    </Button>
                    <div style={{ flex: "1 1 auto" }}></div>
                    <Typography component="div" style={{ marginTop: "auto" }} color="textSecondary">
                        {category}
                    </Typography>
                </CardActions>
            </Card>
        </div>
    )
}

export default withStyles(styles)(DeckComponent)
