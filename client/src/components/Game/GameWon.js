import * as React from 'react'
import { Link} from 'react-router-dom'
import { withGameStateContext } from '../../GameContext'
import { Paper, Button, Grid } from '@material-ui/core'

const linkStyle = {
  'textDecoration': 'none',
  'color': '#000000'
}

const GameWon = (props) => {
  return (
    <Paper style={{'marginTop': '70px', 'width': '50%'}}>
      <Grid item style={{'textAlign': 'center'}}>
        <h1>
          {`Congratulations ${props.currentPlayer.getName()}! You won the game!`}
        </h1>
        <h3>Would you like to play again?</h3>
        <Grid
          container
          direction="row"
          justify="center"
          style={{'marginBottom': '30px'}}
        >
          <Button
            color="primary"
            variant="contained"
            style={{'marginRight': '10px'}}
            onClick={props.startNewGame}
          >
            Play again
          </Button>
          <Button
            variant="contained"
          >
            <Link to="/" style={linkStyle}>
              Return Home
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

const mapContextToProps = (state) => ({
  currentPlayer: state.currentPlayer,
  startNewGame: state.actions.startNewGame
})

export default withGameStateContext(GameWon, mapContextToProps)
