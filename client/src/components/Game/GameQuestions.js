import * as React from 'react'
import {
    CardContent, CardHeader, Grid, Button, Paper, Select, MenuItem,
    InputLabel, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio
  } from '@material-ui/core'
import { getQuestion } from '../../controllers/GameLogicController'
import { shuffle } from '../../utils/shuffle'
import { withGameStateContext } from '../../GameContext'

class GameQuestions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      category: "",
      question: undefined,
      shuffledAnswers: [],
      usersAnswer: "",
      answerIsCorrect: false,
      questionAnswered: false
    }

    this.getNewQuestion = this.getNewQuestion.bind(this)
    this.setCategory = this.setCategory.bind(this)
    this.mapCategories = this.mapCategories.bind(this)
    this.renderAnswers = this.renderAnswers.bind(this)
    this.mapAnswers = this.mapAnswers.bind(this)
    this.setUsersAnswer = this.setUsersAnswer.bind(this)
    this.checkAnswer = this.checkAnswer.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  async componentDidMount() {
    if (this.props.questionCategory !== null && this.props.questionCategory !== 0) {
      await this.getNewQuestion()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.questionCategory !== prevProps.questionCategory) {
      this.getNewQuestion()
    }
  }

  async getNewQuestion() {
    let question = {}

    if (this.state.category !== "") {
      const id = this.props.categories.find(c => c.categoryName === this.state.category).getId()
      question = await getQuestion(id)
    }
    else {
      question = await getQuestion(this.props.questionCategory)
    }


    let answers = [question.correct_answer, question.incorrect_answer1,
                   question.incorrect_answer2, question.incorrect_answer3]
    const shuffled = shuffle(answers)

    this.setState({
      question: question,
      shuffledAnswers: shuffled
    })
  }

  setCategory(e) {
    this.setState({
      category: e.target.value
    })
  }

  mapCategories(category, index) {
    return (
      <MenuItem key={index} value={category.getName()}>
        {`${category.getName()} (${category.getColorName()})`}
      </MenuItem>
    )
  }

  checkAnswer() {
    if (this.state.question.correct_answer === this.state.usersAnswer) {
      this.setState({
        answerIsCorrect: true,
        questionAnswered: true
      })

      setTimeout(this.props.setPlayerRollAgain, 3000)
    }
    else {
      this.setState({
        answerIsCorrect: false,
        questionAnswered: true
      })

      setTimeout(this.props.nextPlayer, 3000)
    }

    setTimeout(this.resetState, 5000)
  }

  setUsersAnswer(e) {
    this.setState({
      usersAnswer: e.target.value
    })
  }

  renderAnswers() {
    return (
      <Grid item style={{'marginTop': '10px'}}>
        <FormControl component="fieldset">
        <FormLabel component="legend">{this.state.question.question}</FormLabel>
            <RadioGroup
              aria-label="answers"
              name="answers"
              value={this.state.usersAnswer}
              onChange={this.setUsersAnswer}
            >
              {this.state.shuffledAnswers.map(this.mapAnswers)}
            </RadioGroup>
        </FormControl>
      </Grid>
    )
  }

  mapAnswers(answer, index) {
    return (
      <FormControlLabel
        key={index}
        value={answer}
        control={<Radio />}
        label={answer}
      />
    )
  }

  resetState() {
    this.setState({
      category: "",
      question: undefined,
      shuffledAnswers: [],
      usersAnswer: "",
      answerIsCorrect: false,
      questionAnswered: false
    })
  }

  render() {
    return (
      <Grid item xs={11} style={{'marginBottom': '10px', 'maxWidth': '100%'}}>
        <Paper>
          <CardHeader title="Game Questions"/>
          <CardContent>
            <Grid direction="row" container>
              {
                this.state.question ? this.renderAnswers() :
                <Grid item>
                  <FormControl>
                    <InputLabel htmlFor="category-select">Select Category</InputLabel>
                    <Select
                        id="category-select"
                        name="category"
                        value={this.state.category}
                        label="Select Category"
                        onChange={this.setCategory}
                        style={{'minWidth': '20vw'}}
                    >
                      {this.props.categories.map(this.mapCategories)}
                    </Select>
                  </FormControl>
                  <Button
                    disabled={this.state.category === ""}
                    color="primary"
                    variant="contained"
                    onClick={this.getNewQuestion}
                    style={{
                      'marginLeft': '10px',
                      'marginTop': '12px'
                    }}
                  >
                      Get New Question
                  </Button>
                </Grid>

              }

              {!this.state.question ? null :
                <Grid container direction="column">
                  <Grid item>
                    {(this.state.question && this.state.questionAnswered) ?
                        <Grid container direction="row">
                          <Grid item style={{'marginTop': '5px'}}>
                            <strong>
                              {this.state.answerIsCorrect ?
                                "Correct. Roll Again!" :
                                "Incorrect. Next Player's Turn"
                              }
                            </strong>
                          </Grid>
                        </Grid>
                        :
                        <Button
                            disabled={this.state.usersAnswer === ""}
                            color="primary"
                            variant="contained"
                            onClick={this.checkAnswer}
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
}

const mapContextToProps = (state) => ({
  setPlayerRollAgain: state.actions.setPlayerRollAgain,
  nextPlayer: state.actions.nextPlayer,
  questionCategory: state.questionCategory
})

export default withGameStateContext(GameQuestions, mapContextToProps)
