import * as React from 'react'
import QuestionForm from '../../components/Admin/QuestionForm'
import { Grid, Link, Typography } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Nav from '../../components/Nav'
import { Link as RRDLink } from 'react-router-dom'
import { getQuestion } from '../../controllers/AdminModuleController'

class EditQuestion extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questionText: "",
      category: "",
      correctAnswer: "",
      incorrectAnswer1: "",
      incorrectAnswer2: "",
      incorrectAnswer3: ""
    }
  }

  async componentDidMount() {
    const data = await getQuestion(this.props.match.params.id)
    this.setState({
      questionText: data.question,
      category: data.category_id,
      correctAnswer: data.correct_answer,
      incorrectAnswer1: data.incorrect_answer1,
      incorrectAnswer2: data.incorrect_answer2,
      incorrectAnswer3: data.incorrect_answer3
    })
  }

  render() {
    const {
      questionText, category, correctAnswer, incorrectAnswer1,
      incorrectAnswer2, incorrectAnswer3
    } = this.state

    return (
      <React.Fragment>
        <Nav />
        <Grid
          container
          style={{
            'marginTop': '60px',
            'marginLeft': '10px',
          }}
        >
          <Link style={{'cursor': 'pointer'}} component="span">
            <RRDLink to="/" style={{'textDecoration': 'none', 'color': 'inherit'}}>
              Home
            </RRDLink>
          </Link>
          <ArrowForwardIosIcon style={{'fontSize': '14', 'marginTop': '5px'}} />
          <Link style={{'cursor': 'pointer'}} component="span">
            <RRDLink to="/admin" style={{'textDecoration': 'none', 'color': 'inherit'}}>
              Administration Module
            </RRDLink>
          </Link>
          <ArrowForwardIosIcon style={{'fontSize': '14', 'marginTop': '5px'}} />
          <Link style={{'cursor': 'pointer'}} component="span">
            <RRDLink to="/admin/questions" style={{'textDecoration': 'none', 'color': 'inherit'}}>
              Manage Questions
            </RRDLink>
          </Link>
          <ArrowForwardIosIcon style={{'fontSize': '14', 'marginTop': '5px'}} />
          <Typography>
            Edit a Question
          </Typography>
        </Grid>
        <Grid
          container
          justify="center"
          style={{'marginTop': '20px'}}
        >
          <QuestionForm
            newQuestion={false}
            questionText={questionText}
            category={category}
            correctAnswer={correctAnswer}
            incorrectAnswer1={incorrectAnswer1}
            incorrectAnswer2={incorrectAnswer2}
            incorrectAnswer3={incorrectAnswer3}
            questionID={this.props.match.params.id}
          />
        </Grid>
      </React.Fragment>
    )
  }
}

export default EditQuestion
