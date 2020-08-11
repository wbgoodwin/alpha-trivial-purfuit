import * as React from 'react'
import { Grid, Paper, Button } from '@material-ui/core'
import { Link as RRDLink, useRouteMatch } from 'react-router-dom'
import Nav from '../../components/Nav'
import Breadcrumbs from '../../components/Breadcrumbs'
import { CSVLink } from 'react-csv'
import {
  getQuestions, getCategories
} from '../../controllers/AdminModuleController'

const Admin = () => {
  const { url } = useRouteMatch()
  const [questions, setQuestions] = React.useState([])
  const [categories, setCategories] = React.useState([])

  React.useEffect(() => {
    async function getQuestionData() {
      const data = await getQuestions()
      setQuestions(data)
    }

    async function getCategoryData() {
      const data = await getCategories()
      setCategories(data)
    }

    getQuestionData()
    getCategoryData()
  }, [])

  const linkStyle = {
    'textDecoration': 'none',
    'color': '#000000'
  }

  return (
    <React.Fragment>
      <Nav />
      <Breadcrumbs
        links={[
          {to: '/', name: 'Home'}
        ]}
        currentPage="Administration Module"
      />

      <Grid container justify="center" alignItems="center">
        <Paper style={{
            'marginTop': '15px',
            'width': '60%'
          }}
        >
          <Grid item>
            <h1 style={{'textAlign': 'center'}}>Administration Module</h1>
          </Grid>
          <Grid
            container
            direction="column"
            spacing={2}
            justify="center"
            alignContent="center"
            alignItems="stretch"
            style={{
              'marginBottom': '50px'
            }}
          >
            <Grid item xs={4}>
              <Button variant="contained" size="large" fullWidth>
                <RRDLink
                  to={`${url}/questions`}
                  style={linkStyle}
                >
                  Manage Questions
                </RRDLink>
              </Button>
            </Grid>

            <Grid item xs={4}>
              <Button variant="contained" size="large" fullWidth>
                <RRDLink
                  to={`${url}/categories`}
                  style={linkStyle}
                >
                  Manage Categories
                </RRDLink>
              </Button>
            </Grid>

            <Grid item xs={4}>
              <Button variant="contained" size="large" fullWidth>
                <RRDLink
                  to={`${url}/questions/import`}
                  style={linkStyle}
                >
                  Import Question File
                </RRDLink>
              </Button>
            </Grid>

            <Grid item xs={4}>
              <Button variant="contained" size="large" fullWidth>
                <CSVLink
                  data={questions}
                  style={linkStyle}
                  filename={`trivial_purfuit_questions_${new Date().getTime()}.csv`}
                >
                  Export Question File
                </CSVLink>
              </Button>
            </Grid>

            <Grid item xs={4}>
              <Button variant="contained" size="large" fullWidth>
                <CSVLink
                  data={categories}
                  style={linkStyle}
                  filename={`trivial_purfuit_categories_${new Date().getTime()}.csv`}
                >
                  Export Category File
                </CSVLink>
              </Button>
            </Grid>

          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  )
}

export default Admin
