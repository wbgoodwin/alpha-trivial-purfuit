import React, { Component } from 'react';
import { Stage, Layer, Group } from 'react-konva';
import BoardSquare from './BoardSquare'
import Die from '../Game/Die/Die'
import GameQuestions from '../Game/GameQuestions'
import GameLogicController from '../../controllers/GameLogicController'
import './GameBoard.css'
import { retrieveCategories } from '../../controllers/GameLogicController'
import PlayerList from '../Game/PlayerList';
import { withGameStateContext } from '../../GameContext'

class GameBoard extends Component {
  constructor(props) {
    super(props)

    this.width = window.innerWidth;
    this.center = (this.width * .6) - 400
    this.squareSide = 50;
    this.topOfBoard = 20;
  }

  render() {
    return (
      <div id="board" className="column right">
        <Stage width={1000} height={window.innerHeight} container="board">
          <Layer>
            <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard} category={this.props.categories[0]} />
            <BoardSquare x={this.center - (3 * this.squareSide)} y={this.topOfBoard} category={this.props.categories[1]}/>
            <BoardSquare x={this.center - (2 * this.squareSide)} y={this.topOfBoard} squareFunction="roll again" category={this.props.categories[2]}/>
            <BoardSquare x={this.center - (this.squareSide)} y={this.topOfBoard} category={this.props.categories[3]}/>
            <BoardSquare x={this.center} y={this.topOfBoard}  squareFunction="headquarter" category={this.props.categories[0]}/>
            <BoardSquare x={this.center + (this.squareSide)} y={this.topOfBoard} category={this.props.categories[1]}/>
            <BoardSquare x={this.center + (2 * this.squareSide)} y={this.topOfBoard} squareFunction="roll again" category={this.props.categories[2]}/>
            <BoardSquare x={this.center + (3 * this.squareSide)} y={this.topOfBoard} category={this.props.categories[3]}/>
            <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard} category={this.props.categories[0]} />

            <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (this.squareSide)} category={this.props.categories[3]}/>
            <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (2 * this.squareSide)} squareFunction="roll again" category={this.props.categories[1]}/>
            <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (3 * this.squareSide)} category={this.props.categories[2]}/>
            <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} squareFunction="headquarter" category={this.props.categories[1]} />
            <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (5 * this.squareSide)} category={this.props.categories[3]}/>
            <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (6 * this.squareSide)} squareFunction="roll again" category={this.props.categories[1]}/>
            <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (7 * this.squareSide)} category={this.props.categories[2]}/>

            <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (this.squareSide)} category={this.props.categories[3]}/>
            <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (2 * this.squareSide)} squareFunction="roll again" category={this.props.categories[1]}/>
            <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (3 * this.squareSide)} category={this.props.categories[1]}/>
            <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} squareFunction="headquarter" category={this.props.categories[2]} />
            <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (5 * this.squareSide)} category={this.props.categories[3]}/>
            <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (6 * this.squareSide)} squareFunction="roll again" category={this.props.categories[1]}/>
            <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (7 * this.squareSide)} category={this.props.categories[2]}/>


            <BoardSquare x={this.center - (4 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.props.categories[3]} />
            <BoardSquare x={this.center - (3 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.props.categories[1]}/>
            <BoardSquare x={this.center - (2 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} squareFunction="roll again" category={this.props.categories[2]}/>
            <BoardSquare x={this.center - (this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.props.categories[0]}/>
            <BoardSquare x={this.center} y={this.topOfBoard + (8 * this.squareSide)} squareFunction="headquarter" category={this.props.categories[3]} />
            <BoardSquare x={this.center + (this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.props.categories[1]}/>
            <BoardSquare x={this.center + (2 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} squareFunction="roll again" category={this.props.categories[2]}/>
            <BoardSquare x={this.center + (3 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.props.categories[3]}/>
            <BoardSquare x={this.center + (4 * this.squareSide)} y={this.topOfBoard + (8 * this.squareSide)} category={this.props.categories[0]} />


            <BoardSquare x={this.center } y={this.topOfBoard + (this.squareSide)} category={this.props.categories[0]}/>
            <BoardSquare x={this.center} y={this.topOfBoard + (2 * this.squareSide)} category={this.props.categories[1]}/>
            <BoardSquare x={this.center} y={this.topOfBoard + (3 * this.squareSide)} category={this.props.categories[2]}/>
            <BoardSquare x={this.center} y={this.topOfBoard + (4 * this.squareSide)} category={this.props.categories[3]} />
            <BoardSquare x={this.center} y={this.topOfBoard + (5 * this.squareSide)} category={this.props.categories[0]}/>
            <BoardSquare x={this.center} y={this.topOfBoard + (6 * this.squareSide)} category={this.props.categories[1]}/>
            <BoardSquare x={this.center} y={this.topOfBoard + (7 * this.squareSide)} category={this.props.categories[2]}/>

            <BoardSquare x={this.center - (3 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.props.categories[1]}/>
            <BoardSquare x={this.center - (2 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.props.categories[2]}/>
            <BoardSquare x={this.center - (this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.props.categories[3]}/>
            <BoardSquare x={this.center} y={this.topOfBoard + (4 * this.squareSide)} squareFunction="center hub" category={this.props.categories} />
            <BoardSquare x={this.center + (this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.props.categories[1]}/>
            <BoardSquare x={this.center + (2 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.props.categories[2]}/>
            <BoardSquare x={this.center + (3 * this.squareSide)} y={this.topOfBoard + (4 * this.squareSide)} category={this.props.categories[3]}/>
          </Layer>
          <Layer>
            {this.props.players.map(player => player.getToken())}
          </Layer>
        </Stage>
      </div>
    )
  }
}

const mapContextToProps = (state) => ({
  players: state.players,
  categories: state.categories
})

export default withGameStateContext(GameBoard, mapContextToProps)
