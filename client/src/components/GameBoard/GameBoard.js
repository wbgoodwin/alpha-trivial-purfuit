import React, { Component } from 'react';
import { Stage, Layer, Group } from 'react-konva';
import BoardSquare from './BoardSquare'
import Die from './Die'
import GameQuestions from './GameQuestions'
import GameLogicController from '../../controllers/GameLogicController'
import './GameBoard.css'
import { retrieveCategories } from '../../controllers/GameLogicController'
import GameSettings from './GameSettings'

class GameBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
      gameControl: null,
      showPlayerSetupModal: true
    }

    this.width = window.innerWidth;
    this.center = (this.width/2) - 400
    this.squareSide = 100;
    this.topOfBoard = 20;

    this.handleGameStartSubmit = this.handleGameStartSubmit.bind(this)
    this.getCategoryNames = this.getCategoryNames.bind(this)
  }

  async componentDidMount() {
    let categories = await retrieveCategories()

    this.setState({
      categories: categories
    })
  }

  handleGameStartSubmit(players) {
    const gameControl = new GameLogicController(this.state.categories, players)

    this.setState({
      showPlayerSetupModal: false,
      gameControl: gameControl
    })
  }

  getCategoryNames() {
    const { categories } = this.state
    return categories.map(c => c.getName())
  }

  render() {
    if (this.state.showPlayerSetupModal) {
      return (
        <GameSettings handleSubmit={this.handleGameStartSubmit} />
      )
    }
    else {
      return (
        <div className="row">
          <div className="column left">
            <Die />
            <br/>
            <GameQuestions categories={this.state.categories}/>
          </div>
          <div id="board" className="column right">
            <Stage width={1000} height={window.innerHeight}>
              <Layer>
                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard} category={this.state.categories[0]} />
                <BoardSquare x={this.center - (3 * this.squareSide)} y={this.topOfBoard} category={this.state.categories[1]}/>
                <BoardSquare x={this.center - (2 * this.squareSide)} y={this.topOfBoard} squareFunction="roll again" category={this.state.categories[2]}/>
                <BoardSquare x={this.center - (this.squareSide)} y={this.topOfBoard} category={this.state.categories[3]}/>
                <BoardSquare x={this.center} y={this.topOfBoard}  squareFunction="headquarter" category={this.state.categories[0]}/>
                <BoardSquare x={this.center + (this.squareSide)} y={this.topOfBoard} category={this.state.categories[1]}/>
                <BoardSquare x={this.center + (2 * this.squareSide)} y={this.topOfBoard} squareFunction="roll again" category={this.state.categories[2]}/>
                <BoardSquare x={this.center + (3 * this.squareSide)} y={this.topOfBoard} category={this.state.categories[3]}/>
                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard} category={this.state.categories[0]} />

                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (this.squareSide)} category={this.state.categories[3]}/>
                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (2 * this.squareSide)} squareFunction="roll again" category={this.state.categories[1]}/>
                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (3 * this.squareSide)} category={this.state.categories[2]}/>
                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} squareFunction="headquarter" category={this.state.categories[1]} />
                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (5 * this.squareSide)} category={this.state.categories[3]}/>
                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (6 * this.squareSide)} squareFunction="roll again" category={this.state.categories[1]}/>
                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (7 * this.squareSide)} category={this.state.categories[2]}/>

                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (this.squareSide)} category={this.state.categories[3]}/>
                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (2 * this.squareSide)} squareFunction="roll again" category={this.state.categories[1]}/>
                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (3 * this.squareSide)} category={this.state.categories[1]}/>
                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} squareFunction="headquarter" category={this.state.categories[2]} />
                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (5 * this.squareSide)} category={this.state.categories[3]}/>
                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (6 * this.squareSide)} squareFunction="roll again" category={this.state.categories[1]}/>
                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (7 * this.squareSide)} category={this.state.categories[2]}/>


                <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[3]} />
                <BoardSquare x={this.center - (3 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[1]}/>
                <BoardSquare x={this.center - (2 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} squareFunction="roll again" category={this.state.categories[2]}/>
                <BoardSquare x={this.center - (this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[0]}/>
                <BoardSquare x={this.center} y={this.topOfBoard + (8 * this.squareSide)} squareFunction="headquarter" category={this.state.categories[3]} />
                <BoardSquare x={this.center + (this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[1]}/>
                <BoardSquare x={this.center + (2 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} squareFunction="roll again" category={this.state.categories[2]}/>
                <BoardSquare x={this.center + (3 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[3]}/>
                <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.state.categories[0]} />


                <BoardSquare x={this.center } y={this.topOfBoard + (this.squareSide)} category={this.state.categories[0]}/>
                <BoardSquare x={this.center} y={this.topOfBoard + (2 * this.squareSide)} category={this.state.categories[1]}/>
                <BoardSquare x={this.center} y={this.topOfBoard + (3 * this.squareSide)} category={this.state.categories[2]}/>
                <BoardSquare x={this.center} y={this.topOfBoard + (4 * this.squareSide)} category={this.state.categories[3]} />
                <BoardSquare x={this.center} y={this.topOfBoard + (5 * this.squareSide)} category={this.state.categories[0]}/>
                <BoardSquare x={this.center} y={this.topOfBoard + (6 * this.squareSide)} category={this.state.categories[1]}/>
                <BoardSquare x={this.center} y={this.topOfBoard + (7 * this.squareSide)} category={this.state.categories[2]}/>

                <BoardSquare x={this.center - (3 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.state.categories[1]}/>
                <BoardSquare x={this.center - (2 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.state.categories[2]}/>
                <BoardSquare x={this.center - (this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.state.categories[3]}/>
                <BoardSquare x={this.center} y={this.topOfBoard + (4 * this.squareSide)} squareFunction="center hub" category={this.state.categories} />
                <BoardSquare x={this.center + (this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.state.categories[1]}/>
                <BoardSquare x={this.center + (2 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.state.categories[2]}/>
                <BoardSquare x={this.center + (3 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.state.categories[3]}/>
              </Layer>
              <Layer>
                {this.gameControl === null ? <Group></Group> : this.state.gameControl.getAllPlayers().map(player => player.getToken())}
              </Layer>
            </Stage>
          </div>
        </div>
      )
    }
  }
}

export default GameBoard
