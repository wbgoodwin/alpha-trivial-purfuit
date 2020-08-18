import * as React from 'react'
import { AppBar, Typography, Grid, Paper } from '@material-ui/core'

const Nav = ({ children }) => {
  return (
    <AppBar

      style={{
        'marginBottom': '50px',
        'backgroundImage': 'url(flag.jpg)',
        'paddingBottom': '10px'
      }}
    >
      <Grid container justify="space-between" direction="row">
        <Paper style={{'marginLeft': '10px', 'height': '35px', 'marginTop': '7px'}}>
          <Typography
            variant="h5"
            gutterBottom
            style={{
              'marginLeft': '5px',
              'marginTop': '3px',
              'marginRight': '5px',
              'marginBottom': '10px',
              'verticalAlign': 'center'
            }}
          >
            Trivial Purfuit
          </Typography>
        </Paper>
        {children}
      </Grid>
    </AppBar>
  )
}

export default Nav
