import * as React from 'react'
import QuestionForm from '../../components/Admin/QuestionForm'
import { Grid } from '@material-ui/core'
import Nav from '../../components/Nav'
import { getQuestion } from '../../controllers/AdminModuleController'
import Breadcrumbs from '../../components/Breadcrumbs'

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
        <Breadcrumbs
          links={[
            {to: '/', name: 'Home'},
            {to: '/admin', name: 'Administration Module'},
            {to: '/admin/questions', name: 'Manage Questions'}
          ]}
          currentPage='Edit a Question'
        />

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
