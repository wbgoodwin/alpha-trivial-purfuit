import * as React from 'react'
import { Grid, Link, Typography } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { Link as RRDLink } from 'react-router-dom'


const Breadcrumbs = ({ links, currentPage, children }) => {
  function renderLink(link, index) {
    return (
      <React.Fragment key={index}>
        <Link style={{'cursor': 'pointer'}} component="span">
          <RRDLink
            to={link.to}
            style={{
              'textDecoration': 'none',
              'color': 'inherit'
            }}
          >
            {link.name}
          </RRDLink>
        </Link>
        <ArrowForwardIosIcon style={{'fontSize': '14', 'marginTop': '5px'}} />
      </React.Fragment>
    )
  }

  return (
    <Grid
      container
      style={{
        'marginTop': '60px',
        'marginLeft': '10px',
      }}
      justify="space-between"
    >
      <Grid item style={{'marginLeft': '10px'}}>
        {links.map(renderLink)}
        <Typography display="inline">
          {currentPage}
        </Typography>
      </Grid>
      {children}
    </Grid>
  )
}

export default Breadcrumbs
