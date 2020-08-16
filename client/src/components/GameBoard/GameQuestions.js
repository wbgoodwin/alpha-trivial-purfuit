import React, { useEffect, useState } from 'react'
import {
    CardContent, CardHeader, Grid, Button, Paper, Select, MenuItem,
    InputLabel, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio
  } from '@material-ui/core'
import { getQuestion } from '../../controllers/GameLogicController'

const GameQuestions = (props) => {
    const [category, setCategory] = useState("")
    const [question, setQuestion] = useState(undefined)
    const [shuffledAnswers, setShuffledAnswers] = useState([])
    const [usersAnswer, setUsersAnswer] = useState("")
    const [answerIsCorrect, setAnswerIsCorrect] = useState(false)
    const [questionAnswered, setQuestionAnswered] = useState(false)

    useEffect(() => {
      if (question) {
        let answers = [question.correct_answer, question.incorrect_answer1,
                       question.incorrect_answer2, question.incorrect_answer3]
        setShuffledAnswers(shuffle(answers))
      }
    }, [question])

    const shuffle = (a) => {
        var j, x, i
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1))
            x = a[i]
            a[i] = a[j]
            a[j] = x
        }
        return a
    }

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
        switchPlayer()
      }
      setQuestionAnswered(true)
    }

    const switchPlayer = () => {
      props.controller.switchTurn()
    }

    const userInstructions = () => {
      return (
        <Grid container direction="row">
          <Grid item style={{'marginTop': '5px'}}>
            <strong>
              {answerIsCorrect ?
                "Correct. Roll Again!" :
                "Incorrect. Next Player's Turn"
              }
            </strong>
          </Grid>
          <Button
            color="primary"
            variant="contained"
            onClick={resetState}
            style={{
              'marginLeft': '10px'
            }}
          >
            New Question
          </Button>
        </Grid>
      )
    }

    const resetState = () => {
      setCategory("")
      setShuffledAnswers([])
      setQuestion(undefined)
      setUsersAnswer("")
      setAnswerIsCorrect(false)
      setQuestionAnswered(false)
    }

    const mapCategories = (category, index) => {
      return (
        <MenuItem key={index} value={category.getName()}>
          {`${category.getName()} (${category.getColorName()})`}
        </MenuItem>
      )
    }

    const renderAnswers = () => {
      return (
        <Grid item style={{'marginTop': '10px'}}>
          <FormControl component="fieldset">
          <FormLabel component="legend">{question.question}</FormLabel>
              <RadioGroup
                aria-label="answers"
                name="answers" value={usersAnswer}
                onChange={(event) => setUsersAnswer(event.target.value)}
              >
                {shuffledAnswers.map(mapAnswers)}
              </RadioGroup>
          </FormControl>
        </Grid>
      )
    }

    const mapAnswers = (answer, index) => {
      return (
        <FormControlLabel
          key={index}
          value={answer}
          control={<Radio />}
          label={answer}
        />
      )
    }

    return (
      <Grid item xs={11} style={{'marginBottom': '10px', 'maxWidth': '100%'}}>
        <Paper>
          <CardHeader title="Game Questions"/>
          <CardContent>
            <Grid direction="row" container>

              {!question ?
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
                      {props.categories.map(mapCategories)}
                    </Select>
                  </FormControl>
                  <Button
                    disabled={category === ""}
                    color="primary"
                    variant="contained"
                    onClick={() => getQuestionToShow(category)}
                    style={{
                      'marginLeft': '10px',
                      'marginTop': '12px'
                    }}
                  >
                      Get New Question
                  </Button>
                </Grid>
                :
                renderAnswers()
              }

              {!question ? null :
                <Grid container direction="column">
                  <Grid item>
                    {(question && questionAnswered) ?
                        userInstructions()
                        :
                        <Button
                            disabled={usersAnswer === ""}
                            color="primary"
                            variant="contained"
                            onClick={checkAnswer}
                        >
                            Check Answer
                        </Button>
                    }
                  </Grid>
                </Grid>
              }
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
    )
}

export default GameQuestions
