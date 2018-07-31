import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ReplyIcon from '@material-ui/icons/Reply'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'

const styles = {
    quote: {
        fontStyle: "italic"
    },
    question: {
    }
}

const QuestionCardComponent = (props) => {

    function stopProp(eventFunction) {
        return (e) => {
            e.stopPropagation()
            eventFunction()
        }
    }

    const {
            question, stackIsEmpty=false, isFavorite,
            onClickPrev, onClickNext, onClickToggleFave,
            classes
        } = props

    const starFavoriteClass = "star-" + (isFavorite ? 'favorite' : 'not-favorite')

    return (
        <div>
            <Card
                onClick={onClickNext}
                style={{
                    padding: "1em .7em 1.2em",
                    cursor: "pointer"
                }}
            >
                <CardContent>
                    <span className={`star ${starFavoriteClass}`}
                        style={{
                            float:"right",
                            padding: ".5em",
                            margin: "-.5em -.5em auto auto"
                        }}
                        onClick={stopProp(onClickToggleFave)}
                    >
                        {
                            isFavorite ?
                                <StarIcon/> :
                                <StarBorderIcon/>
                        }
                    </span>
                    <Typography
                        paragraph={true}
                        component="p"
                        style={{ minHeight: "8em", paddingRight: "4em" }}
                        className={stackIsEmpty ? classes.quote : classes.question}
                        color={stackIsEmpty ? "textSecondary" : "default"}
                    >
                        {question.text}
                    </Typography>
                </CardContent>
                <CardActions
                    align="end"
                    style={{ width: '100%' }}
                >
                    <div style={{ flex: "1 1 auto" }}></div>
                    <Typography
                        component="div"
                        style={{ marginTop: "auto", paddingRight: ".2em" }}
                        color="textSecondary"
                    >
                        {question.category}
                    </Typography>
                </CardActions>
            </Card>
            <Button
                onClick={stopProp(onClickPrev)}
                variant="fab"
                style={{ marginTop: "-9.5em", marginLeft: "2em" }}
            >
                <ReplyIcon/>
            </Button>
        </div>
    )
}

export default withStyles(styles)(QuestionCardComponent)
