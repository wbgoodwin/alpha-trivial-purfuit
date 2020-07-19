import * as React from 'react'
import { Grid, Paper, Button } from '@material-ui/core'
import { Link as RRDLink, useRouteMatch } from 'react-router-dom'
import Nav from '../../components/Nav'
import Breadcrumbs from '../../components/Breadcrumbs'

const Admin = () => {
  const { url } = useRouteMatch()

  const linkStyle = {
    'textDecoration': 'none',
    'color': '#000000'
  }

  function importClick() {
    console.log("Clicked import")
  }

  function exportClick() {
    console.log("Clicked export")
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
              <Button variant="contained" size="large" onClick={importClick} fullWidth>
                Import Question File
              </Button>
            </Grid>

            <Grid item xs={4}>
              <Button variant="contained" size="large" onClick={exportClick} fullWidth>
                Export Question File
              </Button>
            </Grid>

          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  )
}

export default Admin
