import * as React from 'react'
import Nav from '../../components/Nav'
import CategoryForm from '../../components/Admin/CategoryForm'
import Breadcrumbs from '../../components/Breadcrumbs'
import { Grid } from '@material-ui/core'

const Categories = () => {
  return (
    <React.Fragment>
      <Nav />
      <Breadcrumbs
        links={[
          {to: '/', name: 'Home'},
          {to: '/admin', name: 'Administration Module'}
        ]}
        currentPage="Manage Categories"
      />
      <Grid container justify="center" style={{'marginTop': '10px'}}>
        <CategoryForm />
      </Grid>
    </React.Fragment>
  )
}

export default Categories
