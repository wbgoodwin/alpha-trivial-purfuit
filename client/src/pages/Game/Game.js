import * as React from 'react'
import GameLayout from '../../components/Game/GameLayout'
import Nav from '../../components/Nav'
import { GameStateProvider, GameStateContext } from '../../GameContext'

class Game extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Nav/>
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
