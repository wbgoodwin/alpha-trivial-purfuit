import * as React from 'react'
import QuestionForm from '../../components/Admin/QuestionForm'
import { Grid } from '@material-ui/core'
import Nav from '../../components/Nav'
import Breadcrumbs from '../../components/Breadcrumbs'

const NewQuestion = () => {
  return (
    <React.Fragment>
      <Nav />
      <Breadcrumbs
        links={[
          {to: '/', name: 'Home'},
          {to: '/admin', name: 'Administration Module'},
          {to: '/admin/questions', name: 'Manage Questions'}
        ]}
        currentPage='Add a Question'
      />

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
