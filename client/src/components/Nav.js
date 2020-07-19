import * as React from 'react'
import { AppBar, Typography } from '@material-ui/core'

const Nav = ({ children }) => {
  return (
    <AppBar color="primary" style={{'marginBottom': '50px'}}>
      <Typography
        variant="h5"
        gutterBottom
        style={{'marginLeft': '10px', 'marginTop': '10px'}}
      >
        Trivial Purfuit
      </Typography>
      {children}
    </AppBar>
  )
}

export default Nav
