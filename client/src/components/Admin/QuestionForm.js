import * as React from 'react'
import {
  CardContent, CardHeader, Grid, Button, TextField, Paper
} from '@material-ui/core'

class QuestionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      allEntered: false,
      questionText: "",
      correctAnswer: "",
      incorrectAnswer1: "",
      incorrectAnswer2: "",
      incorrectAnswer3: ""
    }

    this.textChange = this.textChange.bind(this)
    this.getAllEntered = this.getAllEntered.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidLoad() {
    if (!this.props.newQuestion) {
      this.setState({
        questionText: this.props.questionText,
        correctAnswer: this.props.correctAnswer,
        incorrectAnswer1: this.props.incorrectAnswer1,
        incorrectAnswer2: this.props.incorrectAnswer2,
        incorrectAnswer3: this.props.incorrectAnswer3,
        allEntered: true
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.questionText !== prevState.questionText ||
      this.state.correctAnswer !== prevState.correctAnswer ||
      this.state.incorrectAnswer1 !== prevState.incorrectAnswer1 ||
      this.state.incorrectAnswer2 !== prevState.incorrectAnswer2 ||
      this.state.incorrectAnswer3 !== prevState.incorrectAnswer3
    ) {
      this.setState({
        allEntered: this.getAllEntered()
      })
    }
  }

  textChange(e) {
    var target = e.target.id
    var text = e.target.value

    switch(target) {
      case 'question-text': {
        this.setState({
          questionText: text
        })
        break
      }
      case 'correct-answer': {
        this.setState({
          correctAnswer: text
        })
        break
      }
      case 'incorrect-answer-1': {
        this.setState({
          incorrectAnswer1: text
        })
        break
      }
      case 'incorrect-answer-2': {
        this.setState({
          incorrectAnswer2: text
        })
        break
      }
      case 'incorrect-answer-3': {
        this.setState({
          incorrectAnswer3: text
        })
        break
      }
      default:
        break
    }
  }

  getAllEntered() {
    const {
      questionText, correctAnswer, incorrectAnswer1, incorrectAnswer2,
      incorrectAnswer3
    } = this.state

    return questionText && correctAnswer && incorrectAnswer1 &&
           incorrectAnswer2 && incorrectAnswer3
  }

  submit() {
    console.log("here")
  }

  render() {
    const {
      allEntered, questionText, correctAnswer, incorrectAnswer1,
      incorrectAnswer2, incorrectAnswer3
    } = this.state

    return (
      <Grid item xs={11} style={{'marginBottom': '10px'}}>
        <Paper>
          <CardHeader title={this.props.newQuestion ? "Add Question" : "Edit Question"} />
          <CardContent>
            <Grid direction="column" container>
              <Grid item>
                <TextField id="question-text"
                  margin="normal"
                  fullWidth
                  label="Question Text"
                  variant="outlined"
                  value={questionText}
                  required
                  onChange={this.textChange}
                />
              </Grid>

              <Grid item>
                <TextField id="correct-answer"
                  margin="normal"
                  fullWidth
                  label="Correct Answer"
                  variant="outlined"
                  value={correctAnswer}
                  required
                  onChange={this.textChange}
                />
              </Grid>

              <Grid item>
                <TextField id="incorrect-answer-1"
                  margin="normal"
                  fullWidth
                  label="Incorrect Answer 1"
                  variant="outlined"
                  value={incorrectAnswer1}
                  required
                  onChange={this.textChange}
                />
              </Grid>

              <Grid item>
                <TextField id="incorrect-answer-2"
                  margin="normal"
                  fullWidth
                  label="Incorrect Answer 2"
                  variant="outlined"
                  value={incorrectAnswer2}
                  required
                  onChange={this.textChange}
                />
              </Grid>

              <Grid item>
                <TextField id="incorrect-answer-3"
                  margin="normal"
                  fullWidth
                  label="Incorrect Answer 3"
                  variant="outlined"
                  value={incorrectAnswer3}
                  required
                  onChange={this.textChange}
                />
              </Grid>
            </Grid>

            <Button
              disabled={!allEntered}
              color="primary"
              variant="contained"
              onClick={this.submit}
            >
              Save
            </Button>
          </CardContent>
        </ Paper>
      </Grid>
    )
  }

}

export default QuestionForm
