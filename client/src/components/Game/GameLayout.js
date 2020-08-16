import * as React from 'react'
import { Grid, Paper } from '@material-ui/core'
import GameSettings from './GameSettings'
import PlayerList from './PlayerList'
import { withGameStateContext } from '../../GameContext'
import { retrieveCategories } from '../../controllers/GameLogicController'
import Die from './Die/Die'
import GameQuestions from './GameQuestions'
import GameBoard from '../GameBoard/GameBoard'

const GameLayout = (props) => {
  const [gameSetUp, setGameSetUp] = React.useState(false)
  const [categories, setStateCategories] = React.useState([])

  React.useEffect(async () => {
    const rCategories = await retrieveCategories()
    setStateCategories(rCategories)
    props.setCategories(rCategories)
  }, [])

  function handleSetupSubmit(players) {
    props.setPlayers(players, categories)
    setGameSetUp(true)
  }

  if (!gameSetUp) {
    return (
      <Grid container style={{'marginTop': '50px'}}>
        <GameSettings handleSubmit={handleSetupSubmit} />
      </Grid>
    )
  }
  else {
    return (
      <Grid
        container
        justify="space-between"
        direction="row"
        style={{
          'marginTop': '60px',
          'marginLeft': '10px'
        }}
      >
        <Grid item xs={4}>
          <Grid container direction="column" justify="space-between">
            <Grid item style={{'marginBottom': '10px'}}>
              <PlayerList />
            </Grid>
            {(props.gameState == 'playerRoll' || props.gameState === 'playerMove') ?
              <Grid item style={{'marginBottom': '10px'}}>
                <Die />
              </Grid>
              :
              null
            }
            {
              props.gameState === 'playerQuestion' ?
              <Grid item style={{'marginBottom': '10px'}}>
                <GameQuestions categories={categories} />
              </Grid>
              : null
            }
          </Grid>
        </Grid>

        <Grid item xs={8}>
          <Paper style={{'marginLeft': '10px', 'maxWidth': '96%'}}>
            <GameBoard />
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

const mapContextToProps = (state) => ({
  setPlayers: state.actions.setPlayers,
  setCategories: state.actions.setCategories,
  gameState: state.gameState
})

export default withGameStateContext(GameLayout, mapContextToProps)
