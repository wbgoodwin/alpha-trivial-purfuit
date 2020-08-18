import * as React from 'react'
import GameLayout from '../../components/Game/GameLayout'
import Nav from '../../components/Nav'
import { GameStateProvider, GameStateContext } from '../../GameContext'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

class Game extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Nav>
          <Button
            style={{'marginRight': '10px', 'height': '35px', 'marginTop': '7px'}}
            variant="contained"
            size="small"
          >
            <Link to="/" style={{'textDecoration': 'none', 'color': '#000000'}}>
              Exit Game
            </Link>
          </Button>
        </Nav>
        <GameStateProvider {...this.props}>
          <GameStateContext.Consumer>
            {() => <GameLayout />}
          </GameStateContext.Consumer>
        </GameStateProvider>
      </div>
    )
  }
}

export default Game
