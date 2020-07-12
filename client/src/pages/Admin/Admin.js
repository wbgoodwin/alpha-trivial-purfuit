import * as React from 'react'
import QuestionForm from '../../components/Admin/QuestionForm'
import { Grid } from '@material-ui/core'

const Admin = () => {
  return (
    <Grid container justify="center">
      <QuestionForm newQuestion={true} />
    </Grid>
  )
}

export default Admin
