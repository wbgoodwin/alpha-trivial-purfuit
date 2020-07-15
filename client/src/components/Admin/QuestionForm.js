import * as React from 'react'
import {
  CardContent, CardHeader, Grid, Button, TextField, Paper, Select, MenuItem,
  InputLabel, FormControl
} from '@material-ui/core'
import { Redirect } from 'react-router-dom'

class QuestionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
      allEntered: false,
      questionText: "",
      category: "",
      correctAnswer: "",
      incorrectAnswer1: "",
      incorrectAnswer2: "",
      incorrectAnswer3: "",
      redirect: false
    }

    this.textChange = this.textChange.bind(this)
    this.getAllEntered = this.getAllEntered.bind(this)
    this.submit = this.submit.bind(this)
    this.mapCategories = this.mapCategories.bind(this)
    this.categoryChange = this.categoryChange.bind(this)
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/categories`)
      .then(response => response.json())
      .then(data => {
        if (!this.props.newQuestion) {
          this.setState({
            categories: data,
            questionText: this.props.questionText,
            correctAnswer: this.props.correctAnswer,
            incorrectAnswer1: this.props.incorrectAnswer1,
            incorrectAnswer2: this.props.incorrectAnswer2,
            incorrectAnswer3: this.props.incorrectAnswer3,
            allEntered: true
          })
        }
        else {
          this.setState({
            categories: data
          })
        }
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.questionText !== prevProps.questionText) {
      this.setState({
        questionText: this.props.questionText,
        correctAnswer: this.props.correctAnswer,
        incorrectAnswer1: this.props.incorrectAnswer1,
        incorrectAnswer2: this.props.incorrectAnswer2,
        incorrectAnswer3: this.props.incorrectAnswer3,
        category: this.props.category,
        allEntered: true
      })
    }

    if (this.state.questionText !== prevState.questionText ||
      this.state.correctAnswer !== prevState.correctAnswer ||
      this.state.incorrectAnswer1 !== prevState.incorrectAnswer1 ||
      this.state.incorrectAnswer2 !== prevState.incorrectAnswer2 ||
      this.state.incorrectAnswer3 !== prevState.incorrectAnswer3 ||
      this.state.category !== prevState.category
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
      incorrectAnswer3, category
    } = this.state

    return questionText && correctAnswer && incorrectAnswer1 &&
           incorrectAnswer2 && incorrectAnswer3 && category
  }

  submit() {
    const {
      questionText, correctAnswer, incorrectAnswer1, incorrectAnswer2,
      incorrectAnswer3, category
    } = this.state

    if (this.props.newQuestion) {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            categoryID: category,
            question: questionText,
            correctAnswer: correctAnswer,
            incorrectAnswer1: incorrectAnswer1,
            incorrectAnswer2: incorrectAnswer2,
            incorrectAnswer3: incorrectAnswer3
          })
      }

      fetch(`${process.env.REACT_APP_SERVER_HOST}/newQuestion`, requestOptions)
        .then(response =>
          this.setState({
            redirect: true
          })
        )
    }
    else {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            questionID: this.props.questionID,
            categoryID: category,
            question: questionText,
            correctAnswer: correctAnswer,
            incorrectAnswer1: incorrectAnswer1,
            incorrectAnswer2: incorrectAnswer2,
            incorrectAnswer3: incorrectAnswer3
          })
      }

      fetch(`${process.env.REACT_APP_SERVER_HOST}/editQuestion`, requestOptions)
        .then(response =>
          this.setState({
            redirect: true
          })
        )
        .catch(err => console.log(err))
    }
  }

  mapCategories(category, index) {
    return (
      <MenuItem key={index} value={category.id}>
        {category.name}
      </MenuItem>
    )
  }

  categoryChange(e) {
    var target = e.target.value

    this.setState({
      category: target
    })
  }

  render() {
    const {
      allEntered, questionText, correctAnswer, incorrectAnswer1,
      incorrectAnswer2, incorrectAnswer3, categories, category, redirect
    } = this.state

    if (redirect) {
      return <Redirect to="/admin/questions" />
    }

    return (
      <Grid item xs={11} style={{'marginBottom': '10px'}}>
        <Paper>
          <CardHeader title={this.props.newQuestion ? "Add Question" : "Edit Question"} />
          <CardContent>
            <Grid direction="column" container>
              <Grid item>
                <FormControl>
                  <InputLabel htmlFor="category-select">Category</InputLabel>
                  <Select
                    id="category-select"
                    name="category"
                    value={category}
                    label="Category"
                    onChange={this.categoryChange}
                    style={{'minWidth': '20vw'}}
                  >
                    {categories.map(this.mapCategories)}
                  </Select>
                </FormControl>
              </Grid>

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
