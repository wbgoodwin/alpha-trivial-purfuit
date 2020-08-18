import React, { Component } from 'react'
import { Stage, Layer } from 'react-konva'
import BoardSquare from './BoardSquare/BoardSquare'
import { withGameStateContext } from '../../GameContext'
import { colorMapping } from '../../colors'
import Token from './Token'
import BoardGraph from '../../classes/BoardGraph'

class GameBoard extends Component {
  constructor(props) {
    super(props)

    this.width = window.innerWidth;
    this.center = (this.width * 0.45) - 400
    this.squareSide = 100;
    this.topOfBoard = 0;

    this.mapPlayers = this.mapPlayers.bind(this)
    this.updateLocation = this.updateLocation.bind(this)

    this.boardGraph = new BoardGraph();
  }

  componentDidMount() {
    this.props.updateBoardCenter(this.center)
    this.forceUpdate()
  }

  mapPlayers(player, index) {
    return (
      <Token
				id={`player-${index}-token`}
        key={index}
        x={player.currentPositionX}
        y={player.currentPositionY}
        categories={this.props.categories}
        color={colorMapping[player.color]}
        player={player}
		  />
    )
  }

  updateLocation(x, y, graphCoordinates, squareFunction, squareCategory) {
    try {
      this.props.updateTokenLocation(x, y, graphCoordinates, squareFunction, squareCategory)
    }
    catch {}
    this.forceUpdate()
  }

  getAssociatedGraphNode = (x, y) => {
      for (const [key, value] of this.boardGraph.getGraph()) {
        if (key.x === x && key.y === y) {
            return value;
        }
    }
  }

  render() {
    return (
      <div id="board" style={{'paddingTop': '10px'}}>
        <Stage width={this.width} height={900} container="board">
          <Layer>
            <BoardSquare  node={this.getAssociatedGraphNode(-4,-4)}x={this.center - (4 * this.squareSide)} y={this.topOfBoard} category={this.props.categories[0]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(-3,-4)} x={this.center - (3 * this.squareSide)} y={this.topOfBoard} category={this.props.categories[1]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(-2,-4)} x={this.center - (2 * this.squareSide)} y={this.topOfBoard} squareFunction="roll again" category={this.props.categories[2]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(-1,-4)} x={this.center - (this.squareSide)} y={this.topOfBoard} category={this.props.categories[3]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(0,-4)} x={this.center} y={this.topOfBoard}  squareFunction="headquarter" category={this.props.categories[0]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(1,-4)} x={this.center + (this.squareSide)} y={this.topOfBoard} category={this.props.categories[1]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(2,-4)} x={this.center + (2 * this.squareSide)} y={this.topOfBoard} squareFunction="roll again" category={this.props.categories[2]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(3,-4)} x={this.center + (3 * this.squareSide)} y={this.topOfBoard} category={this.props.categories[3]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(4,-4)} x={this.center + (4 * this.squareSide)} y={this.topOfBoard} category={this.props.categories[0]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>

            <BoardSquare node={this.getAssociatedGraphNode(-4,-3)} x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (this.squareSide)} category={this.props.categories[3]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(-4,-2)} x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (2 * this.squareSide)} squareFunction="roll again" category={this.props.categories[1]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(-4,-1)} x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (3 * this.squareSide)} category={this.props.categories[2]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(-4,0)} x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} squareFunction="headquarter" category={this.props.categories[1]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(-4,1)} x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (5 * this.squareSide)} category={this.props.categories[3]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(-4,2)} x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (6 * this.squareSide)} squareFunction="roll again" category={this.props.categories[1]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(-4,3)} x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (7 * this.squareSide)} category={this.props.categories[2]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>

            <BoardSquare node={this.getAssociatedGraphNode(4,-3)} x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (this.squareSide)} category={this.props.categories[3]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(4,-2)} x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (2 * this.squareSide)} squareFunction="roll again" category={this.props.categories[1]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(4,-1)} x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (3 * this.squareSide)} category={this.props.categories[1]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(4,0)} x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} squareFunction="headquarter" category={this.props.categories[2]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(4,1)} x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (5 * this.squareSide)} category={this.props.categories[3]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(4,2)} x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (6 * this.squareSide)} squareFunction="roll again" category={this.props.categories[1]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll} />
            <BoardSquare node={this.getAssociatedGraphNode(4,3)} x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (7 * this.squareSide)} category={this.props.categories[2]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>


            <BoardSquare node={this.getAssociatedGraphNode(-4,4)} x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.props.categories[3]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(-3,4)} x={this.center - (3 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.props.categories[1]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(-2,4)} x={this.center - (2 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} squareFunction="roll again" category={this.props.categories[2]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(-1,4)} x={this.center - (this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.props.categories[0]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(0,4)} x={this.center} y={this.topOfBoard + (8 * this.squareSide)} squareFunction="headquarter" category={this.props.categories[3]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(1,4)} x={this.center + (this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.props.categories[1]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(2,4)} x={this.center + (2 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} squareFunction="roll again" category={this.props.categories[2]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(3,4)} x={this.center + (3 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.props.categories[3]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(4,4)} x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.props.categories[0]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>


            <BoardSquare node={this.getAssociatedGraphNode(0, -3)} x={this.center} y={this.topOfBoard + (this.squareSide)} category={this.props.categories[0]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(0, -2)} x={this.center} y={this.topOfBoard + (2 * this.squareSide)} category={this.props.categories[1]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(0,-1)} x={this.center} y={this.topOfBoard + (3 * this.squareSide)} category={this.props.categories[2]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(0,1)} x={this.center} y={this.topOfBoard + (5 * this.squareSide)} category={this.props.categories[0]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(0,2)} x={this.center} y={this.topOfBoard + (6 * this.squareSide)} category={this.props.categories[1]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(0,3)} x={this.center} y={this.topOfBoard + (7 * this.squareSide)} category={this.props.categories[2]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>

            <BoardSquare node={this.getAssociatedGraphNode(-3,0)} x={this.center - (3 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.props.categories[1]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(-2,0)} x={this.center - (2 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.props.categories[2]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(-1,0)} x={this.center - (this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.props.categories[3]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(0,0)} x={this.center} y={this.topOfBoard + (4 * this.squareSide)} squareFunction="center hub" category={this.props.categories} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(1,0)} x={this.center + (this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.props.categories[1]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(2,0)} x={this.center + (2 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.props.categories[2]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
            <BoardSquare node={this.getAssociatedGraphNode(3,0)} x={this.center + (3 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.props.categories[3]} updateLocation={this.updateLocation} currentPlayer={this.props.currentPlayer} dieRoll={this.props.dieRoll}/>
          </Layer>
          <Layer>
            {this.props.players.map(this.mapPlayers)}
          </Layer>
        </Stage>
      </div>
    )
  }
}

const mapContextToProps = (state) => ({
  players: state.players,
  categories: state.categories,
  updateTokenLocation: state.actions.updateTokenLocation,
  updateBoardCenter: state.actions.updateBoardCenter,
  currentPlayer: state.currentPlayer,
  dieRoll: state.dieRoll,
})

export default withGameStateContext(GameBoard, mapContextToProps)
