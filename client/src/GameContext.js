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
      gameState: 'setup',
      dieRoll: null,
      chipOpportunity: false,
      winOpportunity: false,
      questionCategory: null,
      actions: {
        setCategories: this.setCategories,
        setPlayers: this.setPlayers,
        setDieRoll: this.setDieRoll,
        setPlayerMoved: this.setPlayerMoved,
        setPlayerRollAgain: this.setPlayerRollAgain,
        nextPlayer: this.nextPlayer,
        updateTokenLocation: this.updateTokenLocation,
        startNewGame: this.startNewGame
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
      currentPlayer: playerList[0],
      gameState: 'playerRoll'
    })
  }

  setDieRoll = (roll) => {
    this.setState({
      dieRoll: roll,
      gameState: 'playerMove'
    })
  }

  setPlayerMoved = () => {
    this.setState({
      gameState: 'playerQuestion'
    })
  }

  setPlayerRollAgain = () => {
    if (this.state.winOpportunity) {
      this.state.currentPlayer.addChip(this.state.questionCategory)
      if (this.state.currentPlayer.isTokenFull()) {
        this.setState({
          gameState: 'playerWon'
        })
      }
      else {
        this.setState({
          gameState: 'playerRoll',
          dieRoll: null,
          chipOpportunity: false,
          winOpportunity: false
        })
      }
    }
    else {
      if (this.state.chipOpportunity) {
        this.state.currentPlayer.addChip(this.state.questionCategory)
      }

      this.setState({
        gameState: 'playerRoll',
        dieRoll: null,
        chipOpportunity: false,
        winOpportunity: false
      })
    }
  }

  nextPlayer = () => {
    const { players, currentPlayer } = this.state
    let nextPlayer = null

    if (players.length === 1) {
      nextPlayer = players[0]
    }
    else {
      for (let i = 0; i < players.length; i++) {
        if (players[i] === currentPlayer) {
          if (i === players.length - 1) {
            nextPlayer = players[0]
          }
          else {
            nextPlayer = players[i + 1]
          }
        }
      }
    }

    this.setState({
      currentPlayer: nextPlayer,
      gameState: 'playerRoll',
      dieRoll: null,
      chipOpportunity: false
    })
  }

  updateTokenLocation = (x, y, squareFunction, squareCategory) => {
    if (this.state.gameState === 'playerMove') {
      this.state.currentPlayer.updateTokenLocation(x, y)

      if (squareFunction === 'roll again') {
        this.setState({
          gameState: 'playerRoll',
          dieRoll: null
        })
      }
      else if (squareFunction === 'center hub') {
        this.setState({
          questionCategory: 0,
          winOpportunity: true,
          gameState: 'playerQuestion'
        })
      }
      else if (squareFunction === 'headquarter') {
        this.setState({
          chipOpportunity: true,
          gameState: 'playerQuestion',
          questionCategory: squareCategory.getId()
        })
      }
      else {
        this.setState({
          gameState: 'playerQuestion',
          questionCategory: squareCategory.getId()
        })
      }
    }
  }

  startNewGame = () => {
    this.setState({
      categories: [],
      players: [],
      currentPlayer: null,
      gameState: 'setup',
      dieRoll: null,
      chipOpportunity: false,
      winOpportunity: false,
      questionCategory: null
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
