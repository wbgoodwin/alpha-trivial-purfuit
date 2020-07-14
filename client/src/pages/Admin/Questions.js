import * as React from 'react'
import Nav from '../../components/Nav'
import {
  Grid, Link, Typography, Table, TableBody, TableCell, TableRow, Paper,
  IconButton, Button
} from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { Link as RRDLink, withRouter } from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'

class Questions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: []
    }

    this.mapQuestions = this.mapQuestions.bind(this)
    this.deleteClick = this.deleteClick.bind(this)
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_SERVER_HOST}/questions`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          questions: data
        })
      })
  }

  deleteClick(e) {
    var id = e.target.closest('.delete-icon').id.replace('question-', '')
    console.log(id)
  }

  mapQuestions(question, index) {
    return (
      <TableRow key={index}>
        <TableCell style={{'width': '90%'}}>
          {question.question}
        </TableCell>
        <TableCell style={{'width': '5%'}}>
          <IconButton href={`/admin/questions/${question.id}`}>
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
        <Grid
          container
          style={{
            'marginTop': '60px'
          }}
          justify="space-between"
        >
          <Grid item style={{'marginLeft': '10px'}}>
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
            <Typography display="inline">
              Manage Questions
            </Typography>
          </Grid>

          <Grid item style={{'marginRight': '10px'}}>
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              href="/admin/questions/new"
            >
              Add a Question
            </Button>
          </Grid>
        </Grid>

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
