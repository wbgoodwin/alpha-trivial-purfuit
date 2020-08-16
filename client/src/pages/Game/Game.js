import * as React from 'react'
import { getQuestion } from '../../controllers/GameLogicController'
import GameBoard from '../../components/GameBoard/GameBoard'

import GameLayout from '../../components/Game/GameLayout'
import Nav from '../../components/Nav'
import Breadcrumbs from '../../components/Breadcrumbs'
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
