import * as React from 'react'
import Player from './classes/Game/Player'
import { shuffle } from './utils/shuffle'

export const GameStateContext = React.createContext(null)

export function withGameStateContext(Component, mapContextToProps) {
  return function Combined(props) {
    return (
      <GameStateContext.Consumer>
        {contextProps => <Component {...props} {...mapContextToProps(contextProps, props)} />}
      </GameStateContext.Consumer>
    )
  }
}

export class GameStateProvider extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
      players: [],
      currentPlayer: null,
      gameControl: null,
      actions: {
        setCategories: this.setCategories,
        setPlayers: this.setPlayers
      }
    }
  }

  setCategories = (categories) => {
    this.setState({
      categories
    })
  }

  setPlayers = (players, categories) => {
    let playerList = []
		let position = 0

		for (let p in players) {
			const player = players[p]
			playerList.push(new Player(categories, player.color, player.name, position))

			position += 60
		}

		playerList = shuffle(playerList)
		this.setState({
      players: playerList,
      currentPlayer: playerList[0]
    })
  }

  render() {
    return (
      <GameStateContext.Provider value={this.state}>
        {this.props.children}
      </GameStateContext.Provider>
    )
  }
}
