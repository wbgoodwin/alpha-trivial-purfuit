import * as React from 'react'
import { Grid, Paper } from '@material-ui/core'
import GameSettings from './GameSettings'
import PlayerList from './PlayerList'
import { withGameStateContext } from '../../GameContext'
import { retrieveCategories } from '../../controllers/GameLogicController'
import Die from './Die/Die'
import GameQuestions from './GameQuestions'
import GameBoard from '../GameBoard/GameBoard'
import GameWon from './GameWon'

class GameLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: []
    }

    this.handleSetupSubmit = this.handleSetupSubmit.bind(this)
  }

  async componentDidMount() {
    const rCategories = await retrieveCategories()
    this.setState({
      categories: rCategories
    })
    this.props.setCategories(rCategories)
  }

  handleSetupSubmit(players) {
    this.props.setPlayers(players, this.state.categories)
  }

  render() {
    if (this.props.gameState === 'setup') {
      return (
        <Grid container style={{'marginTop': '50px'}}>
          <GameSettings handleSubmit={this.handleSetupSubmit} />
        </Grid>
      )
    }
    else if (this.props.gameState === 'playerWon') {
      return (
        <Grid container justify="center" style={{'marginTop': '50px'}}>
          <GameWon />
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
              {(this.props.gameState ===  'playerRoll' || this.props.gameState === 'playerMove' ||
                this.props.gameState === 'playerQuestion') ?
                <Grid item style={{'marginBottom': '10px'}}>
                  <Die />
                </Grid>
                :
                null
              }
              {
                this.props.gameState === 'playerQuestion' ?
                <Grid item style={{'marginBottom': '10px'}}>
                  <GameQuestions categories={this.state.categories} />
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
}

const mapContextToProps = (state) => ({
  setPlayers: state.actions.setPlayers,
  setCategories: state.actions.setCategories,
  gameState: state.gameState
})

export default withGameStateContext(GameLayout, mapContextToProps)
