import * as React from 'react'
import Nav from '../../components/Nav'
import {
  Grid, Table, TableBody, TableCell, TableRow, Paper, IconButton, Button
} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import {
  postDeleteQuestion, getQuestions
} from '../../controllers/AdminModuleController'
import Breadcrumbs from '../../components/Breadcrumbs'

class Questions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: []
    }

    this.mapQuestions = this.mapQuestions.bind(this)
    this.deleteClick = this.deleteClick.bind(this)
  }

  async componentDidMount() {
    const data = await getQuestions()
    this.setState({
      questions: data
    })
  }

  async deleteClick(e) {
    var id = e.target.closest('.delete-icon').id.replace('question-', '')
    const res = await postDeleteQuestion(id)

    if (res) {
      const { questions } = this.state
      let newQuestions = [...questions]
      newQuestions = newQuestions.filter(q => q.id.toString() !== id)
      this.setState({
        questions: newQuestions
      })
    }
  }

  mapQuestions(question, index) {
    return (
      <TableRow key={index}>
        <TableCell style={{'width': '90%'}}>
          {question.question}
        </TableCell>
        <TableCell style={{'width': '5%'}}>
          <IconButton href={`/admin/questions/edit/${question.id}`}>
            <EditIcon style={{'cursor': 'pointer'}} />
          </IconButton>
        </TableCell>
        <TableCell style={{'width': '5%'}}>
          <IconButton
            onClick={this.deleteClick}
            className="delete-icon"
            id={`question-${question.id}`}
          >
            <DeleteIcon style={{'cursor': 'pointer'}} />
          </IconButton>
        </TableCell>
      </TableRow>
    )
  }

  render() {
    const { questions } = this.state

    return (
      <React.Fragment>
        <Nav />
        <Breadcrumbs
          links={[
            {to: '/', name: 'Home'},
            {to: '/admin', name: 'Administration Module'}
          ]}
          currentPage='Manage Questions'
        >
          <Grid item style={{'marginRight': '20px'}}>
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              href="/admin/questions/new"
            >
              Add a Question
            </Button>
          </Grid>
        </Breadcrumbs>

        <Grid container justify="center" style={{'marginTop': '20px'}}>
          <Paper style={{'width': '80%'}}>
            <Table>
              <TableBody>
                {questions.map(this.mapQuestions)}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </React.Fragment>
    )
  }
}

export default withRouter(Questions)
