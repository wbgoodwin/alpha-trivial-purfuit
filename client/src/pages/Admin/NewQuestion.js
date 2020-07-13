import * as React from 'react'
import QuestionForm from '../../components/Admin/QuestionForm'
import { Grid, Link, Typography } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Nav from '../../components/Nav'
import { Link as RRDLink } from 'react-router-dom'

const NewQuestion = () => {
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
        <Link style={{'cursor': 'pointer'}}>
          <RRDLink to="/" style={{'textDecoration': 'none', 'color': 'inherit'}}>
            Home
          </RRDLink>
        </Link>
        <ArrowForwardIosIcon style={{'fontSize': '14', 'marginTop': '5px'}} />
        <Link style={{'cursor': 'pointer'}}>
          <RRDLink to="/admin" style={{'textDecoration': 'none', 'color': 'inherit'}}>
            Administration Module
          </RRDLink>
        </Link>
        <ArrowForwardIosIcon style={{'fontSize': '14', 'marginTop': '5px'}} />
        <Typography>
          Add a New Question
        </Typography>
      </Grid>
      <Grid
        container
        justify="center"
        style={{'marginTop': '20px'}}
      >
        <QuestionForm newQuestion={true} />
      </Grid>
    </React.Fragment>
  )
}

export default NewQuestion
