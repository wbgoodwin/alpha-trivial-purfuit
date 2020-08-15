import React, { useState, useEffect } from 'react'
import {
    CardContent, CardHeader, Grid, Button, TextField, Paper, Select, MenuItem,
    InputLabel, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio
  } from '@material-ui/core'
import { getQuestion } from '../controllers/GameLogicController'
import { colorMapping } from '../colors'


const GameQuestions = (props) => {
    const [category, setCategory] = useState("")
    const [question, setQuestion] = useState({})
    const [usersAnswer, setUsersAnswer] = useState("")
    const [answerIsCorrect, setAnswerIsCorrect] = useState(false)
    const [questionAnswered, setQuestionAnswered] = useState(false)


    const getQuestionToShow = async (categoryName) => {
      const category = props.categories.find(c => c.getName() === categoryName)
      let questionAnswersSet = await getQuestion(category.getId());
      setQuestion(questionAnswersSet);
      setQuestionAnswered(false)
      setUsersAnswer("")
    }

    const checkAnswer = () => {
        if (question.correct_answer === usersAnswer) {
            setAnswerIsCorrect(true)
        }
        else {
            setAnswerIsCorrect(false)
        }
        setQuestionAnswered(true)
    }

    const userInstructions = () => {
        if (answerIsCorrect) {
            return<div>Correct. Roll Again!</div>
        }
        return<div>Incorrect. Next Player's Turn</div>
    }

    const getColor = (color) => {
      for (let c in colorMapping) {
        if (colorMapping[c] === color) {
          return c
        }
      }
    }


    return (
        <div>
            <Grid item xs={11} style={{'marginBottom': '10px'}}>
                <Paper>
                <CardHeader title="Game Questions"/>
                <CardContent>
                    <Grid direction="column" container>
                    <Grid item>
                        <FormControl>
                        <InputLabel htmlFor="category-select">Select Category</InputLabel>
                        <Select
                            id="category-select"
                            name="category"
                            value={category}
                            label="Select Category"
                            onChange={(e) => setCategory(e.target.value)}
                            style={{'minWidth': '20vw'}}
                        >
                            {props.categories === undefined ? null : props.categories.map(cat =>
                                <MenuItem key={cat.getName()} value={cat.getName()}>
                                {cat.getName() + " (" + getColor(cat.getColor()) + ")"}
                                </MenuItem>
                                )}
                        </Select>
                        </FormControl>
                                &nbsp;
                                &nbsp;
                        <Button
                            disabled={category === ""}
                            color="primary"
                            variant="contained"
                            onClick={() => getQuestionToShow(category)}
                            >
                            Get New Question
                        </Button>
                    </Grid>

                    {Object.keys(question).length === 0 && question.constructor === Object ?
                        null
                    :
                        <div>
                            <br/>
                            <Grid item>
                                <FormControl component="fieldset">
                                <FormLabel component="legend">{question.question}</FormLabel>
                                    <RadioGroup aria-label="answers" name="answers" value={usersAnswer} onChange={(event) => setUsersAnswer(event.target.value)}>
                                        <FormControlLabel value={question.correct_answer} control={<Radio />} label={question.correct_answer} />
                                        <FormControlLabel value={question.incorrect_answer1} control={<Radio />} label={question.incorrect_answer1} />
                                        <FormControlLabel value={question.incorrect_answer2} control={<Radio />} label={question.incorrect_answer2} />
                                        <FormControlLabel value={question.incorrect_answer3} control={<Radio />} label={question.incorrect_answer3} />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <div>
                                {questionAnswered ?
                                    userInstructions()
                                 :
                                <Button
                                    disabled={usersAnswer === ""}
                                    color="primary"
                                    variant="contained"
                                    onClick={() => checkAnswer()}
                                >
                                    Check Answer
                                </Button>
                                }

                            </div>

                        </div>
                    }

                    </Grid>
                </CardContent>
                </ Paper>
            </Grid>
        </div>
    )
}

export default GameQuestions
